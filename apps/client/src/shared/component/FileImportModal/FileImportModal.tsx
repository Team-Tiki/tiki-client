import { IcFileItem, IcSearch } from '@tiki/icon';
import { DropdownItem, DropdownList, DropdownRoot, Flex, Input, scrollStyle } from '@tiki/ui';
import { useDebounce, useOutsideClick, useOverlay } from '@tiki/utils';

import { useMemo, useState } from 'react';

import { components } from '@/shared/__generated__/schema';
import { $api } from '@/shared/api/client';
import {
  emptyStyle,
  fileListStyle,
  itemStyle,
  listWrapperStyle,
  notFoundStyle,
  overlayStyle,
  textFieldStyle,
} from '@/shared/component/FileImportModal/FileImportModal.style';
import { Modal } from '@/shared/component/Modal';
import UploadedFileItem from '@/shared/component/UploadedFileItem/UploadedFileItem';
import { FILE } from '@/shared/constant';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { isFileModalData, useCloseModal, useModalData } from '@/shared/store/modal';
import { getFileVolume } from '@/shared/util/file';

type File = components['schemas']['DocumentInfoGetResponse'];

const FileImportModal = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [searchFile, setSearchFile] = useState('');

  const modalData = useModalData();
  const closeModal = useCloseModal();

  const { isOpen, open, close } = useOverlay();
  const dropdownRef = useOutsideClick<HTMLDivElement>(close);

  const teamId = useInitializeTeamId();
  const filterKeyword = useDebounce(searchFile, 500);

  const isButtonActive = selectedFiles.length !== 0;

  const { data: fileData } = $api.useQuery('get', '/api/v1/documents/team/{teamId}/timeline', {
    params: {
      query: { type: 'executive' },
      path: { teamId },
    },
  });

  const filteredFiles = useMemo(
    () =>
      fileData?.data?.documents.filter((file) => file.name.normalize('NFC').includes(filterKeyword.normalize('NFC'))),
    [fileData, filterKeyword]
  );

  const handleSelect = (item: File) => {
    const isSelected = selectedFiles.some((file) => file.documentId === item.documentId);

    if (!isSelected) {
      setSelectedFiles((prev) => [...prev, item]);
    }

    close();
  };

  const handleDelete = (documentId: number) => {
    setSelectedFiles((prev) => prev.filter((file) => file.documentId !== documentId));
  };

  const handleUpload = () => {
    if (isFileModalData(modalData) && modalData.onUpload) {
      modalData.onUpload();
    }
  };

  return (
    <>
      <Modal.Header />
      <Modal.Body>
        <Flex styles={{ width: '100%', direction: 'column', marginTop: '2rem' }}>
          <Input
            LeftIcon={<IcSearch width={16} height={16} />}
            isFilled={false}
            onFocus={open}
            placeholder="search"
            onChange={(e) => setSearchFile(e.target.value)}
          />
          <DropdownRoot css={{ width: '100%' }} ref={dropdownRef} role="listbox">
            <DropdownList css={[overlayStyle(isOpen), scrollStyle]} isOpen={isOpen}>
              {filteredFiles?.length === 0 ? (
                <DropdownItem css={notFoundStyle}>{FILE.NOT_FOUND}</DropdownItem>
              ) : (
                filteredFiles?.map((file) => (
                  <DropdownItem key={file.documentId} css={itemStyle} onSelect={() => handleSelect(file)}>
                    <IcFileItem width={20} height={20} css={{ margin: '1.2rem' }} />
                    <p css={textFieldStyle}>
                      {file.name}
                      {file.url && <span>{file.url}</span>}
                    </p>
                  </DropdownItem>
                ))
              )}
            </DropdownList>
          </DropdownRoot>
          <div css={listWrapperStyle}>
            {selectedFiles.length === 0 ? (
              <div css={emptyStyle}>{FILE.NO_CONNECTED_FILE}</div>
            ) : (
              selectedFiles.map((file) => (
                <div css={[scrollStyle, fileListStyle]} key={file.documentId}>
                  <UploadedFileItem
                    key={file.documentId}
                    title={file.name}
                    fileSize={getFileVolume(file.capacity || 0)}
                    uploadedSize={getFileVolume(file.capacity || 0)}
                    onDelete={() => handleDelete(file.documentId ?? 0)}
                    size="small"
                  />
                </div>
              ))
            )}
          </div>
        </Flex>
      </Modal.Body>

      <Modal.Footer
        contentType="file"
        closeModal={closeModal}
        buttonClick={handleUpload}
        isButtonActive={isButtonActive}
      />
    </>
  );
};

export default FileImportModal;

import { IcFileItem, IcSearch } from '@tiki/icon';
import { DropdownItem, DropdownList, DropdownRoot, Input, scrollStyle } from '@tiki/ui';
import { useOutsideClick, useOverlay } from '@tiki/utils';

import { useState } from 'react';

import UploadedFileItem from '@/page/archiving/index/component/TimeBlockModal/component/UploadModal/File/AppendFile/File/UploadedFileItem';

import { components } from '@/shared/__generated__/schema';
import { $api } from '@/shared/api/client';
import {
  emptyStyle,
  fileListStyle,
  itemStyle,
  overlayStyle,
  textFieldStyle,
} from '@/shared/component/FileImportModal/FileImportModal.style';
import { Modal } from '@/shared/component/Modal';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useCloseModal } from '@/shared/store/modal';
import { getFileVolume } from '@/shared/util/file';

type File = components['schemas']['DocumentInfoGetResponse'];

const FileImportModal = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadStatus, setUploadStatus] = useState<Record<string, boolean>>({});

  const { isOpen, open, close } = useOverlay();
  const dropdownRef = useOutsideClick<HTMLDivElement>(close);

  const closeModal = useCloseModal();

  const teamId = useInitializeTeamId();

  const { data: fileData } = $api.useQuery('get', '/api/v1/documents/team/{teamId}/timeline', {
    params: {
      query: { type: 'executive' },
      path: { teamId },
    },
  });

  const handleSelect = (item: File) => {
    const isSelected = selectedFiles.some((file) => file.documentId === item.documentId);

    if (!isSelected) {
      setSelectedFiles((prev) => [...prev, item]);
      setUploadStatus((prevStatus) => ({ ...prevStatus, [item.name]: true }));
    }

    close();
  };

  const handleDelete = (documentId: number) => {
    setSelectedFiles((prev) => prev.filter((file) => file.documentId !== documentId));
  };

  return (
    <>
      <Modal.Header />
      <Modal.Body>
        <Input LeftIcon={<IcSearch width={16} height={16} />} isFilled={false} onFocus={open} placeholder="파일 검색" />
        <DropdownRoot css={{ width: '100%' }} ref={dropdownRef} role="listbox">
          <DropdownList css={[overlayStyle(isOpen), scrollStyle]} isOpen={isOpen}>
            {fileData?.data?.documents.map((file) => (
              <DropdownItem key={file.documentId} css={itemStyle} onSelect={() => handleSelect(file)}>
                <IcFileItem width={20} height={20} css={{ margin: '1.2rem' }} />
                <p css={textFieldStyle}>
                  {file.name}
                  {file.url && <span>{file.url}</span>}
                </p>
              </DropdownItem>
            ))}
          </DropdownList>
        </DropdownRoot>
        <div css={{ marginTop: '2rem' }}>
          {selectedFiles.length === 0 ? (
            <div css={emptyStyle}>연동된 파일이 없습니다.</div>
          ) : (
            selectedFiles.map((file) => (
              <div css={[scrollStyle, fileListStyle]}>
                <UploadedFileItem
                  key={file.documentId}
                  title={file.name}
                  fileSize={getFileVolume(file.capacity || 0)}
                  uploadedSize={getFileVolume(file.capacity || 0)}
                  onDelete={() => handleDelete(file.documentId ?? 0)}
                  isUploading={!uploadStatus[file.name]}
                  size="small"
                />
              </div>
            ))
          )}
        </div>
      </Modal.Body>
      <Modal.Footer contentType="file" closeModal={closeModal} buttonClick={closeModal} />
    </>
  );
};

export default FileImportModal;

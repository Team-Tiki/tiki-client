import { IcSearch } from '@tiki/icon';
import { Button, Flex, Input } from '@tiki/ui';
import { useDebounce } from '@tiki/utils';

import { useState } from 'react';

import { components } from '@/shared/__generated__/schema';
import BrowseFileHeader from '@/shared/component/BrowseFileHeader/BrowseFileHeader';
import BrowseFileItem from '@/shared/component/BrowseFileItem/BrowseFileItem';
import { scrollContainerStyle } from '@/shared/component/BrowseFileModal/BrowseFileModal.style';
import { Modal } from '@/shared/component/Modal';
import { SEARCH_DELAY } from '@/shared/constant';
import { useFunnel } from '@/shared/hook/common/useFunnel';
import { useCloseModal, useModalIsOpen } from '@/shared/store/modal';

type DocumentDetail = components['schemas']['DocumentInfoGetResponse'];

interface BrowseFileProps {
  type?: 'create-block' | 'timeblock-file';
  files: DocumentDetail[];
  selectedFiles: DocumentDetail[];
  onShowBlockAdd: () => void;
  onConfirmFile: (selectedFiles: DocumentDetail[]) => void;
}

const BrowseFileModal = ({ type, files, selectedFiles, onShowBlockAdd, onConfirmFile }: BrowseFileProps) => {
  const [selectedBrowseFile, setSelectedBrowseFile] = useState<DocumentDetail[]>(selectedFiles);
  const [searchFile, setSearchFile] = useState('');

  const isOpen = useModalIsOpen();
  const closeModal = useCloseModal();
  const { nextStep, prevStep } = useFunnel();

  const step = type === 'create-block' ? 3 : 1;
  const isDisabled = selectedFiles.length === 0;

  const filterKeyword = useDebounce(searchFile, SEARCH_DELAY);
  const filteredFiles = files.filter((file) => file.name.normalize('NFC').includes(filterKeyword.normalize('NFC')));

  const handleFileSelect = (file: DocumentDetail) => {
    setSelectedBrowseFile((prevSelectedFiles) => {
      const isSelected = prevSelectedFiles.some((selectedFile) => selectedFile.documentId === file.documentId);

      const updatedFiles = isSelected
        ? prevSelectedFiles.filter((selectedFile) => selectedFile.documentId !== file.documentId)
        : [...prevSelectedFiles, file];

      onConfirmFile(updatedFiles);
      return updatedFiles;
    });
  };
  const handleNext = () => {
    nextStep();
  };

  return (
    <Modal size="large" isOpen={isOpen} onClose={closeModal}>
      <Modal.Header step={step} />
      <Modal.Body>
        <Flex css={{ flexDirection: 'column', gap: '2rem', width: '100%', paddingTop: '2rem' }}>
          <Flex css={{ flexDirection: 'row', alignItems: 'center', gap: '0.4rem', width: '100%' }}>
            <Input
              placeholder="문서를 검색해보세요"
              value={searchFile}
              LeftIcon={<IcSearch width={16} height={16} />}
              onChange={(e) => setSearchFile(e.target.value)}
            />
            <Button variant="secondary" size="large" onClick={onShowBlockAdd}>
              파일 업로드
            </Button>
          </Flex>

          <div css={scrollContainerStyle}>
            <BrowseFileHeader />
            <ul css={{ marginTop: '4.8rem' }}>
              {filteredFiles.map((file) => (
                <BrowseFileItem
                  key={file.documentId}
                  documentId={file.documentId}
                  name={file.name}
                  capacity={file.capacity}
                  url={file.url}
                  createdTime={file.createdTime}
                  isSelected={selectedBrowseFile.some((selectedFile) => selectedFile.documentId === file.documentId)}
                  onSelect={() => handleFileSelect(file)}
                />
              ))}
            </ul>
          </div>
        </Flex>
      </Modal.Body>
      <Modal.Footer
        step={step}
        type={type ?? 'create-block'}
        onClick={handleNext}
        onClose={closeModal}
        onPrev={prevStep}
        disabled={isDisabled}
      />
    </Modal>
  );
};

export default BrowseFileModal;

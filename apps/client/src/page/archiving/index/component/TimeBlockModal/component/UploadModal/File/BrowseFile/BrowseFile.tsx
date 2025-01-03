import { IcSearch } from '@tiki/icon';
import { Button, Flex, Input } from '@tiki/ui';
import { useDebounce } from '@tiki/utils';

import { useEffect, useMemo, useState } from 'react';

import BrowseFileItem from '@/page/archiving/index/component/TimeBlockModal/component/UploadModal/File/BrowseFile/File/BrowseFileItem';
import BrowseFileHeader from '@/page/archiving/index/component/TimeBlockModal/component/UploadModal/File/BrowseFile/FileHeader/BrowseFileHeader';
import { scrollContainerStyle } from '@/page/archiving/index/component/TimeBlockModal/component/UploadModal/UploadModal.style';

import { components } from '@/shared/__generated__/schema';

type DocumentDetail = components['schemas']['DocumentInfoGetResponse'];

interface BrowseFileProps {
  files: DocumentDetail[];
  selectedFiles: DocumentDetail[];
  onUpdateSelection: (selectedFiles: DocumentDetail[]) => void;
  onShowBlockAdd: () => void;
}

const BrowseFile = ({ files, selectedFiles, onUpdateSelection, onShowBlockAdd }: BrowseFileProps) => {
  const [searchFile, setSearchFile] = useState('');

  const filterKeyword = useDebounce(searchFile, 500);

  const filteredFiles = useMemo(
    () => files.filter((file) => file.name.normalize('NFC').includes(filterKeyword.normalize('NFC'))),
    [files, filterKeyword]
  );

  const handleFileSelect = (file: DocumentDetail) => {
    console.log(file);
    console.log(selectedFiles);
    const isSelected = selectedFiles.some((selectedFile) => selectedFile.documentId === file.documentId);

    const updatedSelection = isSelected
      ? selectedFiles.filter((selectedFile) => selectedFile.documentId !== file.documentId)
      : [...selectedFiles, file];
    console.log(updatedSelection);

    onUpdateSelection(updatedSelection);
  };

  useEffect(() => {
    console.log(selectedFiles);
  }, [selectedFiles]);

  return (
    <Flex css={{ flexDirection: 'column', gap: '2rem', width: '100%' }}>
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
        <>
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
                isSelected={selectedFiles.some((selectedFile) => selectedFile.documentId === file.documentId)}
                onSelect={() => handleFileSelect(file)}
              />
            ))}
          </ul>
        </>
      </div>
    </Flex>
  );
};

export default BrowseFile;

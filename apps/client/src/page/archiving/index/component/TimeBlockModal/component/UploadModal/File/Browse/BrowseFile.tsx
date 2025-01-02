import { IcSearch } from '@tiki/icon';
import { Button, Flex, Input } from '@tiki/ui';
import { useDebounce } from '@tiki/utils';

import { useMemo, useState } from 'react';

import BrowseFileHeader from '@/page/archiving/index/component/TimeBlockModal/component/UploadModal/File/Browse/File/BrowseFileHeader';
import BrowseFileItem from '@/page/archiving/index/component/TimeBlockModal/component/UploadModal/File/Browse/File/BrowseFileItem';
import { scrollContainerStyle } from '@/page/archiving/index/component/TimeBlockModal/component/UploadModal/UploadModal.style';
import { DocumentItem } from '@/page/drive/type';

import { components } from '@/shared/__generated__/schema';

type DocumentDetail = components['schemas']['DocumentInfoGetResponse'];

interface BrowseFileProps {
  files: DocumentDetail[];
  selectedFiles: DocumentDetail[];
  onSelectedFilesChange: (selectedFiles: DocumentDetail[]) => void; // 선택 변경 핸들러
  onShowBlockAdd: () => void; // 파일 업로드 화면 전환 핸들러
}

const BrowseFile = ({ files, selectedFiles, onSelectedFilesChange, onShowBlockAdd }: BrowseFileProps) => {
  const [searchFile, setSearchFile] = useState('');
  const [isSelected, setIsSelected] = useState(false);

  const filterKeyword = useDebounce(searchFile, 500);

  const filteredFiles = useMemo(
    () => files.filter((file) => file.name.normalize('NFC').includes(filterKeyword.normalize('NFC'))),
    [files, filterKeyword]
  );

  const handleFileSelect = (file: DocumentDetail) => {
    const isSelected = selectedFiles.some((selectedFile) => selectedFile.documentId === file.documentId);

    const updatedSelection = isSelected
      ? selectedFiles.filter((selectedFile) => selectedFile.documentId !== file.documentId)
      : [...selectedFiles, file];

    onSelectedFilesChange(updatedSelection);
  };

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
            {filteredFiles.map((item) => {
              const file = item as DocumentItem;

              return (
                <BrowseFileItem
                  key={String(file.documentId + file.type)}
                  documentId={file.documentId}
                  name={file.name}
                  capacity={file.capacity}
                  url={file.url}
                  createdTime={file.createdTime}
                  isSelected={isSelected}
                  onSelect={() => {
                    setIsSelected(!isSelected);
                  }}
                />
              );
            })}
          </ul>
        </>
      </div>
    </Flex>
  );
};

export default BrowseFile;

import { IcGrid, IcList, IcSearch } from '@tiki/icon';
import { Button, Flex, Input, Select, Switch } from '@tiki/ui';
import { useDeferredSearchFilter } from '@tiki/utils';

import { useState } from 'react';

import FileListHeader from '@/page/drive/component/FileListHeader/FileListHeader';
import FileListItem from '@/page/drive/component/FileListItem/FileListItem';
import { contentStyle } from '@/page/drive/index.style';

import ContentBox from '@/shared/component/ContentBox/ContentBox';
import EmptySection from '@/shared/component/EmptySection/EmptySection';
import FileGrid from '@/shared/component/FileGrid/FileGrid';

import { FileData } from '@/mock/data/drive';

const DrivePage = () => {
  const filterOption = [{ value: '최근 업로드 순' }, { value: '과거 업로드 순' }];

  const [alignOption, setAlignOption] = useState<'list' | 'grid'>('list');
  const [searchValue, setSearchValue] = useState('');

  const { isStale, filteredData } = useDeferredSearchFilter(FileData, searchValue);

  return (
    <ContentBox
      variant="file"
      title="파일"
      description="5.16GB 사용가능(총 245.11GB)"
      headerOption={
        <Flex styles={{ align: 'center', gap: '0.8rem' }}>
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            css={{ width: '33.6rem' }}
            LeftIcon={<IcSearch width={16} height={16} />}
            placeholder="파일 및 폴더 명을 검색하세요"
          />
          <Button variant="secondary">삭제된 항목</Button>
          <Button>파일 업로드</Button>
        </Flex>
      }
      contentOption={
        <Flex styles={{ width: '100%', justify: 'space-between', align: 'center', gap: '1rem' }}>
          <Flex styles={{ gap: '0.8rem' }}>
            <Button variant="tertiary">전체 선택</Button>
            <Button variant="tertiary">삭제</Button>
            <Button variant="tertiary">다운로드</Button>
          </Flex>

          <Flex styles={{ align: 'center' }}>
            <Switch
              status={alignOption === 'list' ? 'left' : 'right'}
              LeftIcon={{ Icon: IcList, mode: 'stroke' }}
              RightIcon={{ Icon: IcGrid, mode: 'fill' }}
              onSwitchChange={() => setAlignOption((prev) => (prev === 'list' ? 'grid' : 'list'))}
            />
            <Select css={{ width: '13rem' }} placeholder="최근 업로드 순" variant="option" options={filterOption} />
          </Flex>
        </Flex>
      }>
      {alignOption === 'list' ? (
        <>
          <FileListHeader onSelectAll={() => {}} />
          <ul>
            {filteredData.map((item) => (
              <div css={{ opacity: isStale ? 0.4 : 1 }}>
                <FileListItem key={item.fileId} {...item} />
              </div>
            ))}
          </ul>
        </>
      ) : (
        <ul css={contentStyle(FileData.length)}>
          {filteredData.map((item) => (
            <FileGrid key={item.fileId} title={item.title} volume={item.volume} type={item.type} />
          ))}
        </ul>
      )}
      <EmptySection domain="drive" isVisible={FileData.length === 0} />
    </ContentBox>
  );
};

export default DrivePage;

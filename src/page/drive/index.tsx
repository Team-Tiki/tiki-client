import { useState } from 'react';

import Grid from '@/common/asset/svg/ic_grid.svg?react';
import List from '@/common/asset/svg/ic_list.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';
import Select from '@/common/component/Select/Select';
import Switch from '@/common/component/Switch/Switch';

import FileListHeader from '@/page/drive/component/FileListHeader/FileListHeader';
import FileListItem from '@/page/drive/component/FileListItem/FileListItem';
import { contentStyle } from '@/page/drive/index.style';

import ContentBox from '@/shared/component/ContentBox/ContentBox';
import FileGrid from '@/shared/component/FileGrid/FileGrid';

import { FileData } from '@/mock/data/drive';

const DrivePage = () => {
  const filterOption = [{ value: '최근 업로드 순' }, { value: '과거 업로드 순' }];

  const [filter, setFilter] = useState<'list' | 'grid'>('list');

  return (
    <ContentBox
      variant="file"
      title="파일"
      headerOption={
        <Flex styles={{ align: 'center', gap: '0.8rem' }}>
          <Input size="small" placeholder="파일 및 폴더 명을 검색하세요" />
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
              status={filter === 'list' ? 'left' : 'right'}
              LeftIcon={{ Icon: List, mode: 'stroke' }}
              RightIcon={{ Icon: Grid, mode: 'fill' }}
              onSwitchChange={() => setFilter((prev) => (prev === 'list' ? 'grid' : 'list'))}
            />
            <Select css={{ width: '13rem' }} placeholder="최근 업로드 순" variant="option" options={filterOption} />
          </Flex>
        </Flex>
      }>
      {filter === 'list' ? (
        <>
          <FileListHeader onSelectAll={() => {}} />
          <ul>
            {FileData.map((item) => (
              <FileListItem alignType="list" key={item.fileId} {...item} />
            ))}
          </ul>
        </>
      ) : (
        <ul css={contentStyle}>
          {FileData.map((item) => (
            <FileGrid key={item.fileId} title={item.title} volume={item.volume} type={item.type} />
          ))}
        </ul>
      )}
    </ContentBox>
  );
};

export default DrivePage;

import { useState } from 'react';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Select from '@/common/component/Select/Select';
import { useOverlay } from '@/common/hook';

import EmptySection from '@/page/deleted/component/EmptySection/EmptySection';
import { contentStyle } from '@/page/drive/index.style';

import ContentBox from '@/shared/component/ContentBox/ContentBox';
import FileGrid from '@/shared/component/FileGrid/FileGrid';
import { File } from '@/shared/type/file';

const DeletedPage = () => {
  const { isOpen, toggle } = useOverlay();

  const [canSelect, setCanSelect] = useState(false);

  const tmpData: File[] = [
    { fileId: 1, title: '최주용', type: 'pdf', volume: 3000, createdAt: '2024-11-11' },
    { fileId: 2, title: '남다은', type: 'jpg', volume: 3000, createdAt: '2024-11-11' },
    { fileId: 3, title: '이채원', type: 'word', volume: 3000, createdAt: '2024-11-11' },
  ];

  return (
    <ContentBox
      variant="deleted"
      title="휴지통"
      description="5.16GB 사용 가능"
      headerOption={<Button>휴지통 비우기</Button>}
      contentOption={
        <Flex styles={{ justify: 'space-between', align: 'center' }}>
          {canSelect ? (
            <Flex styles={{ gap: '0.8rem' }}>
              <Button variant="tertiary">복구</Button>
              <Button variant="tertiary">영구삭제</Button>
            </Flex>
          ) : (
            <Button onClick={() => setCanSelect(true)} variant="tertiary">
              선택
            </Button>
          )}
          <Select
            isOpen={isOpen}
            css={{ width: '11rem' }}
            variant="option"
            options={[{ value: '최근 삭제 순' }, { value: '과거 삭제 순' }]}
            defaultValue="최근 삭제 순"
            onTrigger={toggle}
          />
        </Flex>
      }>
      {tmpData.length > 0 ? (
        <div>
          <ul css={contentStyle}>
            {tmpData.map((item) => (
              <FileGrid key={item.fileId} title={item.title} type={item.type} volume={item.volume} />
            ))}
          </ul>
        </div>
      ) : (
        <EmptySection />
      )}
    </ContentBox>
  );
};

export default DeletedPage;

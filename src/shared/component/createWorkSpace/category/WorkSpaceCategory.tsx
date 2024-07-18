import { useEffect, useState } from 'react';

import ArrowDown from '@/common/asset/svg/arrow_drop_down.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Select from '@/common/component/Select/Select';
import { useOutsideClick, useOverlay } from '@/common/hook';

import {
  arrowStyle,
  selectButtonStyle,
  selectedTextStyle,
} from '@/shared/component/createWorkSpace/category/WorkSpaceCategory.style';
import WorkSapceInfo from '@/shared/component/createWorkSpace/info/WorkSpaceInfo';
import { buttonStyle, sectionStyle } from '@/shared/component/createWorkSpace/name/WorkSpaceName.style';
import useCategoryListQuery from '@/shared/hook/useCategoryListQuery';

interface WorkSpaceCategoryProps {
  onNext: () => void;
  onCategory: (category: string) => void;
}

const WorkSpaceCategory = ({ onNext, onCategory }: WorkSpaceCategoryProps) => {
  const { isOpen, close, toggle } = useOverlay();
  const ref = useOutsideClick<HTMLDivElement>(close);
  const [selected, setSelected] = useState('');

  // 카테고리 데이터
  const { data } = useCategoryListQuery();
  const categoryList = data?.data.categories ?? [];

  useEffect(() => {
    if (selected) {
      onCategory(selected);
    }
    close?.();
  }, [selected, onCategory, close]);

  const handleSelect = (id: string) => {
    setSelected(id);
    onCategory(id);
  };

  const isButtonActive = selected.trim().length > 0;

  return (
    <Flex tag={'section'} styles={{ direction: 'column', justify: 'center', align: 'center' }} css={sectionStyle}>
      <WorkSapceInfo step="category" title="새로운 워크 스페이스 생성하기" info="팀 카테고리를 선택해주세요." />
      <div css={{ width: '32rem', height: '7.6rem' }}>
        <Select
          css={{
            '& ul': {
              maxHeight: '25rem',
            },
          }}
          ref={ref}
          isOpen={isOpen}
          onSelect={handleSelect}
          options={categoryList}
          trigger={
            <Button css={selectButtonStyle(isOpen)} onClick={toggle}>
              <span css={selected ? selectedTextStyle : null}>{selected || '선택'}</span>
              <ArrowDown css={arrowStyle(isOpen)} />
            </Button>
          }
        />
      </div>
      <Button
        variant="primary"
        size="medium"
        css={buttonStyle(isButtonActive)}
        disabled={!isButtonActive}
        onClick={onNext}>
        다음
      </Button>
    </Flex>
  );
};

export default WorkSpaceCategory;

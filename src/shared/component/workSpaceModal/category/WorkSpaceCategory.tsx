import { useEffect, useState } from 'react';

import ArrowDown from '@/common/asset/svg/arrow_drop_down.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Select from '@/common/component/Select/Select';
import { useOutsideClick, useOverlay } from '@/common/hook';

import { useWorkSpaceContext } from '@/shared/component/Modal/hook/useWorkSpaceContext';
import {
  arrowStyle,
  selectButtonStyle,
  selectedTextStyle,
} from '@/shared/component/WorkSpaceModal/category/WorkSpaceCategory.style';
import WorkSapceInfo from '@/shared/component/WorkSpaceModal/info/WorkSpaceInfo';
import { buttonStyle, sectionStyle } from '@/shared/component/WorkSpaceModal/name/WorkSpaceName.style';
import useCategoryListQuery from '@/shared/hook/api/useCategoryListQuery';

interface WorkSpaceCategoryProps {
  isVisible: boolean;
}

const WorkSpaceCategory = ({ isVisible }: WorkSpaceCategoryProps) => {
  const { isOpen, close, toggle } = useOverlay();
  const ref = useOutsideClick<HTMLDivElement>(close, 'select-container');
  const { setFormData, nextStep } = useWorkSpaceContext();
  const [selected, setSelected] = useState('');

  // 카테고리 데이터
  const { data: categoryList } = useCategoryListQuery(false);

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      if (!ref.current || !(event.target instanceof HTMLElement)) return;
      const isOutside = !ref.current.contains(event.target as Node);

      if (isOutside && !event.target?.className.includes('select-container')) {
        close?.();
      }
    };

    if (isOpen) {
      window.addEventListener('mousedown', handleMouseDown);
    } else {
      window.removeEventListener('mousedown', handleMouseDown);
    }

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [isOpen, close, ref]);

  if (!isVisible) return null;

  const handleSelect = (id: string) => {
    setSelected(id);
    setFormData({ category: id });
    close?.();
  };

  const handleNext = () => {
    nextStep();
  };

  const isButtonActive = selected.trim().length > 0;

  return (
    <Flex tag={'section'} styles={{ direction: 'column', justify: 'center', align: 'center' }} css={sectionStyle}>
      <WorkSapceInfo step="category" title="새로운 워크 스페이스 생성하기" info="팀 카테고리를 선택해주세요." />
      <div css={{ width: '32rem', height: '7.6rem' }} ref={ref}>
        <Select
          css={{
            '& ul': {
              maxHeight: '25rem',
            },
          }}
          isOpen={isOpen}
          onSelect={handleSelect}
          options={categoryList}
          className="select-container"
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
        onClick={handleNext}>
        다음
      </Button>
    </Flex>
  );
};

export default WorkSpaceCategory;

import { Button, Flex, Select } from '@tiki/ui';
import { useOutsideClick, useOverlay } from '@tiki/utils';

import { useEffect, useState } from 'react';

import WorkSapceInfo from '@/shared/component/WorkSpaceModal/info/WorkSpaceInfo';
import { buttonStyle, sectionStyle } from '@/shared/component/WorkSpaceModal/name/WorkSpaceName.style';
import useCategoryListQuery from '@/shared/hook/api/useCategoryListQuery';
import { useFunnel } from '@/shared/hook/common/useFunnel';
import { useWorkSpaceContext } from '@/shared/hook/common/useWorkSpaceContext';

const WorkSpaceCategory = () => {
  const { isOpen, close, toggle } = useOverlay();

  const { setFormData } = useWorkSpaceContext();
  const { nextStep } = useFunnel();

  const ref = useOutsideClick<HTMLDivElement>(close);

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
      <div css={{ width: '32rem', marginTop: '2.4rem' }} ref={ref}>
        <Select
          css={{
            '& ul': {
              maxHeight: '25rem',
            },
          }}
          placeholder="선택"
          variant="outline"
          isOpen={isOpen}
          onTrigger={toggle}
          onSelect={handleSelect}
          options={categoryList.map((str) => ({ value: str }))}
          className="select-container"
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

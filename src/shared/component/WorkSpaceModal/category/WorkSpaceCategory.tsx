import { useEffect, useState } from 'react';

import { Modal } from '@/common/component/Modal';
import Select from '@/common/component/Select/Select';
import { useOutsideClick, useOverlay } from '@/common/hook';

import useCategoryListQuery from '@/shared/hook/api/useCategoryListQuery';
import { useFunnel } from '@/shared/hook/common/funnelContext';
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
    <>
      <Modal.Header step={2} totalSteps={4} />
      <Modal.Body>
        <div ref={ref} css={{ width: '100%' }}>
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
      </Modal.Body>
      <Modal.Footer step={2} buttonClick={handleNext} isButtonActive={isButtonActive} />
    </>
  );
};

export default WorkSpaceCategory;

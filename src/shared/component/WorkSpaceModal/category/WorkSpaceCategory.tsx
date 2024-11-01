import { useEffect, useState } from 'react';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import { Modal } from '@/common/component/Modal';
import Select from '@/common/component/Select/Select';
import { useOutsideClick, useOverlay } from '@/common/hook';

import WorkSapceInfo from '@/shared/component/WorkSpaceModal/info/WorkSpaceInfo';
import { buttonStyle, sectionStyle } from '@/shared/component/WorkSpaceModal/name/WorkSpaceName.style';
import useCategoryListQuery from '@/shared/hook/api/useCategoryListQuery';
import { useWorkSpaceContext } from '@/shared/hook/common/useWorkSpaceContext';

interface WorkSpaceCategoryProps {
  isVisible: boolean;
}

const WorkSpaceCategory = ({ isVisible }: WorkSpaceCategoryProps) => {
  const { isOpen, close, toggle } = useOverlay();

  const { setFormData, nextStep } = useWorkSpaceContext();

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
    <>
      <Modal.Header step={2} totalSteps={4} />
      <Modal.Body>
        <div ref={ref}>
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

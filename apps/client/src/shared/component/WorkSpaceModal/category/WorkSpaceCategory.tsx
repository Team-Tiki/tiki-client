import { Select } from '@tiki/ui';

import { useState } from 'react';

import { components } from '@/shared/__generated__/schema';
import { Modal } from '@/shared/component/Modal';
import useCategoryListQuery from '@/shared/hook/api/useCategoryListQuery';
import { useFunnel } from '@/shared/hook/common/useFunnel';
import { useWorkSpaceContext } from '@/shared/hook/common/useWorkSpaceContext';

type Category = components['schemas']['TeamCreateRequest']['category'];

const WorkSpaceCategory = () => {
  const { setFormData, formData } = useWorkSpaceContext();
  const { prevStep, nextStep } = useFunnel();

  const [selected, setSelected] = useState('');

  // 카테고리 데이터
  const { data: categoryList } = useCategoryListQuery(false);

  const handleSelect = (id: Category) => {
    setSelected(id);
    setFormData({ category: id });
  };

  const handleNext = () => {
    nextStep();
  };

  const isDisabled = selected.trim().length === 0;

  return (
    <>
      <Modal.Header step={2} totalSteps={4} />
      <Modal.Body>
        <Select
          css={{
            width: '100%',
            paddingTop: '2rem',
            '& ul': {
              maxHeight: '25rem',
            },
          }}
          placeholder="선택"
          variant="outline"
          onSelect={(value) => handleSelect(value as Category)}
          options={categoryList.map((str) => ({ value: str }))}
          className="select-container"
        />
      </Modal.Body>
      <Modal.Footer step={2} type="create-workspace" onClick={handleNext} onPrev={prevStep} disabled={isDisabled} />
    </>
  );
};

export default WorkSpaceCategory;

/* eslint-disable react-hooks/exhaustive-deps */
import { DatePicker, Flex, Input } from '@tiki/ui';
import { parseISO } from 'date-fns';

import { useEffect, useState } from 'react';

import { formatDateToString } from '@/page/signUp/info/util/date';

import { Modal } from '@/shared/component/Modal';
import BlockBox from '@/shared/component/TimeBlockModal/component/Box/BlockBox';
import { useBlockName } from '@/shared/component/TimeBlockModal/hook/common/useBlockName';
import { SUPPORTING_TEXT } from '@/shared/constant/form';
import { useBlockContext } from '@/shared/hook/common/useBlockContext';
import { useFunnel } from '@/shared/hook/common/useFunnel';

const BlockInfoModal = () => {
  const { formData, setFormData } = useBlockContext();

  const { nextStep, prevStep } = useFunnel();

  const [startDate, setStartDate] = useState<Date | null>(formData.startDate ? parseISO(formData.startDate) : null);
  const [endDate, setEndDate] = useState<Date | null>(formData.endDate ? parseISO(formData.endDate) : null);

  const { blockName, isNameError, handleBlockNameChange } = useBlockName({
    onChange: (name) => setFormData({ ...formData, name }),
  });

  const isButtonActive = blockName.trim() !== '' && !!startDate && !!endDate;

  const handleDateChange = (start: Date | null, end: Date | null) => {
    setStartDate(start);
    setEndDate(end);
  };

  const handleNext = () => {
    if (isButtonActive) {
      nextStep();
    }
  };

  useEffect(() => {
    setFormData({
      ...formData,
      startDate: startDate ? formatDateToString(startDate) : '',
      endDate: endDate ? formatDateToString(endDate) : '',
    });
  }, [startDate, endDate]);

  return (
    <>
      <Modal.Header step={2} />
      <Modal.Body>
        <Flex styles={{ direction: 'column', gap: '2rem', paddingTop: '2rem' }}>
          <BlockBox title="이름" id="time-block-title">
            <Input
              id="time-block-title"
              placeholder="ex. 활동명"
              css={{ width: '100%' }}
              value={blockName}
              onChange={handleBlockNameChange}
              isError={isNameError}
              supportingText={isNameError ? SUPPORTING_TEXT.TIMEBLOCK_NAME_LENGTH : ''}
            />
          </BlockBox>
          <BlockBox title="기간">
            <DatePicker
              variant="range"
              triggerWidth="100%"
              onChange={handleDateChange}
              defaultSelectedDate={formData.startDate ? new Date(formData.startDate) : undefined}
              defaultEndDate={formData.endDate ? new Date(formData.endDate) : undefined}
            />
          </BlockBox>
        </Flex>
      </Modal.Body>
      <Modal.Footer
        step={2}
        contentType="create-block"
        buttonClick={handleNext}
        prevStep={() => prevStep()}
        isButtonActive={isButtonActive}
      />
    </>
  );
};

export default BlockInfoModal;

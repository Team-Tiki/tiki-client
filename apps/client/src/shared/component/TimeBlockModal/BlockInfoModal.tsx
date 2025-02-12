/* eslint-disable react-hooks/exhaustive-deps */
import { DatePicker, Flex, Input, theme } from '@tiki/ui';
import { parseISO } from 'date-fns';

import { useEffect, useState } from 'react';

import { formatDateToString } from '@/page/signUp/info/util/date';

import { Modal } from '@/shared/component/Modal';
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
          <Flex tag={'div'} styles={{ direction: 'column', align: 'flex-start', gap: '1.2rem', width: '33.6rem' }}>
            <label css={{ fontWeight: 500, ...theme.text.body06 }} htmlFor={'time-block-title'}>
              이름
            </label>
            <Input
              id="time-block-title"
              placeholder="ex. 활동명"
              css={{ width: '100%' }}
              value={blockName}
              onChange={handleBlockNameChange}
              isError={isNameError}
              supportingText={isNameError ? SUPPORTING_TEXT.TIMEBLOCK_NAME_LENGTH : ''}
            />
          </Flex>
          <Flex tag={'div'} styles={{ direction: 'column', align: 'flex-start', gap: '1.2rem', width: '33.6rem' }}>
            <label css={{ fontWeight: 500, ...theme.text.body06 }} htmlFor={'time-block-title'}>
              기간
            </label>
            <DatePicker
              variant="range"
              triggerWidth="100%"
              onChange={handleDateChange}
              defaultSelectedDate={formData.startDate ? new Date(formData.startDate) : undefined}
              defaultEndDate={formData.endDate ? new Date(formData.endDate) : undefined}
            />
          </Flex>
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

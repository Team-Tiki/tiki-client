import { DatePicker, Flex, Input, Text, theme } from '@tiki/ui';

import { useState } from 'react';

import BlockBox from '@/page/archiving/index/component/TimeBlockModal/component/Box/BlockBox';

import { Modal } from '@/shared/component/Modal';
import { useBlockContext } from '@/shared/hook/common/useBlockContext';
import { useFunnel } from '@/shared/hook/common/useFunnel';

const BlockInfoModal = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const { formData, setFormData } = useBlockContext();
  const { nextStep } = useFunnel();

  const isButtonActive = formData.name.trim() !== '' && !!selectedDate && !!endDate;

  const handleBlockNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 25) {
      setFormData({
        name: e.target.value,
        startDate: selectedDate?.toISOString(),
        endDate: endDate?.toISOString(),
      });
    }
  };

  const handleDateChange = (start: Date | null, end: Date | null) => {
    setSelectedDate(start);
    setEndDate(end);
  };

  const handleNext = () => {
    if (isButtonActive) {
      setFormData({
        name: formData.name,
        startDate: formData.startDate,
        endDate: formData.endDate,
      });
      nextStep();
    }
  };

  return (
    <>
      <Modal.Header />
      <Modal.Body>
        <BlockBox title="이름">
          <Flex styles={{ align: 'flex-end', direction: 'column', gap: '0.8rem', width: '100%' }}>
            <Input
              placeholder="ex.활동명"
              css={{ width: '100%' }}
              value={formData.name}
              onChange={handleBlockNameChange}
            />
            <Text tag="body8" css={{ color: theme.colors.gray_700 }}>
              {formData.name.length} / 25
            </Text>
          </Flex>
        </BlockBox>

        <BlockBox title="기간">
          <DatePicker variant="range" triggerWidth="13.5rem" onChange={handleDateChange} />
        </BlockBox>
      </Modal.Body>
      <Modal.Footer step={2} contentType="create-block" buttonClick={handleNext} isButtonActive={isButtonActive} />
    </>
  );
};

export default BlockInfoModal;

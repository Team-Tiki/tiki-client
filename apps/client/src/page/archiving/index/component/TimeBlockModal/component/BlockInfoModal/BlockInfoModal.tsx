/* eslint-disable react-hooks/exhaustive-deps */
import { DatePicker, Flex, Input, Text, theme } from '@tiki/ui';

import { useEffect, useState } from 'react';

import BlockBox from '@/page/archiving/index/component/TimeBlockModal/component/Box/BlockBox';
import { formatDateToString } from '@/page/signUp/info/util/date';

import { Modal } from '@/shared/component/Modal';
import { useBlockContext } from '@/shared/hook/common/useBlockContext';
import { useFunnel } from '@/shared/hook/common/useFunnel';

const BlockInfoModal = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const { formData, setFormData } = useBlockContext();
  const { prevStep, nextStep } = useFunnel();

  const isButtonActive = formData.name.trim() !== '' && !!startDate && !!endDate;

  const handleBlockNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 25) {
      setFormData({
        ...formData,
        name: e.target.value,
      });
    }
  };

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
      startDate: formatDateToString(startDate),
      endDate: formatDateToString(endDate),
    });
  }, [startDate, endDate, setFormData]);

  return (
    <>
      <Modal.Header />
      <Modal.Body>
        <BlockBox title="이름">
          <Flex styles={{ align: 'flex-end', direction: 'column', gap: '0.8rem', width: '100%' }}>
            <Input
              placeholder="ex. 활동명"
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

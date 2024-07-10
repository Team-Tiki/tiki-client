import { textStyle } from '@/page/archiving/component/Modal/Block/Date/BlockDate.style';
import { ERROR } from '@/page/archiving/constant/error';
import { formatDateString, isValidDate, parseDate } from '@/page/archiving/util/dateUtils';
import { css } from '@emotion/react';

import { useState } from 'react';

import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';
import Text from '@/common/component/Text/Text';

interface BlockDateProps {
  startDate: string;
  endDate: string;
  setStartDate: (date: string | ((prev: string) => string)) => void;
  setEndDate: (date: string | ((prev: string) => string)) => void;
}

const BlockDate = ({ startDate, endDate, setStartDate, setEndDate }: BlockDateProps) => {
  const [isStartDateValid, setIsStartDateValid] = useState<boolean>(true);
  const [isEndDateValid, setIsEndDateValid] = useState<boolean>(true);
  const [isDateRangeValid, setIsDateRangeValid] = useState<boolean>(true);
  const [isStartDateError, setIsStartDateError] = useState<boolean>(false);
  const [isEndDateError, setIsEndDateError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setDate: (date: string | ((prev: string) => string)) => void,
    setIsValid: React.Dispatch<React.SetStateAction<boolean>>,
    setIsError: React.Dispatch<React.SetStateAction<boolean>>,
    otherDate: string,
    otherIsValid: boolean,
    isStart: boolean
  ) => {
    const input = event.target.value.replace(/\D/g, '');
    const formattedDate = input.length <= 8 ? formatDateString(input) : input;
    setDate(formattedDate);
    const isValid = input.length === 8 && isValidDate(formattedDate);
    setIsValid(isValid);

    if (!input) {
      setIsError(true);
      setErrorMessage(isStart ? ERROR.START : ERROR.END);
    } else if (formattedDate.length === 10) {
      if (!isValid || !otherIsValid) {
        setIsError(true);
        setErrorMessage(ERROR.OTHER);
      } else {
        checkDateRange(formattedDate, startDate, endDate, isStart);
      }
    } else {
      setIsError(false);
      setErrorMessage('');
    }
  };

  const checkDateRange = (formattedDate: string, startDate: string, endDate: string, isStart: boolean) => {
    const start = parseDate(isStart ? formattedDate : startDate);
    const end = parseDate(isStart ? endDate : formattedDate);
    if (start && end) {
      const isValidRange = start <= end;
      setIsDateRangeValid(isValidRange);
      if (!isValidRange) {
        setErrorMessage(ERROR.OTHER);
        setIsStartDateError(isStart);
        setIsEndDateError(!isStart);
      } else {
        setIsStartDateError(false);
        setIsEndDateError(false);
        setErrorMessage('');
      }
    } else {
      setIsDateRangeValid(true);
      setIsStartDateError(false);
      setIsEndDateError(false);
      setErrorMessage('');
    }
  };

  const inputStyle = (isValid: boolean, value: string, isError: boolean) => css`
    text-align: ${value.length === 10 ? 'center' : 'left'};
  `;

  return (
    <>
      <Flex styles={{ direction: 'row', align: 'center', gap: '1.2rem' }}>
        <Input
          variant="default"
          size="large"
          placeholder="YYYY.MM.DD"
          css={[{ width: '9.7rem' }, inputStyle(isStartDateValid && isDateRangeValid, startDate, isStartDateError)]}
          value={startDate}
          onChange={(e) =>
            handleChange(e, setStartDate, setIsStartDateValid, setIsStartDateError, endDate, isEndDateValid, true)
          }
          maxLength={10}
          isError={isStartDateError}
        />
        <p css={textStyle}>~</p>
        <Input
          variant="default"
          size="large"
          placeholder="YYYY.MM.DD"
          css={[{ width: '9.7rem' }, inputStyle(isEndDateValid && isDateRangeValid, endDate, isEndDateError)]}
          value={endDate}
          onChange={(e) =>
            handleChange(e, setEndDate, setIsEndDateValid, setIsEndDateError, startDate, isStartDateValid, false)
          }
          maxLength={10}
          isError={isEndDateError}
        />
      </Flex>
      {(isStartDateError || isEndDateError) && (
        <Text tag="body7" css={{ color: 'red' }}>
          {errorMessage}
        </Text>
      )}
    </>
  );
};

export default BlockDate;

import { textStyle } from '@/page/archiving/component/Modal/Date/BlockDate.style';
import { css } from '@emotion/react';

import { useEffect, useState } from 'react';

import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';
import Text from '@/common/component/Text/Text';

interface BlockDateProps {}

const BlockDate = ({}: BlockDateProps) => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [isStartDateValid, setIsStartDateValid] = useState<boolean>(true);
  const [isEndDateValid, setIsEndDateValid] = useState<boolean>(true);
  const [isDateRangeValid, setIsDateRangeValid] = useState<boolean>(true);
  const [isStartDateError, setIsStartDateError] = useState<boolean>(false);
  const [isEndDateError, setIsEndDateError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const formatDateString = (dateString: string): string => {
    if (dateString.length !== 8) return dateString;
    return `${dateString.slice(0, 4)}.${dateString.slice(4, 6)}.${dateString.slice(6, 8)}`;
  };

  const isValidDate = (dateString: string): boolean => {
    const datePattern = /^\d{4}\.\d{2}\.\d{2}$/;
    if (!datePattern.test(dateString)) return false;
    const [year, month, day] = dateString.split('.').map(Number);
    const date = new Date(year, month - 1, day);
    const isYearValid = year >= 1900;
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day && isYearValid;
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setDate: React.Dispatch<React.SetStateAction<string>>,
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
      setErrorMessage(isStart ? '시작 시간이 입력되지 않았습니다.' : '종료 시간이 입력되지 않았습니다.');
    } else if (formattedDate.length === 10) {
      if (!isValid || !otherIsValid) {
        setIsError(true);
        setErrorMessage('유효한 기간이 아닙니다. 확인 후 다시 입력해주세요.');
      } else {
        checkDateRange(formattedDate, startDate, endDate, isStart);
      }
    } else {
      setIsError(false);
      setErrorMessage('');
    }
  };

  const parseDate = (dateString: string): Date | null => {
    if (isValidDate(dateString)) {
      const [year, month, day] = dateString.split('.').map(Number);
      return new Date(year, month - 1, day);
    }
    return null;
  };

  const checkDateRange = (formattedDate: string, startDate: string, endDate: string, isStart: boolean) => {
    const start = parseDate(isStart ? formattedDate : startDate);
    const end = parseDate(isStart ? endDate : formattedDate);
    if (start && end) {
      const isValidRange = start <= end;
      setIsDateRangeValid(isValidRange);
      if (!isValidRange) {
        setErrorMessage('유효한 기간이 아닙니다. 확인 후 다시 입력해주세요.');
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
    border-color: ${isError ? 'red' : 'initial'};
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

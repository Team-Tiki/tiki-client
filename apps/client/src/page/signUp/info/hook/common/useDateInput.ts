import { ChangeEvent, useCallback, useState } from 'react';

import { getFormatDateString, getFormatNumberString, isValidDate } from '@/page/signUp/info/util/date';

import { DATE_MAXLENGTH, FORMATTED_DATE_MAXLENGTH } from '@/shared/constant/form';

export const useDateInput = () => {
  const [birth, setBirth] = useState('');
  const [error, setError] = useState<boolean>(false);

  const onBirthChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    if (birth !== '') setError(false);

    if (value.length === DATE_MAXLENGTH && birth.length === FORMATTED_DATE_MAXLENGTH) {
      value = birth.replace(/-/g, '');
    } else {
      value = getFormatDateString(getFormatNumberString(value, 8));
    }

    setBirth(value);
  };

  const onDateValidate = useCallback(() => {
    if (birth === '' || !isValidDate(birth)) {
      setError(true);
      return false;
    }

    return true;
  }, [birth]);

  return {
    birth,
    onBirthChange,
    onDateValidate,
    error,
  };
};

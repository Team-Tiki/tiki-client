import { DATE_MAXLENGTH, FORMATTED_DATE_MAXLENGTH } from '@/page/signUp/info/constant';
import { getFormatDateString, getFormatNumberString, isValidDate } from '@/page/signUp/info/util/date';

import { ChangeEvent, useCallback, useState } from 'react';

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

    if (value.length < FORMATTED_DATE_MAXLENGTH) {
      setError(true);
      return;
    }

    setError(!isValidDate(value));
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

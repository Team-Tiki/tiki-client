import { useMemo, useState } from 'react';

type MultiSelectStatus = {
  [key: number]: boolean;
};

const createObj = (length: number, flag: boolean): MultiSelectStatus => {
  const obj: MultiSelectStatus = {};

  for (let i = 1; i <= length; ++i) {
    obj[i] = flag;
  }

  return obj;
};

export const useMultiSelect = (length: number) => {
  const defaultValue = useMemo(() => createObj(length, false), [length]);
  const allTrueValue = useMemo(() => createObj(length, true), [length]);

  /**
   * key: id(number), value: true/false 를 갖는 객체
   * 특정 id를 가진 아이템이 선택되었는지를 의미함
   */
  const [ids, setIds] = useState<MultiSelectStatus>(defaultValue);

  const handleItemClick = (id: number) => {
    setIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleAllClick = () => {
    if (Object.values(ids).every((bool) => bool)) {
      setIds(defaultValue);
      return;
    }

    setIds(allTrueValue);
  };

  const handleReset = () => {
    setIds(defaultValue);
  };

  return { ids, handleItemClick, handleAllClick, handleReset };
};

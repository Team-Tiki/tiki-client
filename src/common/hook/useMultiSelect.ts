import { useState } from 'react';

type DataHasIdKey<T> = {
  [key in keyof T]: T[key];
};

/**
 * identifier: "fileId"와 같이 해당 아이템을 구분할 수 있는 식별자
 * select할 시 특정 아이템의 identifier 값을 ids에 넣음
 */
export const useMultiSelect = <T extends object>(identifier: keyof T, data: DataHasIdKey<T>[]) => {
  const [ids, setIds] = useState<number[]>([]);

  const handleItemClick = (id: number) => {
    if (ids.includes(id)) {
      setIds((prev) => {
        const origin = [...prev];

        return origin.filter((i) => i !== id);
      });
    } else {
      setIds((prev) => [...prev, id]);
    }
  };

  const handleAllClick = () => {
    if (ids.length !== data.length) {
      const totalIds: number[] = [];

      data.forEach((item) => totalIds.push(item[identifier] as number));

      setIds(totalIds);
    } else {
      setIds([]);
    }
  };

  const handleReset = () => {
    setIds([]);
  };

  return { ids, handleItemClick, handleAllClick, handleReset };
};

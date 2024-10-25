import { useDeferredValue } from 'react';

type Data<T> = {
  [K in keyof T]: T[K];
};

/**
 * - useDeferedValue 훅을 사용한 UI 지연 렌더링 + 필터링
 * 검색 기능 시 사용
 */
const useDeferredSearchFilter = <T extends object>(list: Data<T>[], value: string) => {
  const deferredValue = useDeferredValue(value);

  /** 상태 업데이트 시 이전 값과 지연된 값이 일치하지 않으면 isStale (아직 최신 데이터가 로드 전임을 UI로 나타내기 위함) */
  const isStale = value !== deferredValue;

  const filteredData = list.filter((item) =>
    Object.values(item).some((value) => {
      if (typeof value === 'object') {
        /** deep comparing 대신 객체를 문자열로 만들어 검사 */
        return JSON.stringify(Object.values(value!)).includes(deferredValue);
      } else {
        return String(value).includes(deferredValue);
      }
    })
  );

  return { deferredValue, filteredData, isStale };
};

export default useDeferredSearchFilter;

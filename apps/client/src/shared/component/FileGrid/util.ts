export const checkDropdownPosition = (x: number, y: number) => {
  const shouldRenderedRight = x - 195 < 76 + 32;
  const shouldRenderedBottom = y + 118 + 20 < document.documentElement.clientHeight - 48;

  /** 드롭다운이 렌더링될 위치, 트리거 아이콘 기준 n사분면 기준 n 반환 */
  if (shouldRenderedRight && shouldRenderedBottom) {
    return 4;
  } else if (shouldRenderedRight) {
    return 1;
  } else if (shouldRenderedBottom) {
    return 3;
  }
  return 2;
};

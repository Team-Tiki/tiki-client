export type Block = typeof BLOCK_TEST_DATA;

export const BLOCK_INFO = {
  title: '블록명',
  startDate: '2024-07-06',
  endDate: '2024-07-08',
};

export const BLOCK_TEST_DATA = [
  {
    fileName: '6월 회의록(1).word',
  },
  {
    fileName: '7월 회의록(2).word',
  },
  {
    fileName: '6월 회의록(3).word',
  },
  {
    fileName: '6월 회의록(4).word',
  },
  {
    fileName: '6월 회의록(5).word',
  },
  {
    fileName: '7월 회의록(6).word',
  },
];

export type Total = typeof TOTAL_DATA;

export const TOTAL_DATA = [
  { blockName: '1주차 활동', fileUrl: 'http://...', fileName: '2월 회의록(1).pdf' },
  { blockName: '1주차 활동', fileUrl: 'http://...', fileName: '3월 회고(1).word' },
  { blockName: '2주차 활동', fileUrl: 'http://...', fileName: '2월 회의록(2).word' },
  { blockName: '3주차 활동', fileUrl: 'http://...', fileName: '3월 회의록(2).pdf' },
  { blockName: '2주차 활동', fileUrl: 'http://...', fileName: '2월 회고(3).word' },
  { blockName: '4주차 활동', fileUrl: 'http://...', fileName: '3월 회의록(3).word' },
  { blockName: '2주차 활동', fileUrl: 'http://...', fileName: '2월 회고(4).pdf' },
  { blockName: '3주차 활동', fileUrl: 'http://...', fileName: '3월 회의록(4).word' },
];

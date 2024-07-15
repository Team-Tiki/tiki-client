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
  { documentId: 1, blockName: '1주차 활동', fileUrl: 'http://...', fileName: '2월 회의록(1).pdf' },
  { documentId: 2, blockName: '1주차 활동', fileUrl: 'http://...', fileName: '3월 회고(1).word' },
  { documentId: 3, blockName: '2주차 활동', fileUrl: 'http://...', fileName: '2월 회의록(2).word' },
  { documentId: 4, blockName: '3주차 활동', fileUrl: 'http://...', fileName: '3월 회의록(2).pdf' },
  { documentId: 5, blockName: '2주차 활동', fileUrl: 'http://...', fileName: '2월 회고(3).word' },
  { documentId: 6, blockName: '4주차 활동', fileUrl: 'http://...', fileName: '3월 회의록(3).word' },
  { documentId: 7, blockName: '2주차 활동', fileUrl: 'http://...', fileName: '2월 회고(4).pdf' },
  { documentId: 8, blockName: '3주차 활동', fileUrl: 'http://...', fileName: '3월 회의록(4).word' },
];

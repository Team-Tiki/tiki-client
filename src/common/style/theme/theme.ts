import { Theme } from '@emotion/react';

const colors = {
  white: '#FFFFFF',
  black: '#222222',
  pink400: '#FF385C',
  pink200: '#FED5DF',
  gray100: '#F7F7F7',
  gray200: '#F2F2F2',
  gray400: '#E7E7E7',
  gray600: '#C5C5C5',
  gray700: '#999999',
  gray800: '#6A6A6A',
  yellow200: '#F0EFE9',
  blue400: '#0053D5',
  boxDrop: 'rgba(42, 42, 42, 0.15)',
  cardDrop: 'rgba(0, 0, 0, 0.05)',
};

export type ColorsTypes = typeof colors;

interface Font {
  family: string;
  size: number;
  weight: number;
  height: string;
  letterSpacing: number;
}

const FONT = ({ family, weight, size, height, letterSpacing }: Font): string => {
  return `
        font-family:${family};
        font-size:${size}rem;
        font-weight:${weight};
        line-height:${height}%;
        letter-spacing: ${letterSpacing}px;
    `;
};

const fonts = {
  heading01: FONT({
    family: 'Pretendard',
    size: 2.4,
    weight: 600,
    height: '100',
    letterSpacing: 0,
  }),
  heading02: FONT({
    family: 'Pretendard',
    size: 2.4,
    weight: 500,
    height: '100',
    letterSpacing: 0,
  }),
  heading03: FONT({
    family: 'Pretendard',
    size: 2,
    weight: 600,
    height: '100',
    letterSpacing: 0,
  }),
  heading04: FONT({
    family: 'Pretendard',
    size: 1.8,
    weight: 600,
    height: '100',
    letterSpacing: -0.5,
  }),
  title01: FONT({
    family: 'Pretendard',
    size: 1.6,
    weight: 600,
    height: '140',
    letterSpacing: 0,
  }),
  title02_heavy: FONT({
    family: 'Pretendard',
    size: 1.4,
    weight: 600,
    height: '140',
    letterSpacing: 0,
  }),
  title02_middle: FONT({
    family: 'Pretendard',
    size: 1.4,
    weight: 500,
    height: '130',
    letterSpacing: 0,
  }),
  body01_heavy: FONT({
    family: 'Pretendard',
    size: 1.3,
    weight: 600,
    height: '135',
    letterSpacing: 0,
  }),
  body01_middle: FONT({
    family: 'Pretendard',
    size: 1.3,
    weight: 500,
    height: '135',
    letterSpacing: 0,
  }),
  body01_light: FONT({
    family: 'Pretendard',
    size: 1.3,
    weight: 400,
    height: '135',
    letterSpacing: 0,
  }),
  body02_heavy: FONT({
    family: 'Pretendard',
    size: 1.2,
    weight: 600,
    height: '140',
    letterSpacing: 0,
  }),
  body02_middle: FONT({
    family: 'Pretendard',
    size: 1.2,
    weight: 500,
    height: '160',
    letterSpacing: 0.5,
  }),
  body03_heavy: FONT({
    family: 'Pretendard',
    size: 1.1,
    weight: 600,
    height: '140',
    letterSpacing: 0,
  }),
  body03_middle: FONT({
    family: 'Pretendard',
    size: 1.1,
    weight: 500,
    height: '140',
    letterSpacing: 0,
  }),
  body03_light: FONT({
    family: 'Pretendard',
    size: 1.1,
    weight: 400,
    height: '140',
    letterSpacing: 0,
  }),
  detail1_heavy: FONT({
    family: 'Pretendard',
    size: 1,
    weight: 600,
    height: '140',
    letterSpacing: 0,
  }),
  detail1_middle: FONT({
    family: 'Pretendard',
    size: 1,
    weight: 500,
    height: '140',
    letterSpacing: 0,
  }),
  detail1_light: FONT({
    family: 'Pretendard',
    size: 1,
    weight: 400,
    height: '140',
    letterSpacing: 0,
  }),
  detail2: FONT({
    family: 'Pretendard',
    size: 0.9,
    weight: 400,
    height: '140',
    letterSpacing: 0,
  }),
  detail3: FONT({
    family: 'Pretendard',
    size: 0.8,
    weight: 500,
    height: '140',
    letterSpacing: 0,
  }),
};

export type FontsTypes = typeof fonts;

export const theme: Theme = {
  fonts,
  colors,
};

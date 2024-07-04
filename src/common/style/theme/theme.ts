import { Theme } from '@emotion/react';

const colors = {
  black: '#2C3030',
  gray_80: '#5C5E63',
  gray_70: '#6B6B6B',
  gray_60: '#909090',
  gray_50: '#ADADAD',
  gray_40: '#CDCDCD',
  gray_30: '#D6D5D5',
  gray_20: '#EBEBEB',
  gray_10: '#FAFAFA',
  white: '#FFFFFF',
  blue_100: '#466DEB',
  blue_10: '#EDF0FD',
  error: '#FE4F60',
};

export type ColorsTypes = typeof colors;

const heading = {
  heading01: {
    fontSize: '4rem',
    lineHeight: '4rem',
  },
  heading02: {
    fontSize: '3.2rem',
    lineHeight: '3.2rem',
  },
  heading03: {
    fontSize: '2.8rem',
    lineHeight: '2.8rem',
  },
  heading04: {
    fontSize: '2.4rem',
    lineHeight: '2.4rem',
  },
  heading05: {
    fontSize: '2rem',
    lineHeight: '2rem',
  },
  heading06: {
    fontSize: '1.8rem',
    lineHeight: '1.8rem',
  },
  heading07: {
    fontSize: '1.6rem',
    lineHeight: '1.6rem',
  },
} as const;

const text = {
  body01: {
    fontSize: '2.4rem',
    lineHeight: '2.4rem',
  },
  body02: {
    fontSize: '1.6rem',
    lineHeight: '1.6rem',
  },
  body03: {
    fontSize: '1.6rem',
    lineHeight: '2.24rem',
  },
  body04: {
    fontSize: '1.4rem',
    lineHeight: '1.4rem',
  },
  body05: {
    fontSize: '1.4rem',
    lineHeight: '1.96rem',
  },
  body06: {
    fontSize: '1.4rem',
    lineHeight: '1.68rem',
  },
} as const;

const label = {
  label01: {
    fontSize: '1.6rem',
    lineHeight: '1.6rem',
  },
  label02: {
    fontSize: '1.4rem',
    lineHeight: '1.4rem',
  },
  label03: {
    fontSize: '1.2rem',
    lineHeight: '1.2rem',
  },
} as const;

export type FontsTypes = typeof heading & typeof text & typeof label;

export const theme: Theme = {
  colors,
  heading,
  text,
  label,
};

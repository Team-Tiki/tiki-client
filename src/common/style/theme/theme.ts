const colors = {
  black: '#2C3030',
  black_shade: 'linear-gradient(270deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.70) 100%)',
  dimmed: 'rgba(0, 0, 0, 0.40)',
  gray_800: '#525866',
  gray_700: '#6B6B6B',
  gray_600: '#909090',
  gray_500: '#99A1B2',
  gray_400: '#CDCDCD',
  gray_300: '#D6D5D5',
  gray_200: '#DFE1E8',
  gray_100: '#F5F5F8',
  white: '#FFFFFF',
  blue_900: '#353F9B',
  blue_700: '#4952A5',
  blue_300: '#7279B9',
  blue_200: '#D7D9EB',
  blue_100: '#EDF0FD',
  error: '#FE4F60',
  success: '#1FC16B',
  purple: '#D39EF7',
  green: '#80E2A7',
  yellow: '#FFBC5B',
  orange: '#FD9C7E',
  pink: '#FC9CD6',
  blue: '#A1AFF6',
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
    fontSize: '2.4rem',
    lineHeight: '3.36rem',
  },
  body03: {
    fontSize: '2rem',
    lineHeight: '2rem',
  },
  body04: {
    fontSize: '1.6rem',
    lineHeight: '1.6rem',
  },
  body05: {
    fontSize: '1.6rem',
    lineHeight: '2.24rem',
  },
  body06: {
    fontSize: '1.4rem',
    lineHeight: '1.4rem',
  },
  body07: {
    fontSize: '1.4rem',
    lineHeight: '1.68rem',
  },
  body08: {
    fontSize: '1.2rem',
    lineHeight: '1.2rem',
  },
  body09: {
    fontSize: '1rem',
    lineHeight: 'rem',
  },
} as const;

const zIndex = {
  overlayTop: 4,
  overlayHigh: 3,
  overlayMiddle: 2,
  overlayBottom: 1,
} as const;

const shadow = {
  inset: `inset 0 0 0 1px ${colors.gray_200}`,
  inset_focus: `inset 0 0 0 1px ${colors.blue_900}`,
  shadow01: '0px 2px 8px 0px rgba(99, 99, 99, 0.2)', // 6
  shadow02: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  shadow03: '0px 3px 8px rgba(0, 0, 0, 0.24)', // 5
  shadow04: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px', // 12
  shadow05: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
};

export const theme = {
  colors,
  heading,
  text,
  zIndex,
  shadow,
};

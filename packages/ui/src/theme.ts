const colors = {
  black: "#0E121B",
  black_shade: "linear-gradient(270deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.70) 100%)",
  dimmed: "rgba(0, 0, 0, 0.40)",

  gray_900: "#323A4C",
  gray_800: "#525866",
  gray_700: "#6B6B6B",
  gray_600: "#909090",
  gray_500: "#99A1B2",
  gray_400: "#CCD1DD",
  gray_300: "#DFE1E8",
  gray_200: "#ECECF1",
  gray_100: "#F8F8FB",

  white: "#FFFFFF",

  key_600: "#444EE4",
  key_500: "#6D77FF",
  key_400: "#99ACFF",
  key_300: "#B9C7FF",
  key_200: "#E3E8FF",
  key_100: "#F3F5FF",

  sementic_red: "#FE4F60",
  sementic_success: "#1FC16B",

  red_200: "#EB736D",
  red_100: "#FFE6E8",

  yellow_200: "#F19234",
  yellow_100: "#F8E2CB",

  green_200: "#49B078",
  green_100: "#C4F2E5",

  purple_200: "#856ECF",
  purple_100: "#DCD8FA",

  blue_200: "#607AD4",
  blue_100: "#E2E8F8",

  pink_200: "#F175C0",
  pink_100: "#F8E1F5",

  sky_200: "#48ABD2",
  sky_100: "#D3EFFA",
};

export type ColorsTypes = typeof colors;

const heading = {
  heading01: {
    fontSize: "4rem",
    lineHeight: "4rem",
  },
  heading02: {
    fontSize: "3.2rem",
    lineHeight: "3.2rem",
  },
  heading03: {
    fontSize: "2.8rem",
    lineHeight: "2.8rem",
  },
  heading04: {
    fontSize: "2.4rem",
    lineHeight: "2.4rem",
  },
  heading05: {
    fontSize: "2rem",
    lineHeight: "2rem",
  },
  heading06: {
    fontSize: "1.6rem",
    lineHeight: "1.6rem",
  },
} as const;

const text = {
  body01: {
    fontSize: "2.4rem",
    lineHeight: "2.4rem",
  },
  body02: {
    fontSize: "2.4rem",
    lineHeight: "3.36rem",
  },
  body03: {
    fontSize: "2rem",
    lineHeight: "2rem",
  },
  body04: {
    fontSize: "1.6rem",
    lineHeight: "1.6rem",
  },
  body05: {
    fontSize: "1.6rem",
    lineHeight: "2.24rem",
  },
  body06: {
    fontSize: "1.4rem",
    lineHeight: "1.4rem",
  },
  body07: {
    fontSize: "1.4rem",
    lineHeight: "1.68rem",
  },
  body08: {
    fontSize: "1.2rem",
    lineHeight: "1.2rem",
  },
  body09: {
    fontSize: "1.2rem",
    lineHeight: "1.68rem",
  },
  body10: {
    fontSize: "1rem",
    lineHeight: "1rem",
  },
} as const;

const zIndex = {
  overlayTop: 4,
  overlayHigh: 3,
  overlayMiddle: 2,
  overlayBottom: 1,
} as const;

const shadow = {
  inset: `inset 0 0 0 1px ${colors.gray_300}`,
  inset_focus: `inset 0 0 0 1px ${colors.key_500}`,
  shadow01: "0px 2px 8px 0px rgba(99, 99, 99, 0.2)", // 6
  shadow02: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  shadow03: "0px 3px 8px rgba(0, 0, 0, 0.24)", // 5
  shadow04: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px", // 12
  shadow05: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
};

export const theme = {
  colors,
  heading,
  text,
  zIndex,
  shadow,
};

export const scrollStyle = {
  "::-webkit-scrollbar": {
    width: "0.8rem",
  },
  "::-webkit-scrollbar-thumb": {
    background: theme.colors.gray_300,
    borderRadius: "10rem",
  },
  "::-webkit-scrollbar-track": {
    background: "transparent",
  },
};

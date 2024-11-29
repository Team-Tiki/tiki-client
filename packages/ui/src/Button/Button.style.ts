import { css } from "@emotion/react";

import { theme } from "@/theme";

import { ButtonProps } from "./Button";

export const buttonStyle = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.4rem",

  border: "none",
  borderRadius: "8px",

  fontWeight: 500,

  whiteSpace: "nowrap",

  cursor: "pointer",

  "&:disabled:not(:focus)": {
    backgroundColor: theme.colors.gray_100,
    color: theme.colors.gray_500,

    cursor: "default",
  },

  transition: "all .2s ease-in",
});

export const variantStyle = (variant: Required<ButtonProps>["variant"]) => {
  const style = {
    primary: css({
      color: theme.colors.white,
      backgroundColor: theme.colors.key_500,

      "&:hover": {
        backgroundColor: theme.colors.key_600,
      },
    }),
    secondary: css({
      color: theme.colors.key_500,
      backgroundColor: theme.colors.key_100,

      "&:hover": {
        backgroundColor: theme.colors.key_200,
      },
    }),
    tertiary: css({
      color: theme.colors.gray_800,
      backgroundColor: theme.colors.gray_100,

      "&:hover": {
        backgroundColor: theme.colors.gray_200,
      },
    }),
    fourth: css({
      color: theme.colors.gray_800,
      backgroundColor: theme.colors.white,

      "&:hover": {
        backgroundColor: theme.colors.gray_100,
      },
    }),
    outline: css({
      color: theme.colors.gray_800,
      backgroundColor: theme.colors.white,

      boxShadow: theme.shadow.inset,

      "&:hover": {
        backgroundColor: theme.colors.gray_100,
      },
    }),
    text: css({
      padding: 0,

      color: theme.colors.gray_800,
      backgroundColor: "transparent",

      fontWeight: 400,
      ...theme.text.body06,

      "&:hover": {
        textDecoration: "underline",
      },

      "&:disabled:not(:focus)": {
        color: theme.colors.gray_500,
        backgroundColor: "transparent",

        textDecoration: "underline",
      },
    }),
  };
  return style[variant];
};

export const sizeStyle = (size: Required<ButtonProps>["size"]) => {
  const style = {
    /** Button_46 */
    xLarge: css({
      padding: "1.6rem 1.4rem",

      ...theme.text.body06,
    }),
    /** Button_40 */
    large: css({
      padding: "1.4rem",

      ...theme.text.body08,
    }),
    /** Button_36 */
    medium: css({
      padding: "1.2rem 1.4rem",

      ...theme.text.body08,
    }),
    /** Button_32 */
    small: css({
      padding: "1rem 1.4rem",

      ...theme.text.body08,
    }),
    /** Button_24 */
    xSmall: css({
      padding: "0.6rem 1rem",

      borderRadius: "1.2rem",

      ...theme.text.body08,
    }),
  };
  return style[size];
};

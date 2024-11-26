import { css } from "@emotion/react";

import { theme } from "@/theme";

export const containerStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "0.2rem",

  width: "100%",

  "& > label": {
    margin: "0 0 1rem",
  },
});

export const inputStyle = css({
  width: "100%",

  paddingRight: "4rem",

  border: "none",
  backgroundColor: "transparent",

  fontWeight: 400,
  ...theme.text.body06,

  outline: "none",

  "::placeholder": {
    color: theme.colors.gray_500,
    ...theme.text.body06,
  },
});

export const inputWrapperStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "1rem",

  position: "relative",

  height: "4rem",

  padding: "1.3rem 1.2rem",

  backgroundColor: "transparent",
  boxShadow: theme.shadow.inset,
  borderRadius: "8px",

  "&:focus-within": {
    boxShadow: theme.shadow.inset_focus,
  },
});

export const countTextStyle = css({
  position: "absolute",

  ...theme.text.body06,
  color: theme.colors.gray_500,

  right: "1.2rem",
});

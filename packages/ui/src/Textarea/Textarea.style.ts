import { css } from "@emotion/react";

import { theme } from "@/theme";

export const containerStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "0.2rem",

  width: "100%",

  "&>label": {
    margin: "0 0 1rem",
  },
});

export const textareaStyle = css({
  width: "100%",

  border: "none",
  backgroundColor: "Inherit",

  fontWeight: 400,
  ...theme.text.body06,

  outline: "none",
  resize: "none",

  overflow: "hidden",

  "::placeholder": {
    color: theme.colors.gray_500,
    ...theme.text.body06,
  },

  ":disabled": {
    backgroundColor: theme.colors.gray_100,
    color: theme.colors.gray_500,
  },
});

export const contentStyle = (isFilled: boolean) =>
  css({
    display: "flex",
    alignItems: "center",
    gap: "1rem",

    position: "relative",

    height: "4rem",

    padding: "1.3rem 1.2rem",

    backgroundColor: isFilled ? theme.colors.gray_100 : "none",
    boxShadow: theme.shadow.inset,
    borderRadius: "8px",

    "&:focus-within": {
      boxShadow: theme.shadow.inset_focus,
    },

    "&:has(> input:disabled) ": {
      backgroundColor: theme.colors.gray_100,
    },
  });

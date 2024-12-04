import { css } from "@emotion/react";

import { theme } from "@/theme";

export const containerStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",

  position: "relative",
});

export const listStyle = css({
  position: "absolute",
  top: "100%",

  minWidth: "100%",
  width: "max-content",

  zIndex: theme.zIndex.overlayHigh,

  backgroundColor: theme.colors.white,
});

export const itemStyle = css({
  cursor: "pointer",
});

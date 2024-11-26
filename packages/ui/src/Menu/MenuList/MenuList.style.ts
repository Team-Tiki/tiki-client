import { css } from "@emotion/react";

import { theme } from "@/theme";

export const containerStyle = css({
  position: "absolute",

  display: "flex",
  flexDirection: "column",
  width: "19.5rem",

  padding: "0.8rem",
  gap: "0.6rem",

  borderRadius: "8px",
  border: `1px solid ${theme.colors.gray_300}`,

  boxShadow: "0.4rem 0.4rem 1rem 0 rgba(0, 0, 0, 0.1)",

  zIndex: theme.zIndex.overlayTop,
});

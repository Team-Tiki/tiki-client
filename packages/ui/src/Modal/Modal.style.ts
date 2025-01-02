import { fadeIn } from "@/animation";
import { theme } from "@/theme";
import { css } from "@emotion/react";

export const backgroundStyle = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  position: "fixed",
  top: 0,
  left: 0,
  zIndex: theme.zIndex.overlayHigh,

  width: "100vw",
  height: "100vh",

  backgroundColor: "rgba(0, 0, 0, 0.5)",
  animation: `${fadeIn} 0.2s ease-in`,
});

export const dialogStyle = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  position: "fixed",
  top: "50%",
  left: "50%",
  zIndex: theme.zIndex.overlayTop,

  width: "37.6rem",
  height: "55.4rem",

  padding: "2rem 2rem 3.2rem 2rem",
  borderRadius: "8px",
  border: "none",
  outline: "none",

  background: theme.colors.white,
  transform: "translate(-50%, -50%)",
});

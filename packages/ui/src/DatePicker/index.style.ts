import { theme } from "@/theme";
import { css } from "@emotion/react";

export const containerStyle = (width: string) =>
  css({
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
    position: "relative",

    width,
  });

export const triggerStyle = css({
  cursor: "pointer",
  width: "100%",

  ...theme.text.body08,
  textAlign: "center",
  "::placeholder": { ...theme.text.body08, textAlign: "center" },
});

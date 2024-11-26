import { css } from "@emotion/react";

import { fadeIn, fadeOut, moveUp } from "@/animation";
import { theme } from "@/theme";

export const containerStyle = (isShown: boolean) =>
  css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.6rem",

    padding: "1rem 2rem",

    borderRadius: "24px",
    color: theme.colors.white,
    backgroundColor: "rgba(44, 48, 48, 0.8)",

    fontSize: theme.text.body06.fontSize,
    lineHeight: theme.text.body06.lineHeight,

    animation: isShown ? `${moveUp} 0.2s ease-in, ${fadeIn} .2s ease-in` : `${fadeOut} .2s ease-in forwards`,

    "& > svg": {
      width: "2rem",
      height: "2rem",
    },
  });

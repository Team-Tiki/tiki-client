import { css } from "@emotion/react";

import { CarouselProps } from "./Carousel";

export const itemStyle = (height: string) =>
  css({
    width: "100%",
    height,

    flexShrink: 0,

    position: "relative",

    "& > *": {
      width: "100%",
      height,
      objectFit: "cover",
    },
  });

export const sliderStyle = (height: string) =>
  css({
    display: "flex",

    width: "100%",
    height,

    overflow: "hidden",

    "& > div": {
      width: "100%",
      height,
    },
  });

export const containerStyle = ({ width, height }: Pick<CarouselProps, "width" | "height">) =>
  css({
    position: "relative",

    width,
    height,

    borderRadius: "16px",

    overflow: "hidden",

    "& *": {
      userSelect: "none",
      touchAction: "none",
    },
  });

export const arrowStyle = (position: "left" | "right") =>
  css({
    position: "absolute",
    top: 0,
    bottom: 0,
    left: position === "left" ? "1.6rem" : "auto",
    right: position === "right" ? "1.6rem" : "auto",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    margin: "auto 0",

    width: "3.2rem",
    height: "3.2rem",

    border: "none",
    borderRadius: "16px",

    background: "rgb(255,255,255,0.3)",

    cursor: "pointer",
  });

export const dotContainerStyle = css`
  display: flex;
  gap: 0.8rem;

  position: absolute;
  bottom: 1.6rem;
  left: 50%;

  transform: translateX(-50%);
`;

export const dotStyle = (isCurrent: boolean) =>
  css({
    width: "0.8rem",
    height: "0.8rem",

    opacity: isCurrent ? 1 : 0.3,

    borderRadius: "50%",
    backgroundColor: "white",

    cursor: "pointer",
  });

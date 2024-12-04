import { css } from "@emotion/react";

import { ToolTipProps } from "@/ToolTip/ToolTip";
import { theme } from "@/theme";

export const containerStyle = css({
  display: "inline-block",
  position: "relative",
});

export const messageStyle = (isVisible: boolean) =>
  css({
    position: "absolute",

    width: "max-content",
    padding: "1rem",
    borderRadius: "8px",

    backgroundColor: `${theme.colors.gray_900}`,
    font: `${theme.text.body08}`,
    color: `${theme.colors.white}`,

    visibility: isVisible ? "visible" : "hidden",

    transitionDelay: isVisible ? "0.2s" : "0",

    pointerEvents: "none",
  });

export const positionStyle = (position: Required<ToolTipProps>["position"], gap: number) => {
  const style = {
    top: css({
      left: "50%",
      bottom: "100%",
      transform: `translateX(-50%) translateY(calc(-${gap}rem - 8px) )`,
    }),
    bottom: css({
      left: "50%",
      up: "100%",
      transform: `translateX(-50%) translateY(calc(${gap}rem + 8px))`,
    }),
    left: css({
      top: "50%",
      right: "100%",
      transform: `translateY(-50%) translateX(calc(-${gap}rem - 8px))`,
    }),
    right: css({
      top: "50%",
      left: "100%",
      transform: `translateY(-50%) translateX(calc(${gap}rem + 8px))`,
    }),
  };

  return style[position];
};

export const arrowStyle = css({
  position: "absolute",
});

export const arrowPositionStyle = (position: Required<ToolTipProps>["position"]) => {
  const style = {
    top: css({
      left: "50%",
      top: "calc(100%)",
      transform: `translateX(-50%) translateY(-1px) rotate(270deg)`,
    }),
    bottom: css({
      left: "50%",
      bottom: "calc(100%)",
      transform: `translateX(-50%) translateY(1px) rotate(90deg)`,
    }),
    left: css({
      top: "50%",
      left: "calc(100%)",
      transform: `translateY(-50%) translateX(-1px) rotate(180deg)`,
    }),
    right: css({
      top: "50%",
      right: "calc(100%)",
      transform: `translateY(-50%) translateX(1px)`,
    }),
  };

  return style[position];
};

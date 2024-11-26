import { css } from "@emotion/react";

import { theme } from "@/theme";

import { TextProps } from "./Text";

export const textStyle = (tag: Required<TextProps>["tag"]) => {
  const style = {
    body1: css({
      fontSize: theme.text.body01.fontSize,
      lineHeight: theme.text.body01.lineHeight,
    }),
    body2: css({
      fontSize: theme.text.body02.fontSize,
      lineHeight: theme.text.body02.lineHeight,
    }),
    body3: css({
      fontSize: theme.text.body03.fontSize,
      lineHeight: theme.text.body03.lineHeight,
    }),
    body4: css({
      fontSize: theme.text.body04.fontSize,
      lineHeight: theme.text.body04.lineHeight,
    }),
    body5: css({
      fontSize: theme.text.body05.fontSize,
      lineHeight: theme.text.body05.lineHeight,
    }),
    body6: css({
      fontSize: theme.text.body06.fontSize,
      lineHeight: theme.text.body06.lineHeight,
    }),
    body7: css({
      fontSize: theme.text.body07.fontSize,
      lineHeight: theme.text.body07.lineHeight,
    }),
    body8: css({
      fontSize: theme.text.body08.fontSize,
      lineHeight: theme.text.body08.lineHeight,
    }),
    body9: css({
      fontSize: theme.text.body09.fontSize,
      lineHeight: theme.text.body09.lineHeight,
    }),
    body10: css({
      fontSize: theme.text.body10.fontSize,
      lineHeight: theme.text.body10.lineHeight,
    }),
  };
  return style[tag];
};

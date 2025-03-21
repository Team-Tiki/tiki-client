import { css } from "@emotion/react";

import { theme } from "@/theme";

export const textStyle = (isError: boolean, isSuccess: boolean) => {
  const textColor = isError
    ? theme.colors.sementic_red
    : isSuccess
      ? theme.colors.sementic_success
      : theme.colors.gray_500;

  return css({
    color: textColor,
    paddingLeft: "0.8rem",
    wordBreak: "break-word",
    ...theme.text.body09,
    whiteSpace: "pre-line",
  });
};

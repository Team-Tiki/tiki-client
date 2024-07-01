import { css } from "@emotion/react";
import { theme } from "../common/style/theme/theme";

export const testStyle = css({
  backgroundColor: "blue",
  color: "green",
  border: "1px solid purple",
});

export const themeTestStyle = css({
  backgroundColor: theme.colors.pink200,
});

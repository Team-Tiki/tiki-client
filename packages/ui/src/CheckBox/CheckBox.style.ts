import { css } from "@emotion/react";

import { theme } from "@/theme";

export const inputStyle = css({
  appearance: "none",
  WebkitAppearance: "none",
  MozAppearance: "none",

  width: "1.8rem",
  height: "1.8rem",

  border: "none",
  borderRadius: "2px",
  backgroundColor: theme.colors.gray_300,

  "&:checked": {
    backgroundColor: theme.colors.key_500,
  },

  cursor: "pointer",

  "&:before": {
    content: '"✓"',

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    color: theme.colors.white,

    fontSize: "15px",
  },
});

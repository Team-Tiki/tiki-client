import { ComponentPropsWithoutRef } from "react";

import { textStyle } from "@/SupportingText/SupportingText.style";

interface SupportingTextProps extends ComponentPropsWithoutRef<"p"> {
  isError?: boolean;
  isSuccess?: boolean;
}

const SupportingText = ({ isError = false, isSuccess = false, children, ...props }: SupportingTextProps) => {
  return (
    <p {...props} css={textStyle(isError, isSuccess)}>
      {children}
    </p>
  );
};

export default SupportingText;

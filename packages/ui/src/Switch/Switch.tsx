import { ComponentPropsWithRef, FunctionComponent, SVGProps } from "react";

import { containerStyle, contentStyle, iconStyle } from "@/Switch/Switch.style";

export type IconProps = {
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  mode: "fill" | "stroke";
};

export interface SwitchProps extends Omit<ComponentPropsWithRef<"div">, "onClick"> {
  status: "left" | "right";
  LeftIcon: IconProps;
  RightIcon: IconProps;
  onSwitchChange: (status: "left" | "right") => void;
}

const Switch = ({ status = "left", LeftIcon, onSwitchChange, RightIcon }: SwitchProps) => {
  return (
    <div role="switch" aria-checked={status === "left"} css={containerStyle}>
      <button
        css={contentStyle("left", status === "left")}
        onClick={() => {
          onSwitchChange("left");
        }}
      >
        <LeftIcon.Icon css={iconStyle(status === "left", LeftIcon.mode)} />
      </button>
      <button
        css={contentStyle("right", status === "right")}
        onClick={() => {
          onSwitchChange("right");
        }}
      >
        <RightIcon.Icon css={iconStyle(status === "right", RightIcon.mode)} />
      </button>
    </div>
  );
};

export default Switch;

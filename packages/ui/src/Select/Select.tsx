import { ComponentPropsWithRef, HTMLAttributes, ReactNode, useEffect, useState } from "react";

import { DropdownItem, DropdownList, DropdownRoot, DropdownTrigger } from "@/Dropdown";
import { iconStyle, itemStyle, overlayStyle, profileStyle, textFieldStyle, triggerStyle } from "@/Select/Select.style";
import { scrollStyle } from "@/theme";
import { IcArrowDownGray, IcDown } from "@tiki/icon";

import { hasKeyInObject } from "@tiki/utils";

interface OptionType {
  value: string;
  svg?: ReactNode;
  profileUrl?: string;
  description?: string;
}

interface TriggerButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: SelectProps["variant"];
  isSelected: boolean;
  isOpen?: boolean;
}

const TriggerButton = ({ variant, isSelected, isOpen = false, children, ...props }: TriggerButtonProps) => {
  return (
    <button type="button" css={triggerStyle(variant, isSelected)} disabled={variant === "disabled"} {...props}>
      <span>{children}</span>
      {variant === "option" ? (
        <IcDown css={iconStyle(isOpen)} width={12} height={12} />
      ) : (
        <IcArrowDownGray css={iconStyle(isOpen)} width={20} height={20} />
      )}
    </button>
  );
};

export interface SelectProps extends Omit<ComponentPropsWithRef<"div">, "onSelect"> {
  variant?: "default" | "user" | "option" | "outline" | "underline" | "disabled";
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  onSelect?: (value: string) => void;
  options: OptionType[];
}

const Select = ({
  variant = "default",
  defaultValue,
  placeholder,
  label,
  onSelect,
  options,
  ...props
}: SelectProps) => {
  const [selectedText, setSelectedText] = useState(defaultValue || placeholder);

  useEffect(() => {
    if (defaultValue) {
      setSelectedText(defaultValue);
    }
  }, [defaultValue]);

  const isSelected = selectedText !== placeholder;

  return (
    <DropdownRoot css={{ width: "100%" }} role="listbox" label={label} {...props}>
      <DropdownTrigger>
        <TriggerButton variant={variant} isSelected={isSelected}>
          {selectedText}
        </TriggerButton>
      </DropdownTrigger>

      <DropdownList css={[overlayStyle, scrollStyle]}>
        {options.map((item) => (
          <DropdownItem
            key={item.value}
            css={itemStyle(variant)}
            onSelect={() => {
              onSelect?.(item.value);
              setSelectedText(item.value);
            }}
          >
            {hasKeyInObject(item, "profileUrl") && (
              <img src={item.profileUrl} css={profileStyle} alt={`${item.value} profile`} />
            )}

            <p css={textFieldStyle}>
              {item.value}
              {hasKeyInObject(item, "description") && <span>{item.description}</span>}
            </p>

            {hasKeyInObject(item, "svg") && item.svg}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownRoot>
  );
};

export default Select;

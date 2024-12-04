import { ComponentPropsWithoutRef } from "react";

import { tabActiveStyle, tabDefaultStyle, tabVariantStyle } from "@/Tab/style";

export interface TabProps extends ComponentPropsWithoutRef<"li"> {
  tabId?: number;
  isSelected?: boolean;
  onTabClick?: (tabId: number) => void;
  variant?: "round";
}

const TabButton = ({
  tabId = 0,
  children,
  isSelected = false,
  onTabClick = () => {},
  variant = "round",
  ...props
}: TabProps) => {
  const handleTabInteraction = () => {
    onTabClick(tabId);
  };

  return (
    <li
      key={tabId}
      role="tab"
      tabIndex={0}
      aria-selected={isSelected}
      aria-controls={`panel${tabId}`}
      onClick={handleTabInteraction}
      onKeyDown={handleTabInteraction}
      css={[tabDefaultStyle, tabVariantStyle(variant), tabActiveStyle(isSelected, variant)]}
      {...props}
    >
      {children}
    </li>
  );
};

export default TabButton;

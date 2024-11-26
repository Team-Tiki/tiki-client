import { ChangeEvent } from "react";

import RadioButton from "@/RadioButton/RadioButton";
import { radioGroupStyle } from "@/RadioButton/RadioButton.style";

export interface RadioProps {
  label: string;
  name: string;
  value: string;
}

interface RadioButtonGroupProps {
  options: RadioProps[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const RadioGroup = ({ options, onChange, value }: RadioButtonGroupProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedValue = e.target.value;
    onChange({ target: { value: selectedValue } } as ChangeEvent<HTMLInputElement>);
  };

  const renderRadioButton = () => {
    return options.map(({ label, name, value: optionValue }, index) => {
      const id = `${name}-${index}`;

      return (
        <RadioButton
          key={id}
          id={id}
          label={label}
          name={name}
          value={optionValue}
          onChange={handleChange}
          checked={optionValue === value}
        />
      );
    });
  };

  return (
    <div role="radiogroup" css={radioGroupStyle}>
      {renderRadioButton()}
    </div>
  );
};

export default RadioGroup;

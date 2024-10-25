import { ChangeEvent } from 'react';

import RadioButton, { RadioButtonProps } from './RadioButton';

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

  function renderRadioButton() {
    return options.map(({ label, value: optionValue, name }: RadioButtonProps, index) => {
      const id = `${name}-${index}`;

      return (
        <RadioButton
          key={id}
          id={id}
          label={label}
          name={name}
          value={optionValue}
          onChange={handleChange}
          checked={value === optionValue}
        />
      );
    });
  }

  return <div>{renderRadioButton()}</div>;
};

export default RadioGroup;

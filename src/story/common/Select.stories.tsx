import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';

import { useEffect, useState } from 'react';

import ArrowDown from '@/common/asset/arrow-down.svg';
import Button from '@/common/component/Button/Button';
import Select from '@/common/component/Select/Select';
import { useOutsideClick, useOverlay } from '@/common/hook';
import { theme } from '@/common/style/theme/theme';

const meta = {
  title: 'Common/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div css={{ width: '240px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    label: 'Select',
    options: ['option 1', 'option 2', 'option 3'],
    trigger: <></>,
  },
  argTypes: {
    trigger: {
      control: false,
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const { isOpen, close, toggle } = useOverlay();
    const ref = useOutsideClick<HTMLDivElement>(close);
    const [selected, setSelected] = useState('');

    useEffect(() => {
      close?.();
    }, [selected, close]);

    const handleSelect = (id: string) => {
      setSelected(id);
    };

    return (
      <Select
        {...args}
        ref={ref}
        isOpen={isOpen}
        onSelect={handleSelect}
        trigger={
          <Button
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: center;

              padding: 10px 12px;
              color: ${theme.colors.gray_500};
              border: 1px solid ${theme.colors.gray_400};
              background-color: white;
              border-radius: 8px;
            `}
            onClick={toggle}>
            {selected || 'Select'}
            <ArrowDown />
          </Button>
        }
      />
    );
  },
};

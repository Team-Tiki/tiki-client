import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import Select from '@/common/component/Select/Select';
import { useOutsideClick, useOverlay } from '@/common/hook';

import { OPTIONS } from '@/page/archiving/index/constant/sortOption';

const meta = {
  title: 'Common/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div css={{ width: '200px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    options: ['option 1', 'option 2', 'option 3'],
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    const { isOpen, close, toggle } = useOverlay();
    const ref = useOutsideClick<HTMLDivElement>(close);
    const [selected, setSelected] = useState('');

    const handleSelect = (id: string) => {
      setSelected(id);

      close();
    };

    console.log(`Selected Item is ${selected}`);

    return (
      <Select
        variant="primary"
        {...args}
        ref={ref}
        isOpen={isOpen}
        placeholder="Primary Select"
        onTrigger={toggle}
        onSelect={handleSelect}
      />
    );
  },
};

export const Outline: Story = {
  render: (args) => {
    const { isOpen, close, toggle } = useOverlay();
    const ref = useOutsideClick<HTMLDivElement>(close);
    const [selected, setSelected] = useState('');

    const handleSelect = (id: string) => {
      setSelected(id);

      close();
    };

    console.log(`Selected Item is ${selected}`);

    return (
      <Select
        label="아웃라인 셀렉트"
        variant="outline"
        {...args}
        ref={ref}
        isOpen={isOpen}
        placeholder="Outline Select"
        onTrigger={toggle}
        onSelect={handleSelect}
      />
    );
  },
};

export const Scroll: Story = {
  render: (args) => {
    const { isOpen, close, toggle } = useOverlay();
    const ref = useOutsideClick<HTMLDivElement>(close);
    const [selected, setSelected] = useState('');

    console.log(`Selected Item is ${selected}`);

    const handleSelect = (id: string) => {
      setSelected(id);

      close();
    };

    return (
      <Select
        variant="outline"
        {...args}
        ref={ref}
        isOpen={isOpen}
        placeholder="Scroll Select"
        onTrigger={toggle}
        onSelect={handleSelect}
        options={[
          'Option 1',
          'Option 2',
          'Option 3',
          'Option 4',
          'Option 5',
          'Option 6',
          'Option 7',
          'Option 8',
          'Option 9',
          'Option 10',
          'Option 11',
          'Option 12',
        ]}
      />
    );
  },
};

export const SVGSelect = {
  render: () => {
    const { isOpen, close, toggle } = useOverlay();
    const [selected, setSelected] = useState('');
    const ref = useOutsideClick<HTMLDivElement>(close);

    const handleSelect = (id: string) => {
      setSelected(id);

      close();
    };

    console.log(`Selected Item is ${selected}`);

    return (
      <div css={{ width: '120px' }}>
        <Select
          variant="secondary"
          options={OPTIONS}
          ref={ref}
          placeholder="최근 업로드 순"
          isOpen={isOpen}
          onTrigger={() => toggle()}
          onSelect={handleSelect}
        />
      </div>
    );
  },
};

/**
 * export const Scroll: Story = {
  render: (args) => {
    const { isOpen, close, toggle } = useOverlay();
    const ref = useOutsideClick<HTMLDivElement>(close);
    const [selected, setSelected] = useState('');

    useEffect(() => {
      close?.();
    }, [selected, close]);

    const handleSelect = (id: string) => {
      setSelected(id);

      close();
    };

    return (
      <Select
        {...args}
        ref={ref}
        isOpen={isOpen}
        onSelect={handleSelect}
        options={[
          'Option 1',
          'Option 2',
          'Option 3',
          'Option 4',
          'Option 5',
          'Option 6',
          'Option 7',
          'Option 8',
          'Option 9',
          'Option 10',
          'Option 11',
          'Option 12',
        ]}
      />
    );
  },
};

export const SVGSelect = {
  render: () => {
    const { isOpen, close, toggle } = useOverlay();
    const [selected, setSelected] = useState('');
    const ref = useOutsideClick<HTMLDivElement>(close);

    useEffect(() => {
      close?.();
    }, [selected, close]);

    const handleSelect = (id: string) => {
      setSelected(id);
    };

    return (
      <Select
        options={OPTIONS}
        ref={ref}
        placeholder="Select"
        isOpen={isOpen}
        onTrigger={() => toggle()}
        onSelect={handleSelect}
        css={fontStyle}
      />
    );
  },
};

 */

import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import IcArrowDown from '@/common/asset/svg/ic_arrow_down.svg?react';
import IcArrowUp from '@/common/asset/svg/ic_arrow_up.svg?react';
import Select from '@/common/component/Select/Select';
import { useOutsideClick, useOverlay } from '@/common/hook';

const meta = {
  title: 'Common/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div css={{ width: '16rem' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    options: [{ value: 'option 1' }, { value: 'option 2' }, { value: 'option 3' }],
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
        variant="default"
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

export const UserList: Story = {
  render: (args) => {
    const { isOpen, close, toggle } = useOverlay();
    const ref = useOutsideClick<HTMLDivElement>(close);
    const [selected, setSelected] = useState('');

    const handleSelect = (id: string) => {
      setSelected(id);

      close();
    };

    const options = [
      {
        value: 'Option 1',
        description: 'WEB',
        profileUrl:
          'https://images.unsplash.com/photo-1728585255223-c158ab095e1f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
      },
      {
        value: 'Option 2',
        description: 'SERVER',
        profileUrl:
          'https://images.unsplash.com/photo-1728585255223-c158ab095e1f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
      },
    ];

    console.log(`Selected Item is ${selected}`);

    return (
      <Select
        label="아웃라인 셀렉트"
        variant="user"
        {...args}
        ref={ref}
        isOpen={isOpen}
        placeholder="Outline Select"
        onTrigger={toggle}
        onSelect={handleSelect}
        options={options}
      />
    );
  },
};

export const Outline: Story = {
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
      />
    );
  },
};

export const ScrollOption = {
  render: () => {
    const { isOpen, close, toggle } = useOverlay();
    const [selected, setSelected] = useState('');
    const ref = useOutsideClick<HTMLDivElement>(close);

    const handleSelect = (id: string) => {
      setSelected(id);

      close();
    };

    const options = [
      { value: 'Option 1' },
      { value: 'Option 2' },
      { value: 'Option 3' },
      { value: 'Option 4' },
      { value: 'Option 5' },
      { value: 'Option 6' },
      { value: 'Option 7' },
      { value: 'Option 8' },
      { value: 'Option 9' },
    ];

    console.log(`Selected Item is ${selected}`);

    return (
      <div css={{ width: '16rem' }}>
        <Select
          variant="outline"
          options={options}
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

export const OptionList = {
  render: () => {
    const { isOpen, close, toggle } = useOverlay();
    const [selected, setSelected] = useState('');
    const ref = useOutsideClick<HTMLDivElement>(close);

    const handleSelect = (id: string) => {
      setSelected(id);

      close();
    };

    const options = [
      { value: '최근 정렬 순', svg: <IcArrowUp /> },
      { value: '과거 정렬 순', svg: <IcArrowDown /> },
    ];

    console.log(`Selected Item is ${selected}`);

    return (
      <div css={{ width: '12rem' }}>
        <Select
          variant="option"
          options={options}
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

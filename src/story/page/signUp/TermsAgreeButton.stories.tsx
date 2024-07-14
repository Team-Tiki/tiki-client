import TermsAgreeButton from '@/page/signUp/index/component/TermsAgreeButton/TermsAgreeButton';
import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

const meta = {
  title: 'page/signUp/TermsAgreeButton',
  component: TermsAgreeButton,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div css={{ width: '40rem' }}>
        <Story />
      </div>
    ),
  ],
  args: {},
} satisfies Meta<typeof TermsAgreeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [isClicked, setIsClicked] = useState(false);

    return <TermsAgreeButton onClick={() => setIsClicked((prev) => !prev)} isClicked={isClicked} />;
  },
};

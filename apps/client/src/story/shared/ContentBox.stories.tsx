import type { Meta, StoryObj } from '@storybook/react';
import { Button, Flex, Input, Text, theme } from '@tiki/ui';

import { ReactNode } from 'react';

import ContentBox from '@/shared/component/ContentBox/ContentBox';

const meta = {
  title: 'Shared/ContentBox',
  component: ContentBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div css={{ width: '80rem' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    variant: 'timeline',
    title: '컨텐츠',
    children: <></>,
  },
} satisfies Meta<typeof ContentBox>;

export default meta;
type Story = StoryObj<typeof meta>;

const SampleButton = ({ children }: { children: ReactNode }) => {
  return (
    <Button variant="primary" css={{ padding: '1.4rem 1.2rem', width: 'max-content', ...theme.text.body08 }}>
      {children}
    </Button>
  );
};

export const File: Story = {
  render: () => (
    <ContentBox
      variant="file"
      title="파일"
      headerOption={
        <Flex styles={{ align: 'center', gap: '0.8rem' }}>
          <Input placeholder="파일 및 폴더명을 검색해보세요" />
          <SampleButton>파일 업로드</SampleButton>
        </Flex>
      }
      contentOption={
        <Flex styles={{ align: 'center', gap: '0.8rem' }}>
          <SampleButton>삭제</SampleButton>
          <SampleButton>선택</SampleButton>
        </Flex>
      }>
      <Flex styles={{ width: '100%', height: '50rem', justify: 'center', align: 'center' }}>
        <Text>드라이브에 파일이 존재하지 않습니다.</Text>
      </Flex>
    </ContentBox>
  ),
};

export const TimeLine: Story = {
  render: () => (
    <ContentBox
      variant="timeline"
      title="타임라인"
      headerOption={
        <Flex styles={{ align: 'center', gap: '0.8rem' }}>
          <Input placeholder="파일 및 폴더명을 검색해보세요" />
          <SampleButton>파일 업로드</SampleButton>
        </Flex>
      }
      contentOption={
        <Flex styles={{ align: 'center', gap: '0.8rem' }}>
          <SampleButton>삭제</SampleButton>
          <SampleButton>선택</SampleButton>
        </Flex>
      }>
      <Flex styles={{ width: '100%', height: '50rem', justify: 'center', align: 'center' }}>
        <Text>타임라인 뷰입니다.</Text>
      </Flex>
    </ContentBox>
  ),
};

export const Deleted: Story = {
  render: () => (
    <ContentBox
      variant="deleted"
      title="휴지통"
      headerOption={
        <Flex styles={{ align: 'center', gap: '0.8rem' }}>
          <Input placeholder="파일 및 폴더명을 검색해보세요" />
          <SampleButton>파일 업로드</SampleButton>
        </Flex>
      }
      contentOption={
        <Flex styles={{ align: 'center', gap: '0.8rem' }}>
          <SampleButton>삭제</SampleButton>
          <SampleButton>선택</SampleButton>
        </Flex>
      }>
      <Flex styles={{ width: '100%', height: '50rem', justify: 'center', align: 'center' }}>
        <Text>휴지통 뷰입니다.</Text>
      </Flex>
    </ContentBox>
  ),
};

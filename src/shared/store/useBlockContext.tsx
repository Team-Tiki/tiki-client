import BlockModal from '@/page/archiving/createTimeBlock/component/Block/BlockModal';
import UploadModal from '@/page/archiving/createTimeBlock/component/Upload/UploadModal';

import { ReactNode, createContext, useContext, useState } from 'react';

import { Block } from '@/story/page/archiving/modal/BlockModal.stories';

interface BlockContextType {
  step: number;
  nextStep: () => void;
  reset: () => void;
  blockName: string;
  setBlockName: (name: string) => void;
  blockType: string;
  setBlockType: (type: string) => void;
  startDate: string;
  setStartDate: (date: string) => void;
  endDate: string;
  setEndDate: (date: string) => void;
}

const BlockContext = createContext<BlockContextType | undefined>(undefined);

export const useBlockContext = () => {
  const context = useContext(BlockContext);
  if (!context) {
    throw new Error('Error useBlockContext');
  }
  return context;
};

export const BlockProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState(1);
  const [blockName, setBlockName] = useState('');
  const [blockType, setBlockType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const nextStep = () => setStep((prev) => prev + 1);

  const reset = () => {
    setStep(1);
    setBlockName('');
    setBlockType('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <BlockContext.Provider
      value={{
        step,
        blockName,
        blockType,
        startDate,
        endDate,
        setBlockName,
        setBlockType,
        setStartDate,
        setEndDate,
        nextStep,
        reset,
      }}>
      {children}
    </BlockContext.Provider>
  );
};

export const BlockFlow = () => {
  const { step } = useBlockContext();

  switch (step) {
    case 1:
      return <BlockModal />;
    case 2:
      return <UploadModal />;
    default:
      return null;
  }
};

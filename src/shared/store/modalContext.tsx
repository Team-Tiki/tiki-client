import React, { ReactNode, createContext, useContext, useState } from 'react';

import { useModalStore } from '@/shared/store/modal';

interface WorkSpaceContextType {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  fileUrlData: string;
  setFileUrlData: React.Dispatch<React.SetStateAction<string>>;
  resetBlockData: () => void;
}

const WorkSpaceContext = createContext<WorkSpaceContextType | undefined>(undefined);

export const useWorkSpaceContext = () => {
  const context = useContext(WorkSpaceContext);
  if (!context) {
    throw new Error('Error WorkSpaceProvider');
  }
  return context;
};

interface WorkSpaceProviderProps {
  children: ReactNode;
}

export const WorkSpaceProvider = ({ children }: WorkSpaceProviderProps) => {
  const [name, setName] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [fileUrlData, setFileUrlData] = useState<string>('');

  console.log(fileUrlData);

  const resetBlockData = () => {
    setName('');
    setCategory('');
    setFileUrlData('');
  };

  return (
    <WorkSpaceContext.Provider
      value={{ name, setName, category, setCategory, fileUrlData, setFileUrlData, resetBlockData }}>
      {children}
    </WorkSpaceContext.Provider>
  );
};

interface BlockModalContextType {
  blockName: string;
  setBlockName: React.Dispatch<React.SetStateAction<string>>;
  blockType: string;
  setBlockType: React.Dispatch<React.SetStateAction<string>>;
  startDate: string;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
  endDate: string;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
  resetBlockData: () => void;
  closeModal: () => void;
}

const BlockModalContext = createContext<BlockModalContextType | undefined>(undefined);

export const useBlockModalContext = () => {
  const context = useContext(BlockModalContext);
  if (!context) {
    throw new Error('Error BlockModalProvider');
  }
  return context;
};

export const BlockModalProvider = ({ children }: { children: ReactNode }) => {
  const [blockName, setBlockName] = useState('');
  const [blockType, setBlockType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const { toggleModal, resetStep } = useModalStore();

  const closeModal = () => {
    toggleModal('block');
    resetStep();
  };

  const resetBlockData = () => {
    setBlockName('');
    setBlockType('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <BlockModalContext.Provider
      value={{
        blockName,
        setBlockName,
        blockType,
        setBlockType,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        resetBlockData,
        closeModal,
      }}>
      {children}
    </BlockModalContext.Provider>
  );
};

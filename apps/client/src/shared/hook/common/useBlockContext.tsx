import { ReactNode, createContext, useCallback, useContext, useState } from 'react';

import { TimeBlockType } from '@/shared/component/TimeBlockModal/type/block';

interface BlockContextType {
  formData: TimeBlockType;
  setFormData: (data: Partial<TimeBlockType>) => void;
  resetFormData: () => void;
}

const BlockContext = createContext<BlockContextType | undefined>(undefined);

export const useBlockContext = () => {
  const context = useContext(BlockContext);
  if (!context) {
    throw new Error('Error: BlockContext must be used within a BlockProvider');
  }
  return context;
};

export const BlockProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormDataState] = useState<TimeBlockType>({
    name: '',
    blockType: 'NONE',
    color: '',
    startDate: '',
    endDate: '',
    documentIds: [],
  });

  const setFormData = useCallback((data: Partial<TimeBlockType>) => {
    setFormDataState((prev) => ({ ...prev, ...data }));
  }, []);

  const resetFormData = useCallback(() => {
    setFormDataState({
      name: '',
      blockType: 'NONE',
      color: '',
      startDate: '',
      endDate: '',
      documentIds: [],
    });
  }, []);

  return <BlockContext.Provider value={{ formData, setFormData, resetFormData }}>{children}</BlockContext.Provider>;
};

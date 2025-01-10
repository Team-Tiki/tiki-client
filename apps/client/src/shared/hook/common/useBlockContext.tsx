import { ReactNode, createContext, useCallback, useContext, useState } from 'react';

import { TimeBlockData } from '@/page/archiving/index/component/TimeBlockModal/type/blockType';

interface BlockContextType {
  formData: TimeBlockData;
  setFormData: (data: Partial<TimeBlockData>) => void;
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
  const [formData, setFormDataState] = useState<TimeBlockData>({
    name: '',
    blockType: 'MEETING',
    color: '',
    startDate: '',
    endDate: '',
    documentIds: [],
  });

  const setFormData = useCallback((data: Partial<TimeBlockData>) => {
    setFormDataState((prev) => ({ ...prev, ...data }));
  }, []);

  const resetFormData = useCallback(() => {
    setFormDataState({
      name: '',
      blockType: 'MEETING',
      color: '',
      startDate: '',
      endDate: '',
      documentIds: [],
    });
  }, []);

  return <BlockContext.Provider value={{ formData, setFormData, resetFormData }}>{children}</BlockContext.Provider>;
};

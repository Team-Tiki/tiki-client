import { ReactNode, createContext, useCallback, useContext, useState } from 'react';

interface BlockFormData {
  blockName: string;
  blockType: string;
  blockColor: string;
  startDate: string;
  endDate: string;
}

interface BlockContextType {
  formData: BlockFormData;
  setFormData: (data: Partial<BlockFormData>) => void;
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
  const [formData, setFormDataState] = useState<BlockFormData>({
    blockName: '',
    blockType: '',
    blockColor: '',
    startDate: '',
    endDate: '',
  });

  const setFormData = useCallback((data: Partial<BlockFormData>) => {
    setFormDataState((prev) => ({ ...prev, ...data }));
  }, []);

  const resetFormData = useCallback(() => {
    setFormDataState({
      blockName: '',
      blockType: '',
      blockColor: '',
      startDate: '',
      endDate: '',
    });
  }, []);

  return <BlockContext.Provider value={{ formData, setFormData, resetFormData }}>{children}</BlockContext.Provider>;
};

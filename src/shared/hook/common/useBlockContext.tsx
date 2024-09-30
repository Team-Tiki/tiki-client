import { ReactNode, createContext, useCallback, useContext, useState } from 'react';

interface BlockFormData {
  blockName: string;
  blockType: string;
  startDate: string;
  endDate: string;
}

interface BlockContextType {
  step: number;
  nextStep: () => void;
  reset: () => void;
  formData: BlockFormData;
  setFormData: (data: Partial<BlockFormData>) => void;
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
  const [formData, setFormDataState] = useState<BlockFormData>({
    blockName: '',
    blockType: '',
    startDate: '',
    endDate: '',
  });

  const nextStep = useCallback(() => setStep((prev) => prev + 1), []);

  const reset = useCallback(() => {
    setStep(1);
    setFormDataState({
      blockName: '',
      blockType: '',
      startDate: '',
      endDate: '',
    });
  }, []);

  const setFormData = useCallback((data: Partial<BlockFormData>) => {
    setFormDataState((prev) => ({ ...prev, ...data }));
  }, []);

  return (
    <BlockContext.Provider value={{ step, formData, setFormData, nextStep, reset }}>{children}</BlockContext.Provider>
  );
};

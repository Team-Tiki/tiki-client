import { ReactNode, createContext, useCallback, useContext, useState } from 'react';

interface WorkSpaceFormData {
  name: string;
  category: string;
  fileUrlData: string;
}

interface WorkSpaceContextType {
  step: number;
  nextStep: () => void;
  reset: () => void;
  formData: WorkSpaceFormData;
  setFormData: (data: Partial<WorkSpaceFormData>) => void;
}

const WorkSpaceContext = createContext<WorkSpaceContextType | undefined>(undefined);

export const useWorkSpaceContext = () => {
  const context = useContext(WorkSpaceContext);
  if (!context) {
    throw new Error('Error useWorkSpaceContext');
  }
  return context;
};

export const WorkSpaceProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormDataState] = useState<WorkSpaceFormData>({
    name: '',
    category: '',
    fileUrlData: '',
  });

  const nextStep = useCallback(() => setStep((prev) => prev + 1), []);

  const reset = useCallback(() => {
    setStep(1);
    setFormDataState({
      name: '',
      category: '',
      fileUrlData: '',
    });
  }, []);

  const setFormData = useCallback((data: Partial<WorkSpaceFormData>) => {
    setFormDataState((prev) => ({ ...prev, ...data }));
  }, []);

  return (
    <WorkSpaceContext.Provider value={{ step, formData, setFormData, nextStep, reset }}>
      {children}
    </WorkSpaceContext.Provider>
  );
};

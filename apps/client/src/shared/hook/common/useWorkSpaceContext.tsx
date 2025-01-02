import { ReactNode, createContext, useCallback, useContext, useState } from 'react';

interface WorkSpaceFormData {
  name: string;
  category: string;
  fileUrlData: string;
}

interface WorkSpaceContextType {
  formData: WorkSpaceFormData;
  setFormData: (data: Partial<WorkSpaceFormData>) => void;
  resetFormData: () => void;
}

const WorkSpaceContext = createContext<WorkSpaceContextType | undefined>(undefined);

export const useWorkSpaceContext = () => {
  const context = useContext(WorkSpaceContext);
  if (!context) {
    throw new Error('Error: WorkSpaceContext must be used within a WorkSpaceProvider');
  }
  return context;
};

export const WorkSpaceProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormDataState] = useState<WorkSpaceFormData>({
    name: '',
    category: '',
    fileUrlData: '',
  });

  const setFormData = useCallback((data: Partial<WorkSpaceFormData>) => {
    setFormDataState((prev) => ({ ...prev, ...data }));
  }, []);

  const resetFormData = useCallback(() => {
    setFormDataState({
      name: '',
      category: '',
      fileUrlData: '',
    });
  }, []);

  return (
    <WorkSpaceContext.Provider value={{ formData, setFormData, resetFormData }}>{children}</WorkSpaceContext.Provider>
  );
};

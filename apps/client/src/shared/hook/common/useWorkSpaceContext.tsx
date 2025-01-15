import { ReactNode, createContext, useCallback, useContext, useState } from 'react';

interface WorkSpaceFormData {
  name: string;
  category:
    | '전체'
    | '학술연구'
    | '문화예술'
    | '스포츠레저'
    | '사회활동'
    | '취미활동'
    | '창업비즈니스'
    | '과학기술'
    | '종교'
    | '국제교류'
    | '네트워킹';
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
    category: '전체',
    fileUrlData: '',
  });

  const setFormData = useCallback((data: Partial<WorkSpaceFormData>) => {
    setFormDataState((prev) => ({ ...prev, ...data }));
  }, []);

  const resetFormData = useCallback(() => {
    setFormDataState({
      name: '',
      category: '전체',
      fileUrlData: '',
    });
  }, []);

  return (
    <WorkSpaceContext.Provider value={{ formData, setFormData, resetFormData }}>{children}</WorkSpaceContext.Provider>
  );
};

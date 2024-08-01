import { ReactNode, createContext, useContext, useState } from 'react';

import WorkSpaceCategory from '../component/createWorkSpace/category/WorkSpaceCategory';
import WorkSpaceComplete from '../component/createWorkSpace/complete/WorkSpaceComplete';
import WorkSpaceImage from '../component/createWorkSpace/image/WorkSpaceImage';
import WorkSpaceName from '../component/createWorkSpace/name/WorkSpaceName';

interface WorkSpaceContextType {
  step: number;
  nextStep: () => void;
  reset: () => void;
  name: string;
  setName: (name: string) => void;
  category: string;
  setCategory: (category: string) => void;
  fileUrlData: string;
  setFileUrlData: (url: string) => void;
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
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [fileUrlData, setFileUrlData] = useState('');

  const nextStep = () => setStep((prev) => prev + 1);

  const reset = () => {
    setStep(1);
    setName('');
    setCategory('');
    setFileUrlData('');
  };

  return (
    <WorkSpaceContext.Provider
      value={{ step, name, category, fileUrlData, setName, setCategory, setFileUrlData, nextStep, reset }}>
      {children}
    </WorkSpaceContext.Provider>
  );
};

export const WorkSpaceFlow = () => {
  const { step } = useWorkSpaceContext();

  switch (step) {
    case 1:
      return <WorkSpaceName />;
    case 2:
      return <WorkSpaceCategory />;
    case 3:
      return <WorkSpaceImage />;
    case 4:
      return <WorkSpaceComplete />;
    default:
      return null;
  }
};

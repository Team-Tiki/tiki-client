import { ReactNode, createContext, useContext } from 'react';

import { useDate } from './hook/common/useDate';

interface DateContextType {
  currentYear: number;
  currentMonth: number;
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
  handleToday: () => void;
  endDay: Date;
}

const DateContext = createContext<DateContextType | undefined>(undefined);

export const useDateProvider = () => {
  const context = useContext(DateContext);

  if (!context) {
    throw new Error('Error from DateProvider');
  }
  return context;
};

const DateProvider = ({ children }: { children: ReactNode }) => {
  const teamId = localStorage.getItem('teamId');
  const date = useDate(teamId!);

  return <DateContext.Provider value={date}>{children}</DateContext.Provider>;
};

export default DateProvider;

import { ReactNode, createContext, useContext } from 'react';

import { useDate } from './hook/common/useDate';

interface DateContextProp {
  currentYear: number;
  currentMonth: number;
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
  handleToday: () => void;
  endDay: Date;
}

interface DateProviderProp {
  children: ReactNode;
  teamId: string;
}

const DateContext = createContext<DateContextProp>({} as DateContextProp);

export const useDateProvider = () => {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error('Error from DateProvider');
  }
  return context;
};

const DateProvider = ({ children, teamId }: DateProviderProp) => {
  const date = useDate(teamId);

  return <DateContext.Provider value={{ ...date }}>{children}</DateContext.Provider>;
};

export default DateProvider;

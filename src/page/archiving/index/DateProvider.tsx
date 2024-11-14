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
  teamId: number;
}

const DateContext = createContext<DateContextProp>({} as DateContextProp);

export const useDateContext = () => {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error('Error from DateContext');
  }
  return context;
};

const DateProvider = ({ children, teamId }: DateProviderProp) => {
  const date = useDate(teamId);

  return <DateContext.Provider value={{ ...date }}>{children}</DateContext.Provider>;
};

export default DateProvider;

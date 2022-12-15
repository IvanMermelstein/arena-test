import { createContext, FC, useContext, useState } from 'react';
import { Transactions } from '../interfaces/interfaces';

type Props = {
    children?: React.ReactNode;
};

export type ContextProps = {
    transactions: Transactions;
    setTransactions: (transactions: Transactions) => void;
    searchLoad: boolean;
    setSearchLoad: (load: boolean) => void;
    searchNoResult: boolean;
    setSearchNoResult: (noResult: boolean) => void;
};

export const AppContext = createContext<ContextProps | null>(null);
export const useAppContext = () => useContext(AppContext);

const AppProvider: FC<Props> = ({ children }) => {

  const [transactions, setTransactions] = useState<Transactions>({} as Transactions);
  const [searchLoad, setSearchLoad] = useState(false);
  const [searchNoResult, setSearchNoResult] = useState(false);

  return (
    <AppContext.Provider
      value={{
        transactions, setTransactions,
        searchLoad, setSearchLoad,
        searchNoResult, setSearchNoResult
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
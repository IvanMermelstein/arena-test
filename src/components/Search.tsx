import { ChangeEventHandler, useState } from 'react';
import getTransactions from '../utils/getTransactions';
import { useAppContext, ContextProps } from '../context/AppContext';
import { Transactions } from '../interfaces/interfaces';

const Search = () => {
  const [searchVal, setSearchVal] = useState(sessionStorage.getItem('searchVal') || '');
  const { setTransactions, searchLoad, setSearchLoad, setSearchNoResult } = useAppContext() as ContextProps;

  const handleClick = async () => {
    if (searchVal) {
      setSearchLoad(true);
      sessionStorage.setItem('searchVal', searchVal);

      const transactions = await getTransactions(searchVal);

      if (transactions) {
        setTransactions(transactions);
        setSearchNoResult(false);
      } else {
        setTransactions({} as Transactions);
        setSearchNoResult(true);
      }
      setSearchLoad(false);
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setSearchVal(e.target.value);
  };

  return (
    <div className='flex flex-col py-3 pt-4 w-11/12'>
      <span className='text-white text-center font-bold text-3xl'>Transactions by address</span>
      <div className='flex justify-center pt-4'>
        <input
          type="text"
          placeholder='0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B'
          className='text-gray-800 w-10/12 max-w-md rounded-md p-1 outline-gray-500'
          value={searchVal}
          onChange={(e) => handleChange(e)}
          disabled={searchLoad}
          spellCheck={false}
        />
        <button
          className='ml-2 text-white hover:text-gray-300 border-2 rounded-md border-white hover:border-gray-300 px-1'
          onClick={handleClick}
          disabled={searchLoad}
        >
            Search
        </button>
      </div>
    </div>
  );
};

export default Search;
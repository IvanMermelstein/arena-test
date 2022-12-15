import { AssetTransfersResponse } from 'alchemy-sdk';
import { useNavigate } from 'react-router-dom';
import { ContextProps, useAppContext } from '../context/AppContext';
import Spinner from './Spinner';

const List = ({ transaction, color }: { transaction: AssetTransfersResponse, color: string }) => {

  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/transaction/${id}`);
  };
  console.log(color);
  return (
    <div className='flex flex-col text-white lg:w-5/12 w-11/12'>
      {
        transaction?.transfers &&
        <p className='text-lg'>{color === 'green' ? 'Income' : 'Outcome'}</p>
      }
      {
        transaction?.transfers &&
          transaction.transfers.map((transfer) =>
            <div
              key={transfer.hash + transfer.uniqueId}
              className={`hover:cursor-pointer hover:scale-105 bg-${color}-300 p-2 my-1 truncate rounded-lg drop-shadow-[0_3px_3px_rgba(200,200,200,0.25)] text-xs`}
              onClick={() => handleClick(transfer.hash)}
            >
              {transfer.hash}
              <p>Block: {transfer.blockNum}</p>
            </div>
          )
      }
    </div>
  );
};

const Lists = () => {

  const { transactions, searchLoad, searchNoResult } = useAppContext() as ContextProps;

  if (searchLoad) return <Spinner />;

  if (searchNoResult) return <p className='mt-6 text-white text-xl'>No results 😔</p>;

  return (
    <div className='flex items-center lg:items-start flex-col lg:flex-row lg:justify-evenly mt-4 text-sm font-bold w-11/12 md:w-11/12'>
      <List transaction={transactions.transactionsFrom} color='green'/>
      <List transaction={transactions.transactionsTo} color='red'/>
    </div>
  );
};

export default Lists;
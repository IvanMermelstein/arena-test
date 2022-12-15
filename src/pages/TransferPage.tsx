import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getTransactionInfo from '../utils/getTransactionInfo';
import { TransactionResponse } from '@ethersproject/abstract-provider';
import Spinner from '../components/Spinner';

const TransferPage = () => {
  const [transfer, setTransfer] = useState<TransactionResponse>();
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const data = await getTransactionInfo(id as string);
      setTransfer(data as TransactionResponse);
      setLoading(false);
    })();
  }, [id]);

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <div className='w-10/12 h-3/4 lg:w-8/12 lg:h-1/2 bg-gray-100 rounded-lg py-4 px-3 flex flex-col justify-center items-center'>
        {
          loading ?
            <div className='flex justify-center'>
              <Spinner />
            </div>
            :
            <div className='flex flex-col items-center w-10/12 overflow-hidden text-center'>
              <p>Hash</p>
              <p className='mb-2 font-bold overflow-hidden text-ellipsis w-56 lg:w-auto'>{transfer?.hash}</p>
              <p>Block Hash</p>
              <p className='mb-2 font-bold overflow-hidden text-ellipsis w-56 lg:w-auto'>{transfer?.blockHash}</p>
              <p>Block Number</p>
              <p className='mb-2 font-bold overflow-hidden text-ellipsis w-56 lg:w-auto'>{transfer?.blockNumber}</p>
              <p>From</p>
              <p className='mb-2 font-bold overflow-hidden text-ellipsis w-56 lg:w-auto'>{transfer?.from}</p>
              <p>To</p>
              <p className='mb-2 font-bold overflow-hidden text-ellipsis w-56 lg:w-auto'>{transfer?.to}</p>
              <p>Gas price</p>
              <p className='mb-2 font-bold overflow-hidden text-ellipsis w-56 lg:w-auto'>{transfer?.gasPrice?.toNumber()}</p>
            </div>
        }
      </div>
    </div>
  );
};

export default TransferPage;
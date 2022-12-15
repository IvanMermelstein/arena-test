import { Network, Alchemy } from 'alchemy-sdk';
import { TransactionResponse } from '@ethersproject/abstract-provider';

const getTransactionInfo = async (transactionHash: string): Promise<TransactionResponse | void> => {
  const settings = {
    apiKey: process.env.REACT_APP_API_KEY,
    network: Network.ETH_MAINNET,
  };

  const alchemy = new Alchemy(settings);

  try {
    const transactionInfo = await alchemy.core.getTransaction(transactionHash) as TransactionResponse;
    return transactionInfo;
  } catch (err) {
    console.log(err);
  }
};

export default getTransactionInfo;
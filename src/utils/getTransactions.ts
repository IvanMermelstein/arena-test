import { Network, Alchemy, AssetTransfersCategory, SortingOrder } from 'alchemy-sdk';
import { Transactions } from '../interfaces/interfaces';

const getTransactions = async (address: string): Promise<Transactions | void> => {
  const settings = {
    apiKey: process.env.REACT_APP_API_KEY,
    network: Network.ETH_MAINNET,
  };

  const alchemy = new Alchemy(settings);

  try {
    const transactionsFrom = await alchemy.core.getAssetTransfers({
      fromAddress: address,
      category: [AssetTransfersCategory.ERC20],
      order: SortingOrder.DESCENDING,
      maxCount: 10
    });

    const transactionsTo = await alchemy.core.getAssetTransfers({
      toAddress: address,
      order: SortingOrder.DESCENDING,
      category: [AssetTransfersCategory.ERC20],
      maxCount: 10
    });

    return {
      transactionsFrom,
      transactionsTo
    } as Transactions;

  } catch (err) {
    console.log(err);
  }
};

export default getTransactions;
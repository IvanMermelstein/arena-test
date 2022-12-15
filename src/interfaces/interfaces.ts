import { AssetTransfersResponse } from 'alchemy-sdk/dist/src/types/types';

export interface Transfer {
  asset: string;
  blockNum: string;
  category: string;
  erc721TokenId: unknown;
  erc1155Metadata: unknown;
  from: string;
  hash: string;
  rawContract: {
    address: string;
    decimal: string;
    value: string;
  };
  to: string;
  tokenId: string;
  uniqueId: string;
  value: number
}

export interface Transaction {
  pageKey: string;
  transfers: Transfer[];
}

export interface Transactions {
  transactionsFrom: AssetTransfersResponse;
  transactionsTo: AssetTransfersResponse;
}
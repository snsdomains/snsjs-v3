import { ContractName, SupportedNetworkId } from './types';
export type ContractAddressFetch = (contractName: ContractName) => string;
export declare const getContractAddress: (networkId: SupportedNetworkId) => ContractAddressFetch;

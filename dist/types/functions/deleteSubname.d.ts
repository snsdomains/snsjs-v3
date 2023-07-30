import { ethers } from 'ethers';
import { SNSArgs } from '..';
type Args = {
    contract: 'registry' | 'nameWrapper';
};
export default function ({ contracts, signer }: SNSArgs<'contracts' | 'signer' | 'getExpiry'>, name: string, { contract }: Args): Promise<ethers.PopulatedTransaction>;
export {};

import { ethers } from 'ethers';
import { SNSArgs } from '..';
export default function ({ contracts, signer }: SNSArgs<'contracts' | 'signer'>, name: string, { newOwner, contract, reclaim, }: {
    newOwner: string;
    contract: 'registry' | 'nameWrapper' | 'baseRegistrar';
    reclaim?: boolean;
}): Promise<ethers.PopulatedTransaction>;

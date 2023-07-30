import { ethers } from 'ethers';
import { SNSArgs } from '..';
export default function ({ contracts, signer }: SNSArgs<'contracts' | 'signer'>, name: string, { newOwner, isOwner, }: {
    newOwner: string;
    isOwner: boolean;
}): Promise<ethers.PopulatedTransaction>;

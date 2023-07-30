import { SNSArgs } from '..';
export default function ({ contracts, signer }: SNSArgs<'contracts' | 'signer'>, name: string, { contract, resolver, }: {
    contract: 'registry' | 'nameWrapper';
    resolver?: string;
}): Promise<import("ethers").PopulatedTransaction>;

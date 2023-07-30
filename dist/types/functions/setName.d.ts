import { SNSArgs } from '..';
export default function ({ contracts, signer }: SNSArgs<'contracts' | 'signer'>, name: string, { address, resolver, }?: {
    address?: string;
    resolver?: string;
}): Promise<import("ethers").PopulatedTransaction>;

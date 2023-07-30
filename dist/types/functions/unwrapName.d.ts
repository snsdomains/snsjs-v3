import { SNSArgs } from '..';
export default function ({ contracts, signer }: SNSArgs<'contracts' | 'signer'>, name: string, { newController, newRegistrant, }: {
    newController: string;
    newRegistrant?: string;
}): Promise<import("ethers").PopulatedTransaction>;

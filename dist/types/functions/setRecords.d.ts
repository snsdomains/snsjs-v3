import { SNSArgs } from '..';
import { RecordOptions } from '../utils/recordHelpers';
export default function ({ contracts, provider, getResolver, signer, }: SNSArgs<'contracts' | 'provider' | 'getResolver' | 'signer'>, name: string, { records, resolverAddress, }: {
    records: RecordOptions;
    resolverAddress?: string;
}): Promise<import("ethers").PopulatedTransaction>;

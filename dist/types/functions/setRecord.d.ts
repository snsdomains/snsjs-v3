import { SNSArgs } from '..';
import { RecordInput } from '../utils/recordHelpers';
type BaseInput = {
    resolverAddress?: string;
};
type ContentHashInput = {
    record: RecordInput<'contentHash'>;
    type: 'contentHash';
};
type AddrOrTextInput = {
    record: RecordInput<'addr' | 'text'>;
    type: 'addr' | 'text';
};
export default function ({ contracts, provider, getResolver, signer, }: SNSArgs<'contracts' | 'provider' | 'getResolver' | 'signer'>, name: string, { record, type, resolverAddress, }: BaseInput & (ContentHashInput | AddrOrTextInput)): Promise<{
    to: string;
    data: string;
}>;
export {};

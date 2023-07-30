import { ethers } from 'ethers';
import { SNSArgs } from '..';
import { Expiry } from '../utils/wrapper';
type BaseArgs = {
    owner: string;
    resolverAddress?: string;
    contract: 'registry' | 'nameWrapper';
};
type NameWrapperArgs = {
    contract: 'nameWrapper';
    expiry?: Expiry;
} & BaseArgs;
type Args = BaseArgs | NameWrapperArgs;
export default function ({ contracts, signer, getExpiry, }: SNSArgs<'contracts' | 'signer' | 'getExpiry'>, name: string, { contract, owner, resolverAddress, ...wrapperArgs }: Args): Promise<ethers.PopulatedTransaction>;
export {};

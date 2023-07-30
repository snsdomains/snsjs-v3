import { ethers } from 'ethers';
import { SNSArgs } from '..';
import { FuseOptions } from '../utils/fuses';
import { Expiry } from '../utils/wrapper';
type BaseArgs = {
    owner: string;
    resolverAddress?: string;
    contract: 'registry' | 'nameWrapper';
};
type NameWrapperArgs = {
    contract: 'nameWrapper';
    fuses?: FuseOptions;
    expiry?: Expiry;
} & BaseArgs;
type Args = BaseArgs | NameWrapperArgs;
export default function ({ contracts, signer, getExpiry, }: SNSArgs<'contracts' | 'signer' | 'getExpiry'>, name: string, { owner, resolverAddress, contract, ...wrapperArgs }: Args): Promise<ethers.PopulatedTransaction>;
export {};

import { BigNumber } from 'ethers';
import { SNSArgs } from '..';
import { BaseRegistrationParams } from '../utils/registerHelpers';
type Params = BaseRegistrationParams & {
    value: BigNumber;
};
export default function ({ contracts }: SNSArgs<'contracts'>, name: string, { resolverAddress, value, ...params }: Params): Promise<import("ethers").PopulatedTransaction>;
export {};

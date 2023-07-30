import { BigNumber, BigNumberish } from 'ethers';
import { SNSArgs } from '..';
import { FuseProps } from '../utils/fuses';
type BaseProps = {
    duration: number;
    value: BigNumber;
};
export declare function renewNameWithData({ contracts }: SNSArgs<'contracts'>, name: string, { duration, value, fuses, wrapperExpiry, }: BaseProps & {
    fuses?: FuseProps;
    wrapperExpiry?: BigNumberish;
}): Promise<import("ethers").PopulatedTransaction>;
export default function ({ contracts }: SNSArgs<'contracts'>, nameOrNames: string | string[], { duration, value }: BaseProps): Promise<import("ethers").PopulatedTransaction>;
export {};

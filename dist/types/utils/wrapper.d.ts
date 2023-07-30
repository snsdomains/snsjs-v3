import { BigNumber } from 'ethers';
import { SNSArgs } from '../index';
export type Expiry = string | number | Date | BigNumber;
export declare const MAX_EXPIRY: BigNumber;
export declare const makeExpiry: ({ getExpiry }: SNSArgs<'getExpiry'>, name: string, expiry?: Expiry) => Promise<BigNumber>;
export declare const wrappedLabelLengthCheck: (label: string) => void;

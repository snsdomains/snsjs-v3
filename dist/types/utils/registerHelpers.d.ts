import { BigNumberish } from 'ethers';
import type { PublicResolver } from '../generated';
import { FuseOptions } from './fuses';
import { RecordOptions } from './recordHelpers';
export declare const MAX_INT_64: bigint;
export type BaseRegistrationParams = {
    owner: string;
    duration: number;
    secret: string;
    resolverAddress?: string;
    records?: RecordOptions;
    reverseRecord?: boolean;
    fuses?: FuseOptions;
    wrapperExpiry?: BigNumberish;
};
export type RegistrationParams = Omit<BaseRegistrationParams, 'resolverAddress'> & {
    name: string;
    resolver: PublicResolver;
};
export type CommitmentParams = Omit<RegistrationParams, 'secret' | 'wrapperExpiry'> & {
    secret?: string;
    wrapperExpiry?: BigNumberish;
};
export type RegistrationTuple = [
    name: string,
    owner: string,
    duration: number,
    secret: string,
    resolver: string,
    data: string[],
    reverseRecord: boolean,
    fuses: string,
    wrapperExpiry: BigNumberish
];
export type CommitmentTuple = [
    labelhash: string,
    owner: string,
    duration: number,
    resolver: string,
    data: string[],
    secret: string,
    reverseRecord: boolean,
    fuses: string,
    wrapperExpiry: BigNumberish
];
export declare const randomSecret: () => string;
export declare const makeCommitmentData: ({ name, owner, duration, resolver, records, reverseRecord, fuses, wrapperExpiry, secret, }: Omit<RegistrationParams, "secret" | "wrapperExpiry"> & {
    secret?: string | undefined;
    wrapperExpiry?: BigNumberish | undefined;
} & {
    secret: string;
}) => CommitmentTuple;
export declare const makeRegistrationData: (params: RegistrationParams) => RegistrationTuple;
export declare const _makeCommitment: (params: CommitmentTuple) => string;
export declare const makeCommitment: ({ secret, ...inputParams }: CommitmentParams) => {
    secret: string;
    commitment: string;
    wrapperExpiry: BigNumberish;
};

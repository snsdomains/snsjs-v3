import { BigNumber } from 'ethers';
import { SNSArgs } from '..';
declare const _default: {
    raw: ({ contracts, multicallWrapper }: SNSArgs<"contracts" | "multicallWrapper">, nameOrNames: string | string[], duration: number, legacy?: boolean | undefined) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts, multicallWrapper }: SNSArgs<"contracts" | "multicallWrapper">, data: string, _nameOrNames: string | string[], _duration: number, legacy?: boolean | undefined) => Promise<{
        base: BigNumber;
        premium: BigNumber;
    } | undefined>;
};
export default _default;

import { BigNumber } from 'ethers';
import { SNSArgs } from '../index';
declare const _default: {
    raw: ({ contracts }: SNSArgs<"contracts">, name: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: SNSArgs<"contracts">, data: string) => Promise<{
        fuseObj: import("../utils/fuses").CurrentFuses;
        expiryDate: Date;
        rawFuses: BigNumber;
        owner: any;
    } | undefined>;
};
export default _default;

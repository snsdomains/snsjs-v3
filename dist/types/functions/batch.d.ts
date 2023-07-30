import { BatchFunctionResult, SNSArgs, RawFunction } from '..';
declare const _default: {
    raw: ({ multicallWrapper }: SNSArgs<"multicallWrapper">, ...items: BatchFunctionResult<RawFunction>[]) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ multicallWrapper }: SNSArgs<"multicallWrapper">, data: string, ...items: BatchFunctionResult<RawFunction>[]) => Promise<any[] | undefined>;
};
export default _default;

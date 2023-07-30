import { SNSArgs } from '..';
declare const _default: {
    raw: ({ contracts }: SNSArgs<"contracts">, name: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: SNSArgs<"contracts">, data: string) => Promise<boolean | undefined>;
};
export default _default;

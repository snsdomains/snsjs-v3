import { SNSArgs } from '..';
declare const _default: {
    raw: ({ contracts }: SNSArgs<"contracts">, name: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: SNSArgs<"contracts">, data: string) => Promise<any>;
};
export default _default;

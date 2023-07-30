import { SNSArgs } from '..';
declare const _default: {
    raw: ({ contracts }: SNSArgs<"contracts">, address: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: SNSArgs<"contracts">, data: string, address: string) => Promise<{
        name: any;
        match: boolean;
        reverseResolverAddress: any;
        resolverAddress: any;
    } | {
        name: undefined;
        match?: undefined;
        reverseResolverAddress?: undefined;
        resolverAddress?: undefined;
    } | undefined>;
};
export default _default;

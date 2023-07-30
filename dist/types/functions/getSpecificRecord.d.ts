import { SNSArgs } from '..';
export declare const _getContentHash: {
    raw: ({ contracts }: SNSArgs<'contracts'>, name: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: SNSArgs<'contracts'>, data: string) => Promise<{
        protocolType?: undefined;
        decoded?: undefined;
        error?: undefined;
    } | {
        protocolType: null;
        decoded: any;
        error?: undefined;
    } | {
        protocolType: string | undefined;
        decoded: any;
        error: any;
    } | undefined>;
};
export declare const getContentHash: {
    raw: ({ contracts, universalWrapper }: SNSArgs<'contracts' | 'universalWrapper'>, name: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts, universalWrapper }: SNSArgs<'contracts' | 'universalWrapper'>, data: string) => Promise<{
        protocolType?: undefined;
        decoded?: undefined;
        error?: undefined;
    } | {
        protocolType: null;
        decoded: any;
        error?: undefined;
    } | {
        protocolType: string | undefined;
        decoded: any;
        error: any;
    } | undefined>;
};
export declare const _getText: {
    raw: ({ contracts }: SNSArgs<'contracts'>, name: string, key: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: SNSArgs<'contracts'>, data: string) => Promise<string | undefined>;
};
export declare const getText: {
    raw: ({ contracts, universalWrapper }: SNSArgs<'contracts' | 'universalWrapper'>, name: string, key: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts, universalWrapper }: SNSArgs<'contracts' | 'universalWrapper'>, data: string) => Promise<string | undefined>;
};
export declare const _getAddr: {
    raw: ({ contracts }: SNSArgs<'contracts'>, name: string, coinType?: string | number, bypassFormat?: boolean) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: SNSArgs<'contracts'>, data: string, _name: string, coinType?: string | number) => Promise<any>;
};
export declare const getAddr: {
    raw: ({ contracts, universalWrapper }: SNSArgs<'contracts' | 'universalWrapper'>, name: string, coinType?: string | number) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts, universalWrapper }: SNSArgs<'contracts' | 'universalWrapper'>, data: string, _name: string, coinType?: string | number) => Promise<any>;
};

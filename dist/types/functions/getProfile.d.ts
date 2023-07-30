import { SNSArgs } from '..';
import { DecodedContentHash } from '../utils/contentHash';
type FallbackRecords = {
    contentHash?: boolean;
    texts?: string[];
    coinTypes?: string[];
};
type DataItem = {
    key: string | number;
    type: 'addr' | 'text' | 'contentHash';
    coin?: string;
    value: string;
};
type ResolvedProfile = {
    isMigrated: boolean | null;
    createdAt: string | null;
    address?: string;
    name?: string | null;
    match?: boolean;
    message?: string;
    records?: {
        contentHash?: DecodedContentHash | string | null;
        texts?: DataItem[];
        coinTypes?: DataItem[];
    };
    resolverAddress?: string;
    isInvalidResolverAddress?: boolean;
    reverseResolverAddress?: string;
};
type ProfileOptions = {
    contentHash?: boolean;
    texts?: boolean | string[];
    coinTypes?: boolean | string[];
};
type InputProfileOptions = ProfileOptions & {
    resolverAddress?: string;
    fallback?: FallbackRecords;
};
export default function ({ contracts, gqlInstance, getName, _getAddr, _getContentHash, _getText, resolverMulticallWrapper, multicallWrapper, }: SNSArgs<'contracts' | 'gqlInstance' | 'getName' | '_getText' | '_getAddr' | '_getContentHash' | 'resolverMulticallWrapper' | 'multicallWrapper'>, nameOrAddress: string, options?: InputProfileOptions): Promise<ResolvedProfile | undefined>;
export {};

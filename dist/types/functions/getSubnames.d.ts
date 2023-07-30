import { SNSArgs } from '..';
type Subname = {
    id: string;
    labelName: string | null;
    truncatedName?: string;
    labelhash: string;
    isMigrated: boolean;
    name: string;
    owner: {
        id: string;
    };
};
type Params = {
    name: string;
    page?: number;
    pageSize?: number;
    orderDirection?: 'asc' | 'desc';
    orderBy?: 'createdAt' | 'labelName';
    lastSubnames?: Array<any>;
    search?: string;
};
declare const getSubnames: (injected: SNSArgs<'gqlInstance'>, functionArgs: Params) => Promise<{
    subnames: Subname[];
    subnameCount: number;
}>;
export default getSubnames;

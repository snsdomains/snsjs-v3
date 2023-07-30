import { SNSArgs } from '..';
type ContractOption = 'registrar' | 'nameWrapper';
type Args = {
    contract?: ContractOption;
};
declare const _default: {
    raw: (snsArgs: SNSArgs<"contracts" | "multicallWrapper">, name: string, { contract }?: Args) => Promise<{
        to: string;
        data: string;
    }>;
    decode: (snsArgs: SNSArgs<"contracts" | "multicallWrapper">, data: string, name: string, { contract }?: Args) => Promise<{
        expiry: Date;
        gracePeriod: null;
    } | {
        expiry: Date | null;
        gracePeriod: number;
    } | undefined>;
};
export default _default;

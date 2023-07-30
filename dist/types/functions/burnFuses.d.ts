import { SNSArgs } from '..';
import { FuseProps } from '../utils/fuses';
export default function ({ contracts, signer }: SNSArgs<'contracts' | 'signer'>, name: string, props: FuseProps): Promise<import("ethers").PopulatedTransaction>;

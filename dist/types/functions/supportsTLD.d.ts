import { SNSArgs } from '..';
export default function ({ getOwner, provider }: SNSArgs<'getOwner' | 'provider'>, name: string): Promise<boolean>;

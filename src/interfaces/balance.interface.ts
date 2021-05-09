export interface BalanceInterface {
  network: string;
  balance: string;
  contract: string;
  token_id: number;
  creators?: string[];
  decimals?: number;
  description?: string;
  display_uri?: string;
  external_uri?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formats?: any[];
  is_boolean_amount?: boolean;
  is_transferable?: boolean;
  level?: number;
  name?: string;
  should_prefer_symbol?: boolean;
  symbol?: string;
  tags?: string[];
  thumbnail_uri?: string;
  artifact_uri?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  token_info?: any;
  volume_24_hours?: number;
}
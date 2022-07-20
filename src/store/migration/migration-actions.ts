import { createAction } from '@reduxjs/toolkit';

import { TokensMetadataState } from '../tokens-metadata/tokens-metadata-state';

export const migrateTokensMetadata = createAction('migration/TOKENS_METADATA');
export const deleteOldTokensMetadata = createAction('migration/DELETE_OLD_TOKENS_METADATA');
export const setNewTokensMetadata = createAction<TokensMetadataState['metadataRecord']>(
  'migration/ADD_NEW_TOKENS_METADATA'
);

export const migrateTokenSuggestion = createAction('migration/TOKEN_SUGGESTION');
export const deleteOldTokenSuggestion = createAction('migration/DELETE_OLD_TOKEN_SUGGESTION');

export const migrateIsShownDomainName = createAction('migration/IS_SHOW_DOMAIN_NAME');
export const deleteOldIsShownDomainName = createAction('migration/DELETE_OLD_IS_SHOW_DOMAIN_NAME');

export const migrateQuipuApy = createAction('migration/QUIPU_APY');
export const deleteOldQuipuApy = createAction('migration/DELETE_OLD_QUIPU_APY');

export const migrateAccountsState = createAction('migration/ACCOUNTS_STATE');
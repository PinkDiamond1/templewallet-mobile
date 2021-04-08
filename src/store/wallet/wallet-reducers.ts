import { createReducer } from '@reduxjs/toolkit';
import { walletInitialState, WalletState } from './wallet-state';
import { createWalletActions, importWalletActions } from './wallet-actions';

export const walletsReducer = createReducer<WalletState>(walletInitialState, builder => {
  builder.addCase(importWalletActions.success, (state, { payload }) => ({ ...state, hdAccounts: [payload] }));

  builder.addCase(createWalletActions.success, (state, { payload }) => ({ ...state, hdAccounts: [payload] }));
});
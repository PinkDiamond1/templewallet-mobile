import { createReducer } from '@reduxjs/toolkit';

import { createEntity } from '../create-entity';
import { loadExchangeRates, loadTezosExchangeRate } from './currency-actions';
import { currencyInitialState, ExchangeRatesState } from './currency-state';

export const currencyReducers = createReducer<ExchangeRatesState>(currencyInitialState, builder => {
  builder.addCase(loadExchangeRates.submit, state => ({
    ...state,
    tokensExchangeRates: createEntity(state.tokensExchangeRates.data, true)
  }));
  builder.addCase(loadExchangeRates.success, (state, { payload }) => ({
    ...state,
    tokensExchangeRates: createEntity(payload)
  }));
  builder.addCase(loadExchangeRates.fail, (state, { payload }) => ({
    ...state,
    tokensExchangeRates: createEntity(state.tokensExchangeRates.data, false, payload)
  }));
  builder.addCase(loadTezosExchangeRate.submit, state => ({
    ...state,
    tezosExchangeRate: createEntity(state.tezosExchangeRate.data, true)
  }));
  builder.addCase(loadTezosExchangeRate.success, (state, { payload }) => ({
    ...state,
    tezosExchangeRate: createEntity(payload)
  }));
  builder.addCase(loadTezosExchangeRate.fail, (state, { payload }) => ({
    ...state,
    tezosExchangeRate: createEntity(state.tezosExchangeRate.data, false, payload)
  }));
});

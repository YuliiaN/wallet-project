import { createSlice } from '@reduxjs/toolkit';

import {
  fetchTransactions,
  addTransaction,
  deleteTransaction,
  editTransaction,
  getTransactionCategories,
  getTransactionSummary,
} from './trans-operations';

import {
  loginRequest,
  logOutRequest,
  getUserInfoRequest,
} from 'redux/auth/auth-operations';

const initialState = {
  transactions: [],
  categories: [],
  summary: null,
  balance: 0,
  editTransaction: null,
};

const transactionsSlice = createSlice({
  name: 'transition',
  initialState,
  reducers: {
    setEditTransaction(state, { payload }) {
      state.editContact = payload;
    },
  },
  extraReducers: builder => {
    builder
      // -------- fetchTransactions ---------
      .addCase(fetchTransactions.fulfilled, (state, { payload }) => {
        state.transactions = payload.transaction;
      })

      // ------- addTransaction -------
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.transactions = [...state.transactions, payload.transaction];
      })

      // -------- deleteTransaction --------
      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        state.transactions = state.transactions.map(t => t.id !== payload);
      })

      // --- editTransaction ---
      .addCase(editTransaction.fulfilled, (state, { payload }) => {
        state.transactions = state.transactions.map(t =>
          t.id === payload.id ? payload : t
        );
      })

      // --- getTransactionCategories ---
      .addCase(getTransactionCategories.fulfilled, (state, { payload }) => {
        state.categories = payload;
      })

      // --- getTransactionSummary ---
      .addCase(getTransactionSummary.fulfilled, (state, { payload }) => {
        state.summary = payload;
      })
      // --- logOutRequest ---
      .addCase(logOutRequest.fulfilled, () => ({ ...initialState }))
      // --- loginRequest ---
      .addCase(loginRequest.fulfilled, (state, { payload }) => {
        state.balance = payload.balance;
      })
      // --- getUserInfoRequest ---
      .addCase(getUserInfoRequest.fulfilled, (state, { payload }) => {
        state.balance = payload.balance;
      });
  },
});
export const { setEditTransaction } = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;

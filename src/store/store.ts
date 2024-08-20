import { configureStore } from '@reduxjs/toolkit';
import { useSelector as useSelectorApp } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { REDUCERS_NAMES } from '../constants/store.constant';
import { formReducer } from './slices/form.slice';

export const store = configureStore({
  reducer: {
    [REDUCERS_NAMES.FORM]: formReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const useSelector: TypedUseSelectorHook<RootState> = useSelectorApp;

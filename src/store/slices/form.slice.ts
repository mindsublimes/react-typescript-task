import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { REDUCERS_NAMES } from '../../constants/store.constant';

const initialState = {
  option: '',
  notes: '',
};

type FormStateKey = keyof typeof initialState;

// keeping the name generic as for now we don't have a specific name for app elements
export const formSlice = createSlice({
  name: REDUCERS_NAMES.FORM,
  initialState,
  reducers: {
    updateValue: (
      state,
      action: PayloadAction<{ field: FormStateKey; value: string }>
    ) => {
      state[action.payload.field] = action.payload.value;
    },

    resetForm: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const { updateValue, resetForm } = formSlice.actions;
export const formReducer = formSlice.reducer;

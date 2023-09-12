import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputValue: '', 
};

const inputSlice = createSlice({
  name: 'Input',
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      return {
        ...state,
        inputValue: action.payload,
      };
    },
  },
});

export const { setInputValue } = inputSlice.actions;
export default inputSlice.reducer;

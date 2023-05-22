import { createSlice } from '@reduxjs/toolkit';

const togglerSlice = createSlice({
  name: 'toggler',
  initialState: false,
  reducers: {
    toggleLoad: (state, action) => (state = action.payload),
  },
});

export const { toggleLoad } = togglerSlice.actions;

export default togglerSlice.reducer;

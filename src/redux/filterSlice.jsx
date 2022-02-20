import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilter } = filterSlice.actions;

// const myFilter = createReducer(initialStateFilter, {
//   [setFilter]: (state, action) => {
//     return (state = action.payload);
//   },
// });

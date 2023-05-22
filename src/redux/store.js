import { configureStore } from '@reduxjs/toolkit';
import toggler from './toggler/toggler';

const store = configureStore({
  reducer: {
    toggler,
  },
});
export default store;

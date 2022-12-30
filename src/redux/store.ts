import { configureStore } from '@reduxjs/toolkit';
import tasks from './tasksSlice';
export const store = configureStore({
  reducer: {
    tasks,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

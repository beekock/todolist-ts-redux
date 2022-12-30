import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export type Task = {
  task: string;
  deadLine: number;
  id: number;
  done: boolean;
};
const initialState: Task[] = [];

export const TasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTodoList(state, action: PayloadAction<Task[]>) {
      return state.concat(action.payload);
    },
    removeTask(state, action: PayloadAction<number>) {
      return state.filter((state) => state.id !== action.payload);
    },
    setDone(state, action: PayloadAction<number>) {
      state.map((obj) => {
        if (obj.id === action.payload) {
          obj.done = !obj.done;
        }
      });
    },
  },
});
export const { setTodoList, removeTask, setDone } = TasksSlice.actions;
export default TasksSlice.reducer;

import { configureStore, createSlice } from '@reduxjs/toolkit';

const initial_Data = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Learn Web Devolepment' },
    'task-2': { id: 'task-2', content: 'Make Protofolio, side projects' },
    'task-3': { id: 'task-3', content: 'Update CV, LinkedIn' },
    'task-4': { id: 'task-4', content: 'Get a Job' },
  },
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'Hell Do It!',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'list-2': { id: 'list-2', title: 'Yeah Did It!', taskIds: [] },
  },
  listsOrder: ['list-1', 'list-2'],
};

const listsSlice = createSlice({
  name: 'list',
  initialState: initial_Data.lists,
  reducers: {
    updateTasksOrder(state, action) {
      const [item] = state[action.payload.sourceList].taskIds.splice(
        action.payload.sourceIndex,
        1
      );

      state[action.payload.destinationList].taskIds.splice(
        action.payload.destinationIndex,
        0,
        item
      );
    },
  },
});

const tasksSlice = createSlice({
  name: 'task',
  initialState: initial_Data.tasks,
  reducers: {},
});

const listsOrderSlice = createSlice({
  name: 'listsOrder',
  initialState: initial_Data.listsOrder,
  reducers: {},
});

const store = configureStore({
  reducer: {
    lists: listsSlice.reducer,
    tasks: tasksSlice.reducer,
    listsOrder: listsOrderSlice.reducer,
  },
});

export const listActions = listsSlice.actions;
export default store;

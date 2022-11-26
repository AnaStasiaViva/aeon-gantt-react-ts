import { createSlice } from '@reduxjs/toolkit';
import { Task } from 'gantt-task-react';

export interface GanttState {
  ganttTasks: Task[];
  period: string,
  project: string,
}

const initialState: GanttState = {
  ganttTasks: [],
  period: '',
  project: '',
};

export const { actions: ganttActions, reducer: ganttReducer } = createSlice({
  name: "gantt",
  initialState,
  reducers: {
    getGanttTasks(state: GanttState, { payload }) {
      if (!payload) return state;
      state.ganttTasks = payload.chart;
      state.period = payload.period;
      state.project = payload.project;
    },
  },
});

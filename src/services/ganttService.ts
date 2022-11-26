import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GanttTask } from 'types';
import { collectData } from 'utils/gantt';

const baseUrl = process.env.REACT_APP_GANTT_BASE_URL;

export interface Gantt {
  chart: GanttTask[],
  project: string,
  period: string
}

export const ganttApi = createApi({
  reducerPath: 'ganttApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (build) => ({
    getGantt: build.query<Gantt, void>({
      transformResponse: (res: Gantt): Gantt | any => {
        if (!res) return;
        const chart = collectData([res.chart], 1);
        return {
          chart,
          project: res.project,
          period: res.period
        };
      },
      query: () => {
        return {
          url: `/tmp/test.php`,
        };
      },
    }),

    getGanttTask: build.query<unknown, void>({
      query: taskId => `/gantt/${taskId}`
    }),

    addNewGanttTask: build.mutation({
      query: ({ task, parentId }) => ({
        url: '/gantt',
        method: 'POST',
        body: { task, parentId }
      })
    }),

    editGanttTask: build.mutation({
      query: task => ({
        url: `/gantt/${task.id}`,
        method: 'PATCH',
        body: task
      })
    }),

    deleteGanttTask: build.mutation({
      query: taskId => ({
        url: `/gantt/${taskId}`,
        method: 'DELETE',
      })
    }),

  }),
});


export const {
  useGetGanttQuery,
  useGetGanttTaskQuery,
  useAddNewGanttTaskMutation,
  useEditGanttTaskMutation,
  useDeleteGanttTaskMutation
} = ganttApi;
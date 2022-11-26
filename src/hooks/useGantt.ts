import { useEffect } from "react";
import { useAppDispatch } from "./redux";
import { Gantt, useGetGanttQuery } from "services";
import { ganttActions } from "redux/slices";
import { useCallback } from "react";

export const useGantt = () => {

  const dispatch = useAppDispatch();
  const { data, isError } = useGetGanttQuery();

  const onFetchData = useCallback((data: Gantt) => {
    if (!data || isError) return;
    dispatch(ganttActions.getGanttTasks({
      chart: data.chart,
      project: data.project,
      period: data.period
    }))
  },[data])


  useEffect(() => {
    if (data) {
      onFetchData(data);
    }
  }, [data])
};

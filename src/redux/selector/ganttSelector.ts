
import { GanttState } from "redux/slices";
import { RootState } from "redux/store";

export const getGanttData = (state: RootState): GanttState => state.gantt;

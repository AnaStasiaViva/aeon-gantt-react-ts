
export interface INestedGanttColors{
  1: 'blue';
  2: 'yellow';
  3: 'green';
  4: 'green';
  5: 'yellow'
}

export interface GanttTask {
  start: Date,
  end: Date,
  name: string,
  id: number | string,
  type: string,
  progress: number,
  isDisabled?: boolean,
  dependencies?: string[],
  styles?: {
    backgroundColor?: string | undefined;
    backgroundSelectedColor?: string | undefined;
    progressColor?: string | undefined;
    progressSelectedColor?: string | undefined;
  } | undefined
  isNestedCount?: number,
  parent?: string | number,
  nestingLvl?: number
}
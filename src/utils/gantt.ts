import { GanttTask } from "types";

const ganttStyle = {
  1: { progressColor: '#E2EBFF', progressSelectedColor: '#E2EBFF' },
  2: { progressColor: '#FFF2E0', progressSelectedColor: '#FFF2E0' },
  3: { progressColor: '#CFF0D6', progressSelectedColor: '#CFF0D6' },
  4: { progressColor: '#CFF0D6', progressSelectedColor: '#CFF0D6' },
  5: { progressColor: '#FFF2E0', progressSelectedColor: '#FFF2E0' },
}

type GanttStyleKey = keyof typeof ganttStyle;

export const collectData = (data: any[], nestingLvl: GanttStyleKey = 1, parent = '') => {
  const res: GanttTask[] = [];

  for (let i = 0; i < data.length; i++) {
    const current = data[i];

    const { id, title, period_end, period_start } = current;
    const styles = ganttStyle[nestingLvl];

    const dependencies = nestingLvl === 1 ? [''] : [parent];
    const isNestedCount = 'sub' in current ? current.sub.length : 0;

    res.push({
      start: new Date(period_start),
      end: new Date(period_end),
      name: title,
      id: `${ id }`,
      type: 'task',
      progress: 45,
      isDisabled: false,
      dependencies,
      styles,
      isNestedCount,
      parent: parent ? `${ parent }` : parent,
      nestingLvl
    })

    if (current.sub?.length) {
      ++nestingLvl;
      res.push(...collectData(current.sub, nestingLvl as GanttStyleKey, id));
    }
  }

  return res;
}


export function getStartEndDateForProject(tasks: GanttTask[], projectId: string | number) {

  const projectTasks = tasks.filter((t: GanttTask) => t.id === projectId);

  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
}

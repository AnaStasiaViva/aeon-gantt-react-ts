import { useMemo, useState } from 'react';
import { Gantt, Task, ViewMode } from 'gantt-task-react';
import { ViewSwitcher } from './ViewSwitcher';
import { SkeletonBox } from './SkeletonGantt';
import { Header } from 'layout/mainLayout/Header';
import { Button, Export, HeadDate } from 'components';
import { useGantt } from 'hooks/useGantt';
import { useAppSelector } from 'hooks/redux';
import { useDeleteGanttTaskMutation, useEditGanttTaskMutation } from 'services';
import { getStartEndDateForProject } from 'utils/gantt';
import { getGanttData } from 'redux/selector/ganttSelector';
import 'gantt-task-react/dist/index.css';
import styles from './styles.module.scss';

function getWidth(view: ViewMode) {
  switch (view) {
    case ViewMode.Month: return 300;
    case ViewMode.Week: return 250;
    default: return 50;
  }
}

export function GanttLib() {
  useGantt();
  const [view, setView] = useState<ViewMode>(ViewMode.Day);
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const { ganttTasks, period, project } = useAppSelector(getGanttData);

  const [editTask] = useEditGanttTaskMutation();
  const [deleteTask] = useDeleteGanttTaskMutation();

  const getChangedData = (task: Task, tasks: Task[]): Task | void => {
    if (task.id) {
      const [start, end] = getStartEndDateForProject(tasks, task.id);
      const project = tasks[tasks.findIndex((t: Task) => t.id === task.id)];
      if (+project.start !== +start || +project.end !== +end) {
        return { ...project, start, end };
      }
    }
    return;
  }

  const handleTaskChange = async (task: Task) => {
    if (!task || !ganttTasks) return;
    let newTasks = ganttTasks.map((t: Task) => (t.id === task.id ? task : t));
    const changedTask = getChangedData(task, newTasks);
    if (changedTask) await editTask(changedTask)
  };

  const handleTaskDelete = async (task: Task) => {
    if (!task) return;
    await deleteTask(task.id)
  };

  const handleProgressChange = async (task: Task) => {
    await handleTaskChange(task)
  };

  const handleDblClick = (task: Task) => {
    alert('On Double Click event Id:' + task.id);
  };

  const handleSelect = (task: Task, isSelected: boolean) => {
    console.log(task.name + ' has ' + (isSelected ? 'selected' : 'unselected'));
  };

  const handleButtonClick = (): void => {
    console.log('handle btn action');
  };

  const columnWidth = getWidth(view);
  const tasks = useMemo(() => ganttTasks
    ? [...ganttTasks]
    : [],
  [ganttTasks]);

  if (!tasks.length) {
    return <SkeletonBox />
  };

  return (
    <div>
      <Header>
        <HeadDate
          date={period}
          project={project}
        />
        <Button
          className={styles.btn_export}
          startIcon={<Export />}
          onClick={handleButtonClick}
        >
          <span>Export</span>
        </Button>
      </Header>

      {tasks ? (
        <>
          <ViewSwitcher
            onViewModeChange={(viewMode: ViewMode) => setView(viewMode)}
            onViewListChange={setIsChecked}
            isChecked={isChecked}
          />
            <Gantt
              tasks={tasks}
              viewMode={view}
              onDateChange={handleTaskChange}
              onDelete={handleTaskDelete}
              onProgressChange={handleProgressChange}
              onDoubleClick={handleDblClick}
              onSelect={handleSelect}
              listCellWidth={isChecked ? '205px' : ''}
              columnWidth={columnWidth}
              barBackgroundColor="lightgrey"
              rowHeight={50}
              fontSize={'12'}
              preStepsCount={1}
            />
        </>
        )
        : <div>No tasks yet</div>}
    </div>
  )
}

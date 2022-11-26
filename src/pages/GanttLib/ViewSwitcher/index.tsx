import { ViewMode } from "gantt-task-react";
import { Button } from "components";
import { Checkbox } from "components/Checkbox";
import styles from './styles.module.scss';
import "gantt-task-react/dist/index.css";

interface IProps{
  onViewModeChange:(viewMode: ViewMode) =>  void,
  onViewListChange:(isChecked: boolean) => void,
  isChecked: boolean
}

export const ViewSwitcher = ({
  onViewModeChange,
  onViewListChange,
  isChecked
}: IProps) => {

  return (
    <div className={styles.view_container}>
      <Button
        className={styles.button}
        onClick={() => onViewModeChange(ViewMode.Day)}
      >
        Day
      </Button>
      <Button
        className={styles.button}
        onClick={() => onViewModeChange(ViewMode.Week)}
      >
        Week
      </Button>
      <Button
        className={styles.button}
        onClick={() => onViewModeChange(ViewMode.Month)}
      >
        Month
      </Button>

      <div className={styles.switch}>
        <label className={styles.switch_toggle}>
          <Checkbox
            type="checkbox"
            defaultChecked={isChecked}
            className={styles.input}
            onClick={() => onViewListChange(!isChecked)}
          />
          <span className={styles.slider} />
        </label>
        Show Task List
      </div>
    </div>
  );
};
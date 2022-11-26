import styles from './styles.module.scss';

interface IProps{
  date: string;
  project: string
}

export function HeadDate({ date, project}: IProps) {
  return (
    <div className={ styles.head_date}>
      <span>{ project }</span>
      <span>{ date }</span>
    </div>
  )
}

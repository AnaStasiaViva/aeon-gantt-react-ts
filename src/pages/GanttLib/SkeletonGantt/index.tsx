import Skeleton from 'react-loading-skeleton';
import styles from './styles.module.scss';
import 'react-loading-skeleton/dist/skeleton.css';

export function SkeletonBox() {
  return (
    <div className={ styles.gantt_skeleton}>
      <div className={styles.skeleton_nav}>
        <Skeleton className={styles.skeleton_sm} />
        <Skeleton className={styles.skeleton_sm} />
        <Skeleton className={styles.skeleton_sm} />
        <Skeleton className={ styles.skeleton_sm} />
      </div>
      <div >
        <Skeleton className={styles.skeleton_table} />
        <Skeleton className={styles.skeleton_table} />
        <Skeleton className={styles.skeleton_table} />
        <Skeleton className={styles.skeleton_table} />
        <Skeleton className={styles.skeleton_table} />
        <Skeleton className={styles.skeleton_table} />
        <Skeleton className={ styles.skeleton_table} />
      </div>

    </div>
  )
};
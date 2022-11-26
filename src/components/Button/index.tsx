import { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';
import { Spinner } from 'components/Icons';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  startIcon?: any;
}

export function Button({
  children,
  startIcon,
  loading = false,
  onClick,
  className,
  ...restProps
}: IProps) {

  return (
    <button
      className={cn(styles.button, className)}
      onClick={loading ? undefined : onClick}
       {...restProps}
    >
      {startIcon}
      {children}
    {loading && (
      <span className={styles.button__loading}>
        <Spinner
          className={styles.button__spinner}
          alt='spinner'
        />
      </span>
    )}
  </button>
  )
}

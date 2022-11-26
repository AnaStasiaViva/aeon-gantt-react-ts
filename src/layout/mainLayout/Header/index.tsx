import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';

interface IProps extends PropsWithChildren {
  className?: string
}

export function Header({ children, className }: IProps) {
  return (
    <header className={cn(styles.header_container, className)}>
      {children}
    </header>
  )
}

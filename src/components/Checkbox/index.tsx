import { InputHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onClick?: () => void;
  className?: any
}

export function Checkbox({ className, ...props}: InputProps) {
  return (
    <input
      className={ cn(styles.input, className) }
      {...props }
    />
  )
}

import React, { FC, ButtonHTMLAttributes } from 'react';
import css from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'secondary' | 'icon' | 'icon-sx';
  className?: string;
  children?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({
  className,
  variant = 'default',
  children,
  type = 'button',
}) => {
  const classNames = `${css.btn} ${css[variant]} ${className || ''}`;
  return (
    <button type={type} className={classNames}>
      {/* {label && <span className={css.btnLabel}>{label}</span>} */}
      {children}
    </button>
  );
};

export default Button;

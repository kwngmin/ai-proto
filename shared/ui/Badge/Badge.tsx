import { type HTMLAttributes, type ReactNode, forwardRef } from 'react';
import { cn } from '@/shared/lib/utils';

type BadgeVariant =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';
type BadgeSize = 'small' | 'medium' | 'large';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: ReactNode;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-bg-tertiary text-text-primary border border-border-primary',
  primary: 'bg-accent-tint text-accent-hover border border-accent-default',
  success: 'bg-green/10 text-green border border-green/20',
  warning: 'bg-yellow/10 text-yellow border border-yellow/20',
  danger: 'bg-red/10 text-red border border-red/20',
  info: 'bg-blue/10 text-blue border border-blue/20',
};

const sizeClasses: Record<BadgeSize, string> = {
  small: 'px-2 py-0.5 text-[0.6875rem] rounded-[4px]',
  medium: 'px-2.5 py-1 text-[0.75rem] rounded-[6px]',
  large: 'px-3 py-1.5 text-[0.8125rem] rounded-[6px]',
};

/**
 * 뱃지 컴포넌트
 * @param variant - 뱃지 스타일 변형
 * @param size - 뱃지 크기
 * @param className - 추가 CSS 클래스
 * @param children - 자식 요소
 * @returns 스타일이 적용된 뱃지 요소
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', size = 'medium', className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center',
          'font-[510] tracking-[-0.01em]',
          'whitespace-nowrap',
          'transition-colors duration-[var(--transition-quick)]',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';


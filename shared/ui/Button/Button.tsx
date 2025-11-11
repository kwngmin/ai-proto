'use client';

import { type ButtonHTMLAttributes, type ReactNode, forwardRef } from 'react';
import { cn } from '@/shared/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-brand text-brand-text hover:bg-accent-hover active:bg-accent-default transition-colors',
  secondary:
    'bg-bg-secondary text-text-primary hover:bg-bg-tertiary border border-border-primary transition-colors',
  ghost:
    'bg-transparent text-text-primary hover:bg-bg-translucent transition-colors',
  danger:
    'bg-red text-ui-white hover:opacity-90 active:opacity-80 transition-opacity',
};

const sizeClasses: Record<ButtonSize, string> = {
  small: 'px-3 py-1.5 text-[0.8125rem] rounded-[6px]',
  medium: 'px-4 py-2 text-[0.9375rem] rounded-[8px]',
  large: 'px-6 py-3 text-[1.0625rem] rounded-[12px]',
};

/**
 * 버튼 컴포넌트
 * @param variant - 버튼 스타일 변형
 * @param size - 버튼 크기
 * @param fullWidth - 전체 너비 사용 여부
 * @param loading - 로딩 상태
 * @param disabled - 비활성화 상태
 * @param className - 추가 CSS 클래스
 * @param children - 자식 요소
 * @returns 스타일이 적용된 버튼 요소
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      fullWidth = false,
      loading = false,
      disabled = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          'inline-flex items-center justify-center gap-2',
          'font-[510] tracking-[-0.011em]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring-color focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'transition-all duration-[var(--transition-quick)]',
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';


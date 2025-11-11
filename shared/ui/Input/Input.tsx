'use client';

import { type InputHTMLAttributes, forwardRef, useState, useId } from 'react';
import { cn } from '@/shared/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

/**
 * 입력 컴포넌트
 * @param label - 입력 필드 레이블
 * @param error - 에러 메시지
 * @param helperText - 도움말 텍스트
 * @param fullWidth - 전체 너비 사용 여부
 * @param className - 추가 CSS 클래스
 * @returns 스타일이 적용된 입력 요소
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      fullWidth = false,
      className,
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
      <div className={cn('flex flex-col gap-1.5', fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-[0.875rem] font-[510] text-text-secondary tracking-[-0.013em]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          className={cn(
            'px-3 py-2 rounded-[8px]',
            'bg-bg-secondary text-text-primary',
            'border border-border-primary',
            'placeholder:text-text-quaternary',
            'text-[0.9375rem] tracking-[-0.011em]',
            'transition-all duration-[var(--transition-quick)]',
            'focus:outline-none focus:ring-2 focus:ring-focus-ring-color focus:ring-offset-2 focus:ring-offset-bg-primary',
            'hover:border-border-secondary',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            error &&
              'border-red focus:ring-red',
            isFocused && !error && 'border-accent-default',
            fullWidth && 'w-full',
            className
          )}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          {...props}
        />
        {(error || helperText) && (
          <p
            className={cn(
              'text-[0.75rem] tracking-[-0.01em]',
              error ? 'text-red' : 'text-text-tertiary'
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';


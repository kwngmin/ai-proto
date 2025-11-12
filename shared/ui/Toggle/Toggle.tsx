'use client';

import { forwardRef, InputHTMLAttributes, useState, useEffect } from 'react';

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'primary' | 'accent';
}

/**
 * 재사용 가능한 Toggle 스위치 컴포넌트
 * @param label - 토글 레이블
 * @param size - 토글 크기
 * @param variant - 토글 스타일 variant
 */
export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ label, size = 'medium', variant = 'default', className = '', checked, defaultChecked, onChange, ...props }, ref) => {
    const [isChecked, setIsChecked] = useState(checked ?? defaultChecked ?? false);

    useEffect(() => {
      if (checked !== undefined) {
        setIsChecked(checked);
      }
    }, [checked]);

    const sizeStyles = {
      small: 'w-8 h-4',
      medium: 'w-11 h-6',
      large: 'w-14 h-7',
    };

    const thumbSizeStyles = {
      small: 'w-3 h-3',
      medium: 'w-5 h-5',
      large: 'w-6 h-6',
    };

    const translateX = isChecked 
      ? (size === 'small' ? '1rem' : size === 'medium' ? '1.25rem' : '1.75rem')
      : '0.125rem';

    const getBackgroundColor = () => {
      if (!isChecked) return 'bg-bg-tertiary';
      switch (variant) {
        case 'primary':
          return 'bg-brand';
        case 'accent':
          return 'bg-accent';
        default:
          return 'bg-bg-secondary';
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (checked === undefined) {
        setIsChecked(e.target.checked);
      }
      onChange?.(e);
    };

    return (
      <label className={`inline-flex items-center gap-3 cursor-pointer ${className}`}>
        <div className="relative inline-flex items-center">
          <input
            ref={ref}
            type="checkbox"
            className="sr-only peer"
            checked={isChecked}
            onChange={handleChange}
            {...props}
          />
          <div
            className={`
              ${sizeStyles[size]}
              ${getBackgroundColor()}
              peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[var(--focus-ring-color)] peer-focus:ring-offset-2
              peer-disabled:opacity-50 peer-disabled:cursor-not-allowed
              rounded-full
              transition-all duration-200 ease-out
              relative
            `}
            style={{
              borderRadius: 'var(--radius-rounded)',
            }}
          >
            <span
              className={`
                ${thumbSizeStyles[size]}
                absolute top-0.5
                bg-white
                rounded-full
                transition-all duration-200 ease-out
                shadow-sm
              `}
              style={{
                borderRadius: 'var(--radius-rounded)',
                left: translateX,
              }}
            />
          </div>
        </div>
        {label && (
          <span className="text-text-primary text-sm font-medium select-none">
            {label}
          </span>
        )}
      </label>
    );
  }
);

Toggle.displayName = 'Toggle';


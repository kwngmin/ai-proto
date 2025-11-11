import { type ComponentPropsWithoutRef, type ElementType, type ReactNode } from 'react';
import { cn } from '@/shared/lib/utils';

type TextSize = 'tiny' | 'micro' | 'mini' | 'small' | 'regular' | 'large';
type TextWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
type TextColor = 'primary' | 'secondary' | 'tertiary' | 'quaternary';

interface TextOwnProps<E extends ElementType = ElementType> {
  as?: E;
  size?: TextSize;
  weight?: TextWeight;
  color?: TextColor;
  className?: string;
  children: ReactNode;
}

type TextProps<E extends ElementType> = TextOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof TextOwnProps>;

const sizeClasses: Record<TextSize, string> = {
  tiny: 'text-[0.625rem] leading-[1.5] tracking-[-0.015em]',
  micro: 'text-[0.75rem] leading-[1.4] tracking-[0]',
  mini: 'text-[0.8125rem] leading-[1.5] tracking-[-0.01em]',
  small: 'text-[0.875rem] leading-[1.5] tracking-[-0.013em]',
  regular: 'text-[0.9375rem] leading-[1.6] tracking-[-0.011em]',
  large: 'text-[1.0625rem] leading-[1.6] tracking-[0]',
};

const weightClasses: Record<TextWeight, string> = {
  light: 'font-[300]',
  normal: 'font-[400]',
  medium: 'font-[510]',
  semibold: 'font-[590]',
  bold: 'font-[680]',
};

const colorClasses: Record<TextColor, string> = {
  primary: 'text-text-primary',
  secondary: 'text-text-secondary',
  tertiary: 'text-text-tertiary',
  quaternary: 'text-text-quaternary',
};

/**
 * 텍스트 컴포넌트
 * @param as - 렌더링할 HTML 요소 (기본값: 'span')
 * @param size - 텍스트 크기
 * @param weight - 텍스트 굵기
 * @param color - 텍스트 색상
 * @param className - 추가 CSS 클래스
 * @param children - 자식 요소
 * @returns 스타일이 적용된 텍스트 요소
 */
export function Text<E extends ElementType = 'span'>({
  as,
  size = 'regular',
  weight = 'normal',
  color = 'primary',
  className,
  children,
  ...props
}: TextProps<E>) {
  const Component = as || 'span';

  return (
    <Component
      className={cn(
        sizeClasses[size],
        weightClasses[weight],
        colorClasses[color],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}


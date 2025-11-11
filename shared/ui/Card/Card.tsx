import { type HTMLAttributes, type ReactNode, forwardRef } from 'react';
import Image from 'next/image';
import { cn } from '@/shared/lib/utils';

type CardVariant = 'default' | 'bordered' | 'elevated';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: 'none' | 'small' | 'medium' | 'large';
  children: ReactNode;
}

const variantClasses: Record<CardVariant, string> = {
  default: 'bg-bg-secondary border border-border-primary',
  bordered: 'bg-bg-primary border-2 border-border-secondary',
  elevated: 'bg-bg-secondary border border-border-primary shadow-md',
};

const paddingClasses = {
  none: 'p-0',
  small: 'p-3',
  medium: 'p-4',
  large: 'p-6',
};

/**
 * 카드 컴포넌트
 * @param variant - 카드 스타일 변형
 * @param padding - 내부 여백 크기
 * @param className - 추가 CSS 클래스
 * @param children - 자식 요소
 * @returns 스타일이 적용된 카드 요소
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', padding = 'medium', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-[12px]',
          'transition-all duration-[var(--transition-regular)]',
          variantClasses[variant],
          paddingClasses[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

/**
 * 카드 헤더 컴포넌트
 */
export const CardHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex flex-col gap-1.5', className)}
      {...props}
    >
      {children}
    </div>
  );
});

CardHeader.displayName = 'CardHeader';

/**
 * 카드 타이틀 컴포넌트
 */
export const CardTitle = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={cn(
        'text-[1.0625rem] leading-[1.4] tracking-[-0.012em] font-[590] text-text-primary',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
});

CardTitle.displayName = 'CardTitle';

/**
 * 카드 설명 컴포넌트
 */
export const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn('text-[0.875rem] text-text-tertiary', className)}
      {...props}
    >
      {children}
    </p>
  );
});

CardDescription.displayName = 'CardDescription';

/**
 * 카드 콘텐츠 컴포넌트
 */
export const CardContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn('pt-0', className)} {...props}>
      {children}
    </div>
  );
});

CardContent.displayName = 'CardContent';

/**
 * 카드 푸터 컴포넌트
 */
export const CardFooter = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex items-center gap-2 pt-4', className)}
      {...props}
    >
      {children}
    </div>
  );
});

CardFooter.displayName = 'CardFooter';

/**
 * 카드 이미지 컴포넌트
 */
export const CardImage = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & {
    src: string;
    alt: string;
    aspectRatio?: 'square' | 'video' | 'wide' | 'portrait';
  }
>(({ className, src, alt, aspectRatio = 'video', ...props }, ref) => {
  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[21/9]',
    portrait: 'aspect-[3/4]',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'relative w-full overflow-hidden',
        aspectRatioClasses[aspectRatio],
        className
      )}
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
});

CardImage.displayName = 'CardImage';


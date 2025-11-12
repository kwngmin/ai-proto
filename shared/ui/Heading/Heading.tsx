import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/shared/lib/utils";

type HeadingLevel = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type HeadingColor = "primary" | "secondary" | "tertiary" | "quaternary";

interface HeadingOwnProps<E extends ElementType = ElementType> {
  as?: E;
  level?: HeadingLevel;
  color?: HeadingColor;
  className?: string;
  children: ReactNode;
}

type HeadingProps<E extends ElementType> = HeadingOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof HeadingOwnProps>;

const levelClasses: Record<HeadingLevel, string> = {
  "1": "text-[1.0625rem] leading-[1.4] tracking-[-0.012em]",
  "2": "text-[1.3125rem] leading-[1.33] tracking-[-0.012em]",
  "3": "text-[1.5rem] leading-[1.33] tracking-[-0.012em]",
  "4": "text-[2rem] leading-[1.125] tracking-[-0.022em]",
  "5": "text-[2.5rem] leading-[1.1] tracking-[-0.022em]",
  "6": "text-[3rem] leading-[1.1] tracking-[-0.022em]",
  "7": "text-[3.5rem] leading-[1.1] tracking-[-0.022em]",
  "8": "text-[4rem] leading-[1.06] tracking-[-0.022em]",
  "9": "text-[4.5rem] leading-[1] tracking-[-0.022em]",
};

const colorClasses: Record<HeadingColor, string> = {
  primary: "text-text-primary",
  secondary: "text-text-secondary",
  tertiary: "text-text-tertiary",
  quaternary: "text-text-quaternary",
};

/**
 * 제목 컴포넌트
 * @param as - 렌더링할 HTML 요소 (기본값: level에 따라 'h1' ~ 'h6')
 * @param level - 제목 레벨 (1-9)
 * @param color - 텍스트 색상
 * @param className - 추가 CSS 클래스
 * @param children - 자식 요소
 * @returns 스타일이 적용된 제목 요소
 */
export function Heading<E extends ElementType = "h1">({
  as,
  level = "1",
  color = "primary",
  className,
  children,
  ...props
}: HeadingProps<E>) {
  const levelNum = parseInt(level, 10);
  const defaultTag = levelNum <= 6 ? (`h${levelNum}` as ElementType) : "h6";
  const Component = as || defaultTag;

  return (
    <Component
      className={cn(
        "font-[600]", // semibold
        levelClasses[level],
        colorClasses[color],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

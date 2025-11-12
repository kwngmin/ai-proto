"use client";

import {
  type HTMLAttributes,
  type ReactNode,
  forwardRef,
  useState,
  useEffect,
} from "react";
import { cn } from "@/shared/lib/utils";

type BadgeVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info";
type BadgeSize = "small" | "medium" | "large";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: ReactNode;
}

// 다크 모드용 variant 클래스
const variantClassesDark: Record<BadgeVariant, string> = {
  default: "bg-bg-tertiary text-text-primary border border-border-primary",
  primary: "bg-accent/10 text-accent border border-accent/20",
  success: "bg-green/10 text-green border border-green/20",
  warning: "bg-yellow/10 text-yellow border border-yellow/20",
  danger: "bg-red/10 text-red border border-red/20",
  info: "bg-blue/10 text-blue border border-blue/20",
};

// 라이트 모드용 variant 클래스 (가독성 향상)
const variantClassesLight: Record<BadgeVariant, string> = {
  default: "bg-bg-tertiary text-text-primary border border-border-primary",
  primary: "bg-accent/15 text-accent border border-accent/30",
  success: "bg-green/15 text-[#2d8659] border border-green/30",
  warning: "bg-yellow/20 text-[#b8860b] border border-yellow/40",
  danger: "bg-red/15 text-[#c93d3d] border border-red/30",
  info: "bg-blue/15 text-[#2e7bb8] border border-blue/30",
};

const sizeClasses: Record<BadgeSize, string> = {
  small: "px-2 py-0.5 text-[0.6875rem] rounded-[4px]",
  medium: "px-2.5 py-1 text-[0.75rem] rounded-[6px]",
  large: "px-3 py-1.5 text-[0.8125rem] rounded-[6px]",
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
  (
    { variant = "default", size = "medium", className, children, ...props },
    ref
  ) => {
    // 현재 테마 감지 (클라이언트 사이드에서만)
    const [isLightMode, setIsLightMode] = useState(false);

    useEffect(() => {
      const checkTheme = () => {
        const theme = document.documentElement.getAttribute("data-theme");
        setIsLightMode(theme === "light");
      };

      // 초기 테마 확인
      checkTheme();

      // 테마 변경 감지를 위한 MutationObserver
      const observer = new MutationObserver(checkTheme);
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme"],
      });

      return () => observer.disconnect();
    }, []);

    const variantClasses = isLightMode
      ? variantClassesLight
      : variantClassesDark;

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center",
          "font-[500] tracking-[-0.01em]",
          "whitespace-nowrap",
          "transition-colors duration-[var(--transition-quick)]",
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

Badge.displayName = "Badge";

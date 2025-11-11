import themeData from "@/shared/config/theme.json";
import type { Theme } from "@/shared/types/theme";

/**
 * Linear 디자인 시스템 테마 객체
 */
export const theme = themeData as Theme;

/**
 * 테마의 특정 경로 값을 가져오는 유틸리티 함수
 * @param path - 점으로 구분된 경로 (예: 'colors.background.primary')
 * @returns 해당 경로의 테마 값
 */
export function getThemeValue(path: string): string | undefined {
  const keys = path.split(".");
  let value: unknown = theme;

  for (const key of keys) {
    if (value && typeof value === "object" && key in value) {
      value = (value as Record<string, unknown>)[key];
    } else {
      return undefined;
    }
  }

  return typeof value === "string" ? value : undefined;
}

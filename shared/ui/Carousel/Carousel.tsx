'use client';

import { type ReactNode, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/shared/lib/utils';

interface CarouselProps {
  children: ReactNode[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
}

/**
 * 캐로셀 컴포넌트
 * @param children - 캐로셀에 표시할 슬라이드 요소들
 * @param autoPlay - 자동 재생 여부
 * @param autoPlayInterval - 자동 재생 간격 (ms)
 * @param showDots - 하단 인디케이터 표시 여부
 * @param showArrows - 좌우 화살표 표시 여부
 * @param className - 추가 CSS 클래스
 * @returns 캐로셀 컴포넌트
 */
export function Carousel({
  children,
  autoPlay = false,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
  className,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideCount = children.length;

  const handlePrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? slideCount - 1 : prev - 1));
  }, [slideCount]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === slideCount - 1 ? 0 : prev + 1));
  }, [slideCount]);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(handleNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, handleNext]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  return (
    <div className={cn('relative w-full overflow-hidden', className)}>
      {/* Slides Container */}
      <div className="relative w-full">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="w-full"
          >
            {children[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      {showArrows && slideCount > 1 && (
        <>
          <button
            onClick={handlePrevious}
            className={cn(
              'absolute left-4 top-1/2 -translate-y-1/2 z-10',
              'w-10 h-10 rounded-full',
              'bg-bg-secondary/80 backdrop-blur-sm',
              'border border-border-primary',
              'flex items-center justify-center',
              'hover:bg-bg-tertiary transition-colors',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring-color'
            )}
            aria-label="이전 슬라이드"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-text-primary"
            >
              <path
                d="M12.5 15L7.5 10L12.5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className={cn(
              'absolute right-4 top-1/2 -translate-y-1/2 z-10',
              'w-10 h-10 rounded-full',
              'bg-bg-secondary/80 backdrop-blur-sm',
              'border border-border-primary',
              'flex items-center justify-center',
              'hover:bg-bg-tertiary transition-colors',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring-color'
            )}
            aria-label="다음 슬라이드"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-text-primary"
            >
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && slideCount > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-bg-secondary/80 backdrop-blur-sm border border-border-primary">
            {children.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  'w-2 h-2 rounded-full transition-all duration-300',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring-color focus-visible:ring-offset-1',
                  index === currentIndex
                    ? 'w-6 bg-accent-default'
                    : 'bg-text-quaternary hover:bg-text-tertiary'
                )}
                aria-label={`${index + 1}번째 슬라이드로 이동`}
                aria-current={index === currentIndex}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * 캐로셀 슬라이드 컴포넌트
 */
export function CarouselSlide({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('w-full', className)}>
      {children}
    </div>
  );
}


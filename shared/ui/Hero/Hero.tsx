import { type HTMLAttributes, type ReactNode } from 'react';
import Image from 'next/image';
import { cn } from '@/shared/lib/utils';
import { Heading } from '../Heading';
import { Text } from '../Text';

type HeroAlign = 'left' | 'center';
type HeroSize = 'default' | 'large';

interface HeroProps extends HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
  actions?: ReactNode;
  badge?: ReactNode;
  image?: string;
  align?: HeroAlign;
  size?: HeroSize;
  background?: 'default' | 'gradient' | 'image';
  backgroundImage?: string;
}

/**
 * 히어로 섹션 컴포넌트
 * @param title - 주요 제목
 * @param description - 설명 텍스트
 * @param actions - 액션 버튼들
 * @param badge - 상단 뱃지
 * @param image - 우측 이미지 URL
 * @param align - 정렬 ('left' | 'center')
 * @param size - 크기 ('default' | 'large')
 * @param background - 배경 타입
 * @param backgroundImage - 배경 이미지 URL
 * @returns 히어로 섹션 컴포넌트
 */
export function Hero({
  title,
  description,
  actions,
  badge,
  image,
  align = 'center',
  size = 'default',
  background = 'default',
  backgroundImage,
  className,
  ...props
}: HeroProps) {
  const getBackgroundClass = () => {
    if (background === 'gradient') {
      return 'bg-gradient-to-br from-bg-level1 via-bg-primary to-accent-tint';
    }
    if (background === 'image' && backgroundImage) {
      return 'relative';
    }
    return 'bg-bg-primary';
  };

  const contentAlign = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  const titleSize = size === 'large' ? '6' : '5';

  return (
    <section
      className={cn(
        'relative w-full overflow-hidden',
        getBackgroundClass(),
        className
      )}
      {...props}
    >
      {/* Background Image Overlay */}
      {background === 'image' && backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-bg-primary/90 backdrop-blur-sm" />
        </>
      )}

      <div className="relative w-full px-6 py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto">
          <div
            className={cn(
              'grid grid-cols-1 gap-12 items-center',
              image && 'md:grid-cols-2'
            )}
          >
            {/* Content */}
            <div className={cn('flex flex-col gap-6', contentAlign, !image && 'mx-auto max-w-3xl')}>
              {badge && <div>{badge}</div>}

              <div className="space-y-4">
                <Heading level={titleSize} color="primary">
                  {title}
                </Heading>
                {description && (
                  <Text
                    size="large"
                    color="secondary"
                    className={cn('max-w-2xl', align === 'center' && 'mx-auto')}
                  >
                    {description}
                  </Text>
                )}
              </div>

              {actions && (
                <div className={cn('flex flex-wrap gap-3', align === 'center' && 'justify-center')}>
                  {actions}
                </div>
              )}
            </div>

            {/* Image */}
            {image && (
              <div className="relative">
                <div className="relative rounded-[16px] overflow-hidden border border-border-primary shadow-lg aspect-video">
                  <Image
                    src={image}
                    alt="Hero"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                  <div className="absolute top-0 right-0 w-72 h-72 bg-brand/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-default/20 rounded-full blur-3xl" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * 히어로 그리드 패턴 배경
 */
export function HeroGridPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary" />
    </div>
  );
}


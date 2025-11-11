'use client';

import { type HTMLAttributes, type ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { cn } from '@/shared/lib/utils';

interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

interface NavbarProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  logo?: ReactNode;
  logoText?: string;
  links?: NavLink[];
  actions?: ReactNode;
  sticky?: boolean;
  transparent?: boolean;
}

/**
 * 네비게이션 바 컴포넌트
 * @param logo - 로고 컴포넌트
 * @param logoText - 로고 텍스트
 * @param links - 네비게이션 링크 배열
 * @param actions - 우측 액션 버튼들
 * @param sticky - 스크롤 시 상단 고정 여부
 * @param transparent - 투명 배경 사용 여부
 * @returns 네비게이션 바 컴포넌트
 */
export function Navbar({
  logo,
  logoText = 'Linear',
  links = [],
  actions,
  sticky = true,
  transparent = false,
  className,
  ...props
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className={cn(
        'w-full z-[var(--z-header)]',
        sticky && 'sticky top-0',
        'border-b border-border-primary',
        transparent
          ? 'bg-bg-primary/80 backdrop-blur-[20px]'
          : 'bg-bg-primary',
        className
      )}
      {...props}
    >
      <div className="w-full px-6">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-2 text-text-primary font-[590] text-[1.0625rem] tracking-[-0.012em] hover:opacity-80 transition-opacity"
            >
              {logo || (
                <div className="w-8 h-8 rounded-[6px] bg-brand flex items-center justify-center text-brand-text font-[680]">
                  {logoText.charAt(0)}
                </div>
              )}
              <span>{logoText}</span>
            </Link>

            {/* Desktop Navigation */}
            {links.length > 0 && (
              <div className="hidden md:flex items-center gap-1">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={cn(
                      'relative px-3 py-2 rounded-[6px]',
                      'text-[0.875rem] font-[510] text-text-secondary',
                      'hover:text-text-primary hover:bg-bg-translucent',
                      'transition-colors'
                    )}
                  >
                    {link.label}
                    {link.badge && (
                      <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-[0.625rem] font-[590] bg-accent-default text-brand-text rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {actions}
          </div>

          {/* Mobile Menu Button */}
          {links.length > 0 && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-[6px] hover:bg-bg-translucent transition-colors"
              aria-label="메뉴 토글"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-text-primary"
              >
                {isMobileMenuOpen ? (
                  <path
                    d="M15 5L5 15M5 5L15 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M3 6H17M3 10H17M3 14H17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-border-primary max-w-[1280px] mx-auto"
            >
              <div className="py-4 space-y-1">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={cn(
                      'flex items-center justify-between px-3 py-2 rounded-[6px]',
                      'text-[0.875rem] font-[510] text-text-secondary',
                      'hover:text-text-primary hover:bg-bg-translucent',
                      'transition-colors'
                    )}
                  >
                    {link.label}
                    {link.badge && (
                      <span className="px-2 py-0.5 text-[0.625rem] font-[590] bg-accent-tint text-accent-hover rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </a>
                ))}
                {actions && (
                  <div className="pt-3 mt-3 border-t border-border-primary space-y-2">
                    {actions}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}


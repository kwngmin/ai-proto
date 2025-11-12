import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/shared/lib/utils";
import { Text } from "../Text";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps extends HTMLAttributes<HTMLElement> {
  logo?: ReactNode;
  logoText?: string;
  description?: string;
  sections?: FooterSection[];
  socialLinks?: {
    icon: ReactNode;
    href: string;
    label: string;
  }[];
  bottomText?: string;
  bottomLinks?: FooterLink[];
}

/**
 * 푸터 컴포넌트
 * @param logo - 로고 컴포넌트
 * @param logoText - 로고 텍스트
 * @param description - 푸터 설명
 * @param sections - 링크 섹션들
 * @param socialLinks - 소셜 미디어 링크들
 * @param bottomText - 하단 텍스트 (저작권 등)
 * @param bottomLinks - 하단 링크들
 * @returns 푸터 컴포넌트
 */
export function Footer({
  logo,
  logoText = "Linear",
  description,
  sections = [],
  socialLinks = [],
  bottomText,
  bottomLinks = [],
  className,
  ...props
}: FooterProps) {
  return (
    <footer
      className={cn(
        "w-full border-t border-border-primary bg-bg-primary",
        className
      )}
      {...props}
    >
      <div className="max-w-[1280px] mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              {logo || (
                <div className="w-8 h-8 rounded-[6px] bg-brand flex items-center justify-center text-brand-text font-[700]">
                  {logoText.charAt(0)}
                </div>
              )}
              <span className="text-text-primary font-[600] text-[1.0625rem] tracking-[-0.012em]">
                {logoText}
              </span>
            </div>
            {description && (
              <Text color="tertiary" className="mb-6 max-w-xs">
                {description}
              </Text>
            )}
            {socialLinks.length > 0 && (
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={cn(
                      "w-9 h-9 rounded-[6px]",
                      "bg-bg-secondary border border-border-primary",
                      "flex items-center justify-center",
                      "text-text-tertiary hover:text-text-primary hover:bg-bg-tertiary",
                      "transition-colors"
                    )}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Link Sections */}
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="md:col-span-2">
              <Text
                size="small"
                weight="semibold"
                color="primary"
                className="mb-4"
              >
                {section.title}
              </Text>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-[0.875rem] text-text-tertiary hover:text-text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-primary">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Text size="small" color="quaternary">
              {bottomText ||
                `© ${new Date().getFullYear()} ${logoText}. All rights reserved.`}
            </Text>
            {bottomLinks.length > 0 && (
              <div className="flex items-center gap-6">
                {bottomLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-[0.875rem] text-text-quaternary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

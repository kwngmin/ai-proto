"use client";

import { useState, useEffect } from "react";
import {
  Text,
  Heading,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardImage,
  Badge,
  Input,
  Carousel,
  CarouselSlide,
  Navbar,
  Footer,
  Hero,
  HeroGridPattern,
  Toggle,
} from "@/shared/ui";

/**
 * 컴포넌트 데모 페이지
 * Linear 디자인 시스템 기반의 재사용 가능한 컴포넌트들을 시연합니다.
 */
export default function ComponentsPage() {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // 테마 초기화 및 localStorage 동기화
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    const initialTheme = savedTheme || "dark";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  // 테마 변경 핸들러
  const handleThemeToggle = (checked: boolean) => {
    const newTheme = checked ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.length < 3 && value.length > 0) {
      setInputError("최소 3자 이상 입력해주세요");
    } else {
      setInputError("");
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Header */}
      <header className="sticky top-0 z-[var(--z-header)] border-b border-border-primary bg-[var(--bg-primary)]/80 backdrop-blur-[20px]">
        <div className="max-w-[1024px] mx-auto px-6 py-4 flex items-center justify-between">
          <Heading level="2" color="primary">
            Component Library
          </Heading>
          <div className="flex items-center gap-3">
            <Text size="small" color="tertiary">
              {theme === "dark" ? "다크 모드" : "라이트 모드"}
            </Text>
            <Toggle
              checked={theme === "light"}
              onChange={(e) => handleThemeToggle(e.target.checked)}
              size="medium"
              variant="primary"
              aria-label="테마 전환"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1024px] mx-auto px-6 py-12">
        <div className="space-y-16">
          {/* Layout Components Section */}
          <section>
            <Heading level="3" className="mb-6">
              Layout Components
            </Heading>
            <div className="space-y-12">
              {/* Navbar */}
              <div className="space-y-4">
                <Text
                  size="small"
                  color="tertiary"
                  className="uppercase tracking-wide"
                >
                  Navbar
                </Text>

                <div className="space-y-8">
                  <div>
                    <Text size="small" color="tertiary" className="mb-4">
                      Default Navbar
                    </Text>
                    <div className="border border-border-primary rounded-[12px] overflow-hidden">
                      <Navbar
                        logoText="MyApp"
                        links={[
                          { label: "Features", href: "#features" },
                          { label: "Pricing", href: "#pricing" },
                          { label: "Docs", href: "#docs" },
                          { label: "Blog", href: "#blog" },
                        ]}
                        actions={
                          <>
                            <Button variant="ghost" size="small">
                              Sign In
                            </Button>
                            <Button variant="primary" size="small">
                              Get Started
                            </Button>
                          </>
                        }
                        sticky={false}
                      />
                    </div>
                  </div>

                  <div>
                    <Text size="small" color="tertiary" className="mb-4">
                      Navbar with Badge
                    </Text>
                    <div className="border border-border-primary rounded-[12px] overflow-hidden">
                      <Navbar
                        logoText="Linear"
                        links={[
                          { label: "Product", href: "#product" },
                          {
                            label: "Features",
                            href: "#features",
                            badge: "New",
                          },
                          { label: "Company", href: "#company" },
                          { label: "Contact", href: "#contact" },
                        ]}
                        actions={
                          <>
                            <Button variant="secondary" size="small">
                              Login
                            </Button>
                            <Button variant="primary" size="small">
                              Sign Up
                            </Button>
                          </>
                        }
                        sticky={false}
                        transparent
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Hero */}
              <div className="space-y-4">
                <Text
                  size="small"
                  color="tertiary"
                  className="uppercase tracking-wide"
                >
                  Hero Sections
                </Text>

                <div className="space-y-8">
                  {/* Centered Hero */}
                  <div>
                    <Text size="small" color="tertiary" className="mb-4">
                      Centered Hero with Gradient
                    </Text>
                    <div className="border border-border-primary rounded-[12px] overflow-hidden">
                      <Hero
                        badge={<Badge variant="primary">New Release</Badge>}
                        title="Build Better Products Faster"
                        description="The modern development platform that empowers teams to ship faster with confidence. Built for developers, loved by teams."
                        actions={
                          <>
                            <Button variant="primary" size="large">
                              Get Started Free
                            </Button>
                            <Button variant="secondary" size="large">
                              View Demo
                            </Button>
                          </>
                        }
                        align="center"
                        size="large"
                        background="gradient"
                      />
                    </div>
                  </div>

                  {/* Left-aligned Hero with Image */}
                  <div>
                    <Text size="small" color="tertiary" className="mb-4">
                      Left-aligned Hero with Image
                    </Text>
                    <div className="border border-border-primary rounded-[12px] overflow-hidden">
                      <Hero
                        badge={
                          <Badge variant="success">✨ Now Available</Badge>
                        }
                        title="Collaborate in Real-Time"
                        description="Work together seamlessly with your team. Share ideas, track progress, and ship features faster than ever before."
                        actions={
                          <>
                            <Button variant="primary">Start Building</Button>
                            <Button variant="ghost">Learn More →</Button>
                          </>
                        }
                        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
                        align="left"
                        size="default"
                      />
                    </div>
                  </div>

                  {/* Hero with Grid Pattern */}
                  <div>
                    <Text size="small" color="tertiary" className="mb-4">
                      Hero with Grid Pattern Background
                    </Text>
                    <div className="border border-border-primary rounded-[12px] overflow-hidden relative">
                      <HeroGridPattern />
                      <Hero
                        title="Developer-First Platform"
                        description="Built by developers, for developers. Experience the power of modern tooling with an intuitive interface."
                        actions={
                          <>
                            <Button variant="primary" size="large">
                              Explore Documentation
                            </Button>
                          </>
                        }
                        align="center"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="space-y-4">
                <Text
                  size="small"
                  color="tertiary"
                  className="uppercase tracking-wide"
                >
                  Footer
                </Text>

                {/* Comprehensive Footer */}
                <Card padding="none" className="overflow-hidden">
                  <Footer
                    logoText="Linear"
                    description="The issue tracking tool you'll enjoy using. Linear helps streamline software projects, sprints, tasks, and bug tracking."
                    sections={[
                      {
                        title: "Product",
                        links: [
                          { label: "Features", href: "#features" },
                          { label: "Integrations", href: "#integrations" },
                          { label: "Pricing", href: "#pricing" },
                          { label: "Changelog", href: "#changelog" },
                        ],
                      },
                      {
                        title: "Company",
                        links: [
                          { label: "About", href: "#about" },
                          { label: "Blog", href: "#blog" },
                          { label: "Careers", href: "#careers" },
                          { label: "Contact", href: "#contact" },
                        ],
                      },
                      {
                        title: "Resources",
                        links: [
                          { label: "Documentation", href: "#docs" },
                          { label: "Help Center", href: "#help" },
                          { label: "API Reference", href: "#api" },
                          { label: "Community", href: "#community" },
                        ],
                      },
                      {
                        title: "Legal",
                        links: [
                          { label: "Privacy", href: "#privacy" },
                          { label: "Terms", href: "#terms" },
                          { label: "Security", href: "#security" },
                          { label: "Cookies", href: "#cookies" },
                        ],
                      },
                    ]}
                    socialLinks={[
                      {
                        icon: (
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                          </svg>
                        ),
                        href: "#facebook",
                        label: "Facebook",
                      },
                      {
                        icon: (
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                          </svg>
                        ),
                        href: "#twitter",
                        label: "Twitter",
                      },
                      {
                        icon: (
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                          </svg>
                        ),
                        href: "#github",
                        label: "GitHub",
                      },
                      {
                        icon: (
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        ),
                        href: "#linkedin",
                        label: "LinkedIn",
                      },
                    ]}
                    bottomLinks={[
                      { label: "Privacy Policy", href: "#privacy" },
                      { label: "Terms of Service", href: "#terms" },
                      { label: "Cookie Settings", href: "#cookies" },
                    ]}
                  />
                </Card>

                {/* Minimal Footer */}
                <Card padding="none" className="overflow-hidden">
                  <Footer
                    logoText="Simple"
                    description="Making software development simple and enjoyable."
                    bottomText="© 2025 Simple. Built with ❤️ by developers."
                  />
                </Card>
              </div>
            </div>
          </section>

          {/* Typography Section */}
          <section>
            <Heading level="3" className="mb-6">
              Typography
            </Heading>
            <Card>
              <CardContent className="space-y-6 pt-6">
                {/* Headings */}
                <div className="space-y-4">
                  <Text
                    size="small"
                    color="tertiary"
                    className="uppercase tracking-wide"
                  >
                    Headings
                  </Text>
                  <div className="space-y-3">
                    <Heading level="1">Heading Level 1</Heading>
                    <Heading level="2">Heading Level 2</Heading>
                    <Heading level="3">Heading Level 3</Heading>
                    <Heading level="4">Heading Level 4</Heading>
                    <Heading level="5">Heading Level 5</Heading>
                  </div>
                </div>

                {/* Text Sizes */}
                <div className="space-y-4 pt-4 border-t border-border-primary">
                  <Text
                    size="small"
                    color="tertiary"
                    className="uppercase tracking-wide"
                  >
                    Text Sizes
                  </Text>
                  <div className="space-y-2 flex flex-col">
                    <Text size="tiny">Tiny text - 최소 크기의 텍스트</Text>
                    <Text size="micro">Micro text - 매우 작은 텍스트</Text>
                    <Text size="mini">Mini text - 작은 텍스트</Text>
                    <Text size="small">Small text - 작은 일반 텍스트</Text>
                    <Text size="regular">Regular text - 기본 텍스트</Text>
                    <Text size="large">Large text - 큰 텍스트</Text>
                  </div>
                </div>

                {/* Text Colors */}
                <div className="space-y-4 pt-4 border-t border-border-primary">
                  <Text
                    size="small"
                    color="tertiary"
                    className="uppercase tracking-wide"
                  >
                    Text Colors
                  </Text>
                  <div className="space-y-2 flex flex-col">
                    <Text color="primary">
                      Primary color text - 주요 텍스트
                    </Text>
                    <Text color="secondary">
                      Secondary color text - 보조 텍스트
                    </Text>
                    <Text color="tertiary">
                      Tertiary color text - 3차 텍스트
                    </Text>
                    <Text color="quaternary">
                      Quaternary color text - 4차 텍스트
                    </Text>
                  </div>
                </div>

                {/* Text Weights */}
                <div className="space-y-4 pt-4 border-t border-border-primary">
                  <Text
                    size="small"
                    color="tertiary"
                    className="uppercase tracking-wide"
                  >
                    Text Weights
                  </Text>
                  <div className="space-y-2 flex flex-col">
                    <Text weight="light">Light weight - 얇은 글씨</Text>
                    <Text weight="normal">Normal weight - 보통 글씨</Text>
                    <Text weight="medium">Medium weight - 중간 글씨</Text>
                    <Text weight="semibold">Semibold weight - 준굵은 글씨</Text>
                    <Text weight="bold">Bold weight - 굵은 글씨</Text>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Buttons Section */}
          <section>
            <Heading level="3" className="mb-6">
              Buttons
            </Heading>
            <Card>
              <CardContent className="space-y-6 pt-6">
                {/* Variants */}
                <div className="space-y-4">
                  <Text
                    size="small"
                    color="tertiary"
                    className="uppercase tracking-wide"
                  >
                    Variants
                  </Text>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="primary">Primary Button</Button>
                    <Button variant="secondary">Secondary Button</Button>
                    <Button variant="ghost">Ghost Button</Button>
                    <Button variant="danger">Danger Button</Button>
                  </div>
                </div>

                {/* Sizes */}
                <div className="space-y-4 pt-4 border-t border-border-primary">
                  <Text
                    size="small"
                    color="tertiary"
                    className="uppercase tracking-wide"
                  >
                    Sizes
                  </Text>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button size="small">Small</Button>
                    <Button size="medium">Medium</Button>
                    <Button size="large">Large</Button>
                  </div>
                </div>

                {/* States */}
                <div className="space-y-4 pt-4 border-t border-border-primary">
                  <Text
                    size="small"
                    color="tertiary"
                    className="uppercase tracking-wide"
                  >
                    States
                  </Text>
                  <div className="flex flex-wrap gap-3">
                    <Button disabled>Disabled</Button>
                    <Button loading={loading} onClick={handleButtonClick}>
                      {loading ? "Loading..." : "Click to Load"}
                    </Button>
                  </div>
                </div>

                {/* Full Width */}
                <div className="space-y-4 pt-4 border-t border-border-primary">
                  <Text
                    size="small"
                    color="tertiary"
                    className="uppercase tracking-wide"
                  >
                    Full Width
                  </Text>
                  <Button fullWidth variant="primary">
                    Full Width Button
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Badges Section */}
          <section>
            <Heading level="3" className="mb-6">
              Badges
            </Heading>
            <Card>
              <CardContent className="space-y-6 pt-6">
                {/* Variants */}
                <div className="space-y-4">
                  <Text
                    size="small"
                    color="tertiary"
                    className="uppercase tracking-wide"
                  >
                    Variants
                  </Text>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="default">Default</Badge>
                    <Badge variant="primary">Primary</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="danger">Danger</Badge>
                    <Badge variant="info">Info</Badge>
                  </div>
                </div>

                {/* Sizes */}
                <div className="space-y-4 pt-4 border-t border-border-primary">
                  <Text
                    size="small"
                    color="tertiary"
                    className="uppercase tracking-wide"
                  >
                    Sizes
                  </Text>
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge size="small">Small</Badge>
                    <Badge size="medium">Medium</Badge>
                    <Badge size="large">Large</Badge>
                  </div>
                </div>

                {/* Use Cases */}
                <div className="space-y-4 pt-4 border-t border-border-primary">
                  <Text
                    size="small"
                    color="tertiary"
                    className="uppercase tracking-wide"
                  >
                    Use Cases
                  </Text>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="success">Active</Badge>
                    <Badge variant="warning">Pending</Badge>
                    <Badge variant="danger">Blocked</Badge>
                    <Badge variant="info">New</Badge>
                    <Badge variant="primary">Featured</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

           {/* Toggle Section */}
           <section>
             <Heading level="3" className="mb-6">
               Toggle
             </Heading>
             <Card>
               <CardContent className="space-y-6 pt-6">
                 {/* Variants */}
                 <div className="space-y-4">
                   <Text
                     size="small"
                     color="tertiary"
                     className="uppercase tracking-wide"
                   >
                     Variants
                   </Text>
                   <div className="flex flex-wrap items-center gap-6">
                     <Toggle variant="default" label="Default Toggle" />
                     <Toggle variant="primary" label="Primary Toggle" defaultChecked />
                     <Toggle variant="accent" label="Accent Toggle" defaultChecked />
                   </div>
                 </div>

                 {/* Sizes */}
                 <div className="space-y-4 pt-4 border-t border-border-primary">
                   <Text
                     size="small"
                     color="tertiary"
                     className="uppercase tracking-wide"
                   >
                     Sizes
                   </Text>
                   <div className="flex flex-wrap items-center gap-6">
                     <Toggle size="small" label="Small" />
                     <Toggle size="medium" label="Medium" defaultChecked />
                     <Toggle size="large" label="Large" defaultChecked />
                   </div>
                 </div>

                 {/* States */}
                 <div className="space-y-4 pt-4 border-t border-border-primary">
                   <Text
                     size="small"
                     color="tertiary"
                     className="uppercase tracking-wide"
                   >
                     States
                   </Text>
                   <div className="flex flex-wrap items-center gap-6">
                     <Toggle label="Enabled" defaultChecked />
                     <Toggle label="Disabled" disabled />
                     <Toggle label="Disabled Checked" disabled defaultChecked />
                   </div>
                 </div>
               </CardContent>
             </Card>
           </section>

           {/* Inputs Section */}
           <section>
             <Heading level="3" className="mb-6">
               Inputs
             </Heading>
            <Card>
              <CardContent className="space-y-6 pt-6">
                {/* Basic Input */}
                <div className="space-y-4">
                  <Text
                    size="small"
                    color="tertiary"
                    className="uppercase tracking-wide"
                  >
                    Basic Input
                  </Text>
                  <Input placeholder="기본 입력 필드" />
                </div>

                {/* With Label */}
                <div className="space-y-4 pt-4 border-t border-border-primary">
                  <Text
                    size="small"
                    color="tertiary"
                    className="uppercase tracking-wide"
                  >
                    With Label
                  </Text>
                  <Input
                    label="이메일"
                    type="email"
                    placeholder="example@email.com"
                  />
                </div>

                {/* With Helper Text */}
                <div className="space-y-4 pt-4 border-t border-border-primary">
                  <Text
                    size="small"
                    color="tertiary"
                    className="uppercase tracking-wide"
                  >
                    With Helper Text
                  </Text>
                  <Input
                    label="사용자명"
                    placeholder="사용자명 입력"
                    helperText="3-20자 사이의 영문, 숫자, 언더스코어만 사용 가능합니다."
                  />
                </div>

                {/* With Error */}
                <div className="space-y-4 pt-4 border-t border-border-primary">
                  <Text
                    size="small"
                    color="tertiary"
                    className="uppercase tracking-wide"
                  >
                    With Error
                  </Text>
                  <Input
                    label="비밀번호"
                    type="password"
                    placeholder="비밀번호 입력"
                    value={inputValue}
                    onChange={handleInputChange}
                    error={inputError}
                  />
                </div>

                {/* Disabled */}
                <div className="space-y-4 pt-4 border-t border-border-primary">
                  <Text
                    size="small"
                    color="tertiary"
                    className="uppercase tracking-wide"
                  >
                    Disabled
                  </Text>
                  <Input
                    label="비활성화된 필드"
                    placeholder="입력할 수 없습니다"
                    disabled
                  />
                </div>

                {/* Full Width */}
                <div className="space-y-4 pt-4 border-t border-border-primary">
                  <Text
                    size="small"
                    color="tertiary"
                    className="uppercase tracking-wide"
                  >
                    Full Width
                  </Text>
                  <Input
                    label="전체 너비 입력"
                    placeholder="전체 너비로 표시됩니다"
                    fullWidth
                  />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Cards Section */}
          <section>
            <Heading level="3" className="mb-6">
              Cards
            </Heading>
            <div className="space-y-6">
              {/* Default Card */}
              <div className="space-y-4">
                <Text
                  size="small"
                  color="tertiary"
                  className="uppercase tracking-wide"
                >
                  Default Card
                </Text>
                <Card>
                  <CardHeader>
                    <CardTitle>카드 제목</CardTitle>
                    <CardDescription>
                      카드 설명 텍스트입니다. 여기에 부가 정보를 표시할 수
                      있습니다.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <Text>
                      카드의 주요 콘텐츠가 여기에 들어갑니다. 다양한 정보와
                      인터페이스 요소들을 배치할 수 있습니다.
                    </Text>
                  </CardContent>
                  <CardFooter>
                    <Button size="small" variant="primary">
                      확인
                    </Button>
                    <Button size="small" variant="ghost">
                      취소
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Card Variants */}
              <div className="space-y-4 pt-4">
                <Text
                  size="small"
                  color="tertiary"
                  className="uppercase tracking-wide"
                >
                  Card Variants
                </Text>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card variant="default">
                    <CardHeader>
                      <CardTitle>Default</CardTitle>
                      <CardDescription>기본 카드 스타일</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card variant="bordered">
                    <CardHeader>
                      <CardTitle>Bordered</CardTitle>
                      <CardDescription>테두리 강조 카드</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card variant="elevated">
                    <CardHeader>
                      <CardTitle>Elevated</CardTitle>
                      <CardDescription>그림자 효과 카드</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </div>

              {/* Product Cards Example */}
              <div className="space-y-4 pt-4">
                <Text
                  size="small"
                  color="tertiary"
                  className="uppercase tracking-wide"
                >
                  Product Cards Example
                </Text>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card variant="elevated">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="success">Plan</Badge>
                        <Text size="small" color="tertiary">
                          무료
                        </Text>
                      </div>
                      <CardTitle>Linear Plan</CardTitle>
                      <CardDescription>
                        프로젝트 계획 및 로드맵을 효율적으로 관리하세요
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="space-y-2">
                        <Text size="small">✓ 무제한 프로젝트</Text>
                        <Text size="small">✓ 기본 로드맵</Text>
                        <Text size="small">✓ 팀 협업</Text>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button fullWidth variant="secondary">
                        시작하기
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card variant="elevated">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="warning">Build</Badge>
                        <Text size="small" color="tertiary">
                          $10/월
                        </Text>
                      </div>
                      <CardTitle>Linear Build</CardTitle>
                      <CardDescription>
                        개발 워크플로우를 최적화하고 생산성을 높이세요
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="space-y-2">
                        <Text size="small">✓ Plan의 모든 기능</Text>
                        <Text size="small">✓ CI/CD 통합</Text>
                        <Text size="small">✓ 고급 자동화</Text>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button fullWidth variant="primary">
                        업그레이드
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card variant="elevated">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="info">Security</Badge>
                        <Text size="small" color="tertiary">
                          맞춤 견적
                        </Text>
                      </div>
                      <CardTitle>Linear Security</CardTitle>
                      <CardDescription>
                        엔터프라이즈급 보안과 컴플라이언스를 제공합니다
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="space-y-2">
                        <Text size="small">✓ Build의 모든 기능</Text>
                        <Text size="small">✓ SSO 인증</Text>
                        <Text size="small">✓ 감사 로그</Text>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button fullWidth variant="secondary">
                        문의하기
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Cards with Images Section */}
          <section>
            <Heading level="3" className="mb-6">
              Cards with Images
            </Heading>
            <div className="space-y-6">
              <div className="space-y-4">
                <Text
                  size="small"
                  color="tertiary"
                  className="uppercase tracking-wide"
                >
                  Image Card Examples
                </Text>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card variant="elevated" padding="none">
                    <CardImage
                      src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&auto=format&fit=crop&q=80"
                      alt="Abstract gradient background"
                      aspectRatio="video"
                    />
                    <div className="p-4">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="primary">Design</Badge>
                        </div>
                        <CardTitle>Modern Design Patterns</CardTitle>
                        <CardDescription>
                          최신 디자인 트렌드와 패턴을 알아보세요
                        </CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button size="small" variant="ghost" fullWidth>
                          자세히 보기 →
                        </Button>
                      </CardFooter>
                    </div>
                  </Card>

                  <Card variant="elevated" padding="none">
                    <CardImage
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80"
                      alt="Code on laptop screen"
                      aspectRatio="video"
                    />
                    <div className="p-4">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="info">Development</Badge>
                        </div>
                        <CardTitle>Best Coding Practices</CardTitle>
                        <CardDescription>
                          효율적인 코드 작성을 위한 핵심 원칙들
                        </CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button size="small" variant="ghost" fullWidth>
                          자세히 보기 →
                        </Button>
                      </CardFooter>
                    </div>
                  </Card>

                  <Card variant="elevated" padding="none">
                    <CardImage
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                      alt="Team collaboration"
                      aspectRatio="video"
                    />
                    <div className="p-4">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="success">Team</Badge>
                        </div>
                        <CardTitle>Effective Collaboration</CardTitle>
                        <CardDescription>
                          팀워크를 향상시키는 협업 도구와 방법론
                        </CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button size="small" variant="ghost" fullWidth>
                          자세히 보기 →
                        </Button>
                      </CardFooter>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Portrait Cards */}
              <div className="space-y-4 pt-4">
                <Text
                  size="small"
                  color="tertiary"
                  className="uppercase tracking-wide"
                >
                  Portrait Aspect Ratio
                </Text>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card variant="elevated" padding="none">
                    <CardImage
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"
                      alt="Portrait 1"
                      aspectRatio="portrait"
                    />
                    <div className="p-3">
                      <Text size="small" weight="semibold">
                        Sarah Chen
                      </Text>
                      <Text size="tiny" color="tertiary">
                        Product Designer
                      </Text>
                    </div>
                  </Card>

                  <Card variant="elevated" padding="none">
                    <CardImage
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80"
                      alt="Portrait 2"
                      aspectRatio="portrait"
                    />
                    <div className="p-3">
                      <Text size="small" weight="semibold">
                        Alex Kim
                      </Text>
                      <Text size="tiny" color="tertiary">
                        Lead Developer
                      </Text>
                    </div>
                  </Card>

                  <Card variant="elevated" padding="none">
                    <CardImage
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80"
                      alt="Portrait 3"
                      aspectRatio="portrait"
                    />
                    <div className="p-3">
                      <Text size="small" weight="semibold">
                        Emily Park
                      </Text>
                      <Text size="tiny" color="tertiary">
                        UX Researcher
                      </Text>
                    </div>
                  </Card>

                  <Card variant="elevated" padding="none">
                    <CardImage
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80"
                      alt="Portrait 4"
                      aspectRatio="portrait"
                    />
                    <div className="p-3">
                      <Text size="small" weight="semibold">
                        James Lee
                      </Text>
                      <Text size="tiny" color="tertiary">
                        Project Manager
                      </Text>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Carousel Section */}
          <section>
            <Heading level="3" className="mb-6">
              Carousel
            </Heading>
            <div className="space-y-6">
              {/* Basic Carousel */}
              <div className="space-y-4">
                <Text
                  size="small"
                  color="tertiary"
                  className="uppercase tracking-wide"
                >
                  Auto-play Carousel
                </Text>
                <Carousel
                  autoPlay
                  autoPlayInterval={4000}
                  className="rounded-[12px] overflow-hidden"
                >
                  <CarouselSlide>
                    <Card variant="elevated" padding="none">
                      <CardImage
                        src="https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&auto=format&fit=crop&q=80"
                        alt="Slide 1"
                        aspectRatio="wide"
                      />
                      <div className="p-6">
                        <Badge variant="primary" className="mb-3">
                          Featured
                        </Badge>
                        <Heading level="2">Next.js 15의 새로운 기능</Heading>
                        <Text color="secondary" className="mt-2">
                          최신 React 19와 함께 제공되는 강력한 기능들을
                          살펴보세요
                        </Text>
                      </div>
                    </Card>
                  </CarouselSlide>

                  <CarouselSlide>
                    <Card variant="elevated" padding="none">
                      <CardImage
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80"
                        alt="Slide 2"
                        aspectRatio="wide"
                      />
                      <div className="p-6">
                        <Badge variant="success" className="mb-3">
                          Performance
                        </Badge>
                        <Heading level="2">최적화된 성능</Heading>
                        <Text color="secondary" className="mt-2">
                          번들 크기 감소와 렌더링 속도 향상으로 더 빠른 웹
                          경험을 제공합니다
                        </Text>
                      </div>
                    </Card>
                  </CarouselSlide>

                  <CarouselSlide>
                    <Card variant="elevated" padding="none">
                      <CardImage
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80"
                        alt="Slide 3"
                        aspectRatio="wide"
                      />
                      <div className="p-6">
                        <Badge variant="info" className="mb-3">
                          Analytics
                        </Badge>
                        <Heading level="2">데이터 기반 의사결정</Heading>
                        <Text color="secondary" className="mt-2">
                          실시간 분석과 인사이트로 더 나은 제품을 만드세요
                        </Text>
                      </div>
                    </Card>
                  </CarouselSlide>

                  <CarouselSlide>
                    <Card variant="elevated" padding="none">
                      <CardImage
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop&q=80"
                        alt="Slide 4"
                        aspectRatio="wide"
                      />
                      <div className="p-6">
                        <Badge variant="warning" className="mb-3">
                          Collaboration
                        </Badge>
                        <Heading level="2">팀 협업 강화</Heading>
                        <Text color="secondary" className="mt-2">
                          실시간 공동 작업과 원활한 커뮤니케이션으로 생산성을
                          높이세요
                        </Text>
                      </div>
                    </Card>
                  </CarouselSlide>
                </Carousel>
              </div>

              {/* Manual Carousel */}
              <div className="space-y-4 pt-4">
                <Text
                  size="small"
                  color="tertiary"
                  className="uppercase tracking-wide"
                >
                  Manual Navigation Carousel
                </Text>
                <Carousel
                  showDots
                  showArrows
                  className="rounded-[12px] overflow-hidden"
                >
                  <CarouselSlide>
                    <div className="w-full aspect-video bg-gradient-to-br from-indigo via-brand to-accent-default flex items-center justify-center">
                      <div className="text-center">
                        <Heading level="2" className="text-brand-text mb-2">
                          Slide 1
                        </Heading>
                        <Text className="text-brand-text/80">
                          Beautiful gradients with smooth transitions
                        </Text>
                      </div>
                    </div>
                  </CarouselSlide>

                  <CarouselSlide>
                    <div className="w-full aspect-video bg-gradient-to-br from-green via-blue to-indigo flex items-center justify-center">
                      <div className="text-center">
                        <Heading level="2" className="text-brand-text mb-2">
                          Slide 2
                        </Heading>
                        <Text className="text-brand-text/80">
                          Navigate using arrows or dots
                        </Text>
                      </div>
                    </div>
                  </CarouselSlide>

                  <CarouselSlide>
                    <div className="w-full aspect-video bg-gradient-to-br from-orange via-red to-yellow flex items-center justify-center">
                      <div className="text-center">
                        <Heading level="2" className="text-brand-text mb-2">
                          Slide 3
                        </Heading>
                        <Text className="text-brand-text/80">
                          Fully customizable and responsive
                        </Text>
                      </div>
                    </div>
                  </CarouselSlide>
                </Carousel>
              </div>
            </div>
          </section>

          {/* Color Palette Section */}
          <section>
            <Heading level="3" className="mb-6">
              Color Palette
            </Heading>
            <Card>
              <CardContent className="space-y-6 pt-6">
                {/* UI Colors */}
                <div className="space-y-4">
                  <Text
                    size="small"
                    color="tertiary"
                    className="uppercase tracking-wide"
                  >
                    UI Colors
                  </Text>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <div className="w-full h-20 rounded-[8px] bg-red" />
                      <Text size="small">Red</Text>
                      <Text size="tiny" color="tertiary">
                        #eb5757
                      </Text>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-20 rounded-[8px] bg-orange" />
                      <Text size="small">Orange</Text>
                      <Text size="tiny" color="tertiary">
                        #fc7840
                      </Text>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-20 rounded-[8px] bg-yellow" />
                      <Text size="small">Yellow</Text>
                      <Text size="tiny" color="tertiary">
                        #f2c94c
                      </Text>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-20 rounded-[8px] bg-green" />
                      <Text size="small">Green</Text>
                      <Text size="tiny" color="tertiary">
                        #4cb782
                      </Text>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-20 rounded-[8px] bg-blue" />
                      <Text size="small">Blue</Text>
                      <Text size="tiny" color="tertiary">
                        #4ea7fc
                      </Text>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-20 rounded-[8px] bg-indigo" />
                      <Text size="small">Indigo</Text>
                      <Text size="tiny" color="tertiary">
                        #5e6ad2
                      </Text>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-20 rounded-[8px] bg-accent" />
                      <Text size="small">Accent</Text>
                      <Text size="tiny" color="tertiary">
                        #7170ff
                      </Text>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-20 rounded-[8px] bg-brand" />
                      <Text size="small">Brand</Text>
                      <Text size="tiny" color="tertiary">
                        #5e6ad2
                      </Text>
                    </div>
                  </div>
                </div>

                {/* Background Colors */}
                <div className="space-y-4 pt-4 border-t border-border-primary">
                  <Text
                    size="small"
                    color="tertiary"
                    className="uppercase tracking-wide"
                  >
                    Background Colors
                  </Text>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <div className="w-full h-20 rounded-[8px] bg-bg-primary border border-border-primary" />
                      <Text size="small">Primary</Text>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-20 rounded-[8px] bg-bg-secondary border border-border-primary" />
                      <Text size="small">Secondary</Text>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-20 rounded-[8px] bg-bg-tertiary border border-border-primary" />
                      <Text size="small">Tertiary</Text>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-20 rounded-[8px] bg-bg-quaternary border border-border-primary" />
                      <Text size="small">Quaternary</Text>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-border-primary">
          <div className="flex flex-col items-center gap-4">
            <Text color="tertiary">
              Linear Design System · Component Library
            </Text>
            <Text size="small" color="quaternary">
              Built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4
            </Text>
          </div>
        </footer>
      </main>
    </div>
  );
}

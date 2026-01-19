"use client";

import {
  Navbar,
  Hero,
  Footer,
  Heading,
  Text,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardImage,
  Badge,
  Carousel,
  CarouselSlide,
} from "@/shared/ui";

export default function GeminiPage() {
  // Section 2: 7 Steps
  const steps = [
    {
      step: "01",
      title: "SW 사업 정보 정보 등록",
      image: "https://placehold.co/600x400/f1f5f9/475569?text=Step+01",
    },
    {
      step: "02",
      title: "SW 비용 산정 정보 등록",
      image: "https://placehold.co/600x400/f1f5f9/475569?text=Step+02",
    },
    {
      step: "03",
      title: "개발 범위 식별",
      image: "https://placehold.co/600x400/f1f5f9/475569?text=Step+03",
    },
    {
      step: "04",
      title: "기능 규모 산정",
      image: "https://placehold.co/600x400/f1f5f9/475569?text=Step+04",
    },
    {
      step: "05",
      title: "보정계수 결정",
      image: "https://placehold.co/600x400/f1f5f9/475569?text=Step+05",
    },
    {
      step: "06",
      title: "SW 사업비용 산정",
      image: "https://placehold.co/600x400/f1f5f9/475569?text=Step+06",
    },
    {
      step: "07",
      title: "리포팅",
      image: "https://placehold.co/600x400/f1f5f9/475569?text=Step+07",
    },
  ];

  // Section 3: Reporting Features
  const insights = [
    {
      title: "기능유형별 기능점수",
      image: "https://placehold.co/400x300/e2e8f0/475569?text=Chart+1",
    },
    {
      title: "애플리케이션/업무별 기능 점수",
      image: "https://placehold.co/400x300/e2e8f0/475569?text=Chart+2",
    },
    {
      title: "기능유형별 비율",
      image: "https://placehold.co/400x300/e2e8f0/475569?text=Chart+3",
    },
    {
      title: "소프트웨어 개발비 산정 결과",
      image: "https://placehold.co/400x300/e2e8f0/475569?text=Chart+4",
    },
  ];

  // Section 4: Personas
  const personas = [
    {
      role: "SW 사업 기획자",
      title: "SW 사업 비용 알아보기",
      items: ["SW 개발비/재개발비", "SW 유지관리비"],
      chips: ["AI로 쉽게", "AI로 빠르게", "더 똑똑하게"],
      values: [
        "축적된 데이터를 활용한 AI 추천/자동화",
        "신기술 적용하여 비용산정 정확도 향상",
      ],
    },
    {
      role: "개발자/운영자",
      title: "SW 사업 관리하기",
      items: ["SW 사업 진행 관리", "SW 변경 관리"],
      chips: ["프로젝트 현황을 한눈에", "비교/추적/변경"],
      values: [
        "축적된 데이터를 활용한 AI 추천/자동화",
        "신기술 적용하여 비용산정 정확도 향상",
      ],
    },
    {
      role: "SW 사업 관리자",
      title: "SW 사업 관리+",
      items: ["인력 관리", "솔루션 관리", "일감 관리"],
      chips: ["사업에 필요한 모든 것", "All in One SW 사업 관리"],
      values: [
        "SW 사업 발주사/수주사 누구나",
        "업체 규모 상관없이 SW 사업에 필요한 FPMate",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100">
      <Navbar
        logoText="FPMate"
        links={[
          { label: "소개", href: "#section1" },
          { label: "기능", href: "#section2" },
          { label: "인사이트", href: "#section3" },
          { label: "플랜", href: "#section4" },
        ]}
        actions={
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="small"
              className="text-slate-600 hover:text-slate-900"
            >
              로그인/회원가입
            </Button>
            <Button variant="primary" size="small">
              제품도입문의
            </Button>
          </div>
        }
        sticky
        className="bg-white/80 backdrop-blur-md border-b border-slate-200"
      />

      {/* Hero Section */}
      <div className="relative pt-16">
        <Hero
          title="FPMate로 내 프로젝트의 가치를 높이세요"
          description="ISO 기반 기능점수(Function Point) 산정에 AI 분석을 더해 빠르고, 정확하고, 신뢰할 수 있는 비용 산정 경험을 제공합니다."
          align="center"
          size="large"
          className="bg-white pt-20 pb-32"
          actions={
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                variant="primary"
                size="large"
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200/50"
              >
                제품도입문의
              </Button>
              <Button
                variant="secondary"
                size="large"
                className="bg-slate-100 hover:bg-slate-200 text-slate-900 border-slate-200"
              >
                로그인/회원가입
              </Button>
            </div>
          }
        />
      </div>

      <main className="flex flex-col gap-0">
        {/* Section 1 */}
        <section id="section1" className="py-24 bg-slate-50">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-16">
              <Heading
                level="2"
                className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
              >
                FPMate는 SW 사업 파트너로서
                <br />
                SW 사업 관리를 돕고자 탄생하였습니다.
              </Heading>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "SW 사업을 기획하고 계신가요?",
                  sub: "FPMate에서 필요한 비용을 알아보세요.",
                },
                {
                  title: "SW 사업을 진행하고 계신가요?",
                  sub: "FPMate로 프로젝트의 비용을 추적해보세요.",
                },
                {
                  title: "SW 사업이 완료되셨나요?",
                  sub: "FPMate로 운영에 필요한 비용을 알아보세요.",
                },
              ].map((card, idx) => (
                <Card
                  key={idx}
                  variant="elevated"
                  className="bg-white border-none shadow-xl shadow-slate-200/60 hover:-translate-y-2 transition-transform duration-300"
                  padding="large"
                >
                  <CardContent className="flex flex-col h-full justify-center items-center text-center py-12">
                    <Heading
                      level="4"
                      className="text-xl font-bold text-slate-800 mb-4"
                    >
                      {card.title}
                    </Heading>
                    <Text size="regular" className="text-slate-600">
                      {card.sub}
                    </Text>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Text className="text-slate-500 bg-slate-100 inline-block px-4 py-2 rounded-full">
                💡 FPMate에서는 국제표준(ISO/IEC 14143)에 기반한 방법으로 SW
                사업 비용을 산정합니다.
              </Text>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section id="section2" className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-20">
              <Heading
                level="2"
                className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              >
                FPMate로 SW 사업 비용 산정과 관리를 한번에
              </Heading>
              <Heading
                level="4"
                className="text-xl text-blue-600 font-medium mb-6"
              >
                SW 사업 비용 산정 어떻게 해야 될지 막막하시죠?
              </Heading>
              <Text
                size="large"
                className="text-slate-600 max-w-2xl mx-auto leading-relaxed"
              >
                FPMate는 AI 비서와 함께 쉽고 빠르게 SW 사업 비용을 알아 볼 수
                있습니다.
                <br />
                사업 단계별 변경 관리도 어렵지 않아요.
              </Text>
            </div>

            {/* Carousel for Steps */}
            <div className="relative px-4 md:px-12">
              <Carousel
                autoPlay
                autoPlayInterval={4000}
                showArrows
                showDots
                className="pb-12"
              >
                {steps.map((step, idx) => (
                  <CarouselSlide key={idx}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-50 rounded-2xl p-8 md:p-12 mx-4">
                      <div className="order-2 md:order-1 space-y-4">
                        <Text className="text-blue-600 font-bold text-lg block mb-2">
                          STEP {step.step}
                        </Text>
                        <Heading
                          level="3"
                          className="text-2xl md:text-3xl font-bold text-slate-900"
                        >
                          {step.title}
                        </Heading>
                        <Text className="text-slate-600">
                          단계별로 쉽고 정확하게 입력하여 프로젝트의 가치를
                          산정해보세요.
                        </Text>
                      </div>
                      <div className="order-1 md:order-2 relative aspect-video rounded-xl overflow-hidden shadow-lg">
                        <CardImage
                          src={step.image}
                          alt={step.title}
                          aspectRatio="video"
                          className="hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </CarouselSlide>
                ))}
              </Carousel>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="section3" className="py-24 bg-slate-50">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
              <div>
                <Heading
                  level="2"
                  className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
                >
                  SW 사업 추진 인사이트+
                </Heading>
                <Text size="large" className="text-slate-600">
                  고유 작업 공간에서 그동안 작업했던 SW 사업 비용 산정 내역을
                  한눈에 파악해보세요.
                </Text>
              </div>
            </div>

            <div className="mb-20">
              <Card
                variant="elevated"
                padding="none"
                className="overflow-hidden shadow-2xl shadow-slate-200 border-none rounded-2xl"
              >
                <CardImage
                  src="https://placehold.co/1200x600/f8fafc/94a3b8?text=Dashboard+Workspace+View"
                  alt="Workspace Dashboard"
                  aspectRatio="video"
                />
              </Card>
            </div>

            <div className="mb-12 text-center">
              <Heading
                level="3"
                className="text-2xl font-bold text-slate-900 mb-4"
              >
                리포팅 기능을 통해 소프트웨어 사업 추진에 인사이트를 더해
                드립니다.
              </Heading>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {insights.map((item, idx) => (
                <Card
                  key={idx}
                  variant="elevated"
                  className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardImage
                    src={item.image}
                    alt={item.title}
                    aspectRatio="wide"
                  />
                  <CardContent className="py-6">
                    <Text
                      weight="medium"
                      className="text-slate-800 text-center"
                    >
                      {item.title}
                    </Text>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="section4" className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-20">
              <Heading
                level="2"
                className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              >
                진화하는 FPMate, SW 사업 성공 도우미
              </Heading>
              <Text size="large" className="text-slate-600">
                당신의 SW 사업 성공과 Fine 프로젝트를 위하여 FPMate는 지속적으로
                진화합니다.
              </Text>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {personas.map((p, idx) => (
                <Card
                  key={idx}
                  variant="elevated"
                  padding="large"
                  className="bg-white border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                >
                  <CardHeader className="pb-6 border-b border-slate-100">
                    <Text className="text-blue-600 font-bold mb-2 block uppercase tracking-wide text-sm">
                      {p.role}
                    </Text>
                    <Heading
                      level="3"
                      className="text-2xl font-bold text-slate-900"
                    >
                      {p.title}
                    </Heading>
                  </CardHeader>

                  <CardContent className="flex-1 py-8 space-y-8">
                    <div>
                      <Text
                        weight="semibold"
                        className="text-slate-900 mb-4 block"
                      >
                        주요 기능
                      </Text>
                      <ul className="space-y-2">
                        {p.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">✓</span>
                            <Text className="text-slate-600">{item}</Text>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {p.chips.map((chip, i) => (
                        <Badge
                          key={i}
                          variant="info"
                          className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-100"
                        >
                          {chip}
                        </Badge>
                      ))}
                    </div>

                    <div className="bg-slate-50 rounded-xl p-5">
                      <Text
                        weight="semibold"
                        className="text-slate-900 mb-3 block text-sm"
                      >
                        제공 가치
                      </Text>
                      <ul className="space-y-2">
                        {p.values.map((val, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-slate-400 text-xs mt-1.5">
                              ●
                            </span>
                            <Text
                              size="small"
                              className="text-slate-600 leading-snug"
                            >
                              {val}
                            </Text>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>

                  <CardContent className="pt-0 pb-6">
                    <Button
                      variant="primary"
                      fullWidth
                      className="bg-slate-900 text-white hover:bg-slate-800"
                    >
                      자세히 보기
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer
        logoText="FPMate"
        description="SW 사업 파트너로서 SW 사업 관리를 돕고자 탄생하였습니다."
        sections={[
          {
            title: "서비스",
            links: [
              { label: "기능 소개", href: "#" },
              { label: "요금 안내", href: "#" },
              { label: "자주 묻는 질문", href: "#" },
            ],
          },
          {
            title: "회사",
            links: [
              { label: "회사 소개", href: "#" },
              { label: "인재 채용", href: "#" },
              { label: "연락처", href: "#" },
            ],
          },
        ]}
        bottomText="© 2025 FPMate. All rights reserved."
        className="bg-slate-50 border-t border-slate-200 text-slate-600"
      />
    </div>
  );
}








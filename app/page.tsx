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
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
} from "@/shared/ui";

/**
 * FPMate 홈페이지
 * 라이트 모드로 제작된 리뉴얼 버전
 */
export default function Home() {
  // 프로젝트 카드 데이터
  const projectCards = [
    {
      name: "공공 마이데이터 플랫폼",
      projectName: "공공 데이터 프로젝트 FP",
      fp: "998.5 FP",
      cost: "599,316,022원",
      date: "2023.06.29",
      manager: "J",
      tags: ["신규", "간이법", "프로젝트 계획"],
    },
    {
      name: "모바일 플랫폼 구현",
      projectName: "모바일 플랫폼 구현 FP",
      fp: "1,000.6 FP",
      cost: "473,798,508원",
      date: "2023.06.20",
      manager: "J",
      tags: ["신규", "간이법", "프로젝트 계획"],
    },
    {
      name: "모바일전자고지 서비스 구축",
      projectName: "서비스 FP 산정",
      fp: "1,005.2 FP",
      cost: "462,798,474원",
      date: "2023.06.20",
      tags: ["신규", "간이법", "프로젝트 종료"],
    },
  ];

  // 타겟 사용자 데이터
  const targetUsers = [
    {
      title: "SW 사업 기획자",
      stage: "비용 파악 단계",
      items: ["SW 개발비/제개발비", "SW 유지관리비"],
      features: ["AI로 쉽게", "AI로 빠르게", "더 똑똑하게"],
      value: [
        "축적된 데이터를 활용한 AI 추천/자동화",
        "신기술 적용하여 비용 산정 정확도 향상",
      ],
    },
    {
      title: "개발자/운영자",
      stage: "사업 관리 단계",
      items: ["SW 사업 진행 관리", "SW 변경 관리"],
      features: ["프로젝트 현황을 한눈에", "비교/추적/변경"],
      value: ["상세한 개발규모 파악", "기능 변경에 따른 변경 비용 관리"],
    },
    {
      title: "SW 사업 관리자",
      stage: "사업 관리+ (To-be)",
      items: ["인력 관리", "출부선 관리", "일감 관리"],
      features: ["사업에 필요한 모든것", "All in One SW 사업 관리"],
      value: [
        "SW 사업 발주사/수주사 누구나",
        "업체 규모 상관없이 SW 사업에 필요한 FPMate",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar
        logoText="FPMate"
        links={[
          { label: "소개", href: "#about" },
          { label: "기능", href: "#features" },
          { label: "인사이트", href: "#insights" },
          { label: "문의", href: "#contact" },
        ]}
        actions={
          <>
            <Button variant="ghost" size="small">
              로그인/회원가입
            </Button>
            <Button variant="primary" size="small">
              제품도입문의
            </Button>
          </>
        }
        sticky
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* 배경 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50" />

        {/* 3D 기하학적 요소들 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* 왼쪽 상단 - 초록색 큐브 스택 */}
          <div className="absolute top-20 left-10 lg:left-20">
            <div className="relative w-32 h-32 lg:w-40 lg:h-40">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/30 to-emerald-500/30 transform rotate-12 rounded-lg shadow-lg" />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 transform rotate-6 translate-x-2 translate-y-2 rounded-lg shadow-md" />
              <div className="absolute inset-0 bg-gradient-to-br from-teal-300/25 to-cyan-500/25 transform -rotate-3 translate-x-4 translate-y-4 rounded-lg shadow-sm" />
            </div>
          </div>

          {/* 왼쪽 중단 - 데이터 박스 */}
          <div className="absolute top-1/2 left-5 lg:left-16 transform -translate-y-1/2">
            <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-teal-300/25 to-cyan-400/25 rounded-xl shadow-lg transform rotate-45" />
          </div>

          {/* 오른쪽 상단 - 파란색 원형 및 리본 */}
          <div className="absolute top-16 right-10 lg:right-24">
            <div className="relative w-40 h-40 lg:w-48 lg:h-48">
              <div className="absolute top-0 right-0 w-36 h-36 lg:w-44 lg:h-44 bg-gradient-to-br from-cyan-300/30 to-blue-400/30 rounded-full shadow-xl" />
              <div className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-br from-blue-400/25 to-indigo-500/25 rounded-full shadow-lg" />
              {/* 리본 효과 */}
              <div className="absolute top-12 right-0 w-40 h-8 bg-gradient-to-r from-cyan-400/20 to-transparent transform -rotate-12" />
            </div>
          </div>

          {/* 오른쪽 중단 - 파이 차트 */}
          <div className="absolute top-1/2 right-5 lg:right-20 transform -translate-y-1/2">
            <div className="relative w-28 h-28 lg:w-36 lg:h-36">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300/25 to-cyan-400/25 rounded-full shadow-lg" />
              {/* 파이 차트 효과 */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-indigo-400/30 to-transparent rounded-full"
                style={{
                  clipPath: "polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)",
                }}
              />
            </div>
          </div>

          {/* 중앙 - 연결선과 점들 */}
          <svg
            className="absolute inset-0 w-full h-full opacity-20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#10b981", stopOpacity: 0.6 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#06b6d4", stopOpacity: 0.6 }}
                />
              </linearGradient>
              <linearGradient
                id="lineGrad2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#06b6d4", stopOpacity: 0.6 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#3b82f6", stopOpacity: 0.6 }}
                />
              </linearGradient>
            </defs>
            {/* 수평 점선 */}
            <line
              x1="15%"
              y1="30%"
              x2="85%"
              y2="30%"
              stroke="url(#lineGrad1)"
              strokeWidth="2"
              strokeDasharray="8,8"
            />
            <line
              x1="15%"
              y1="50%"
              x2="85%"
              y2="50%"
              stroke="url(#lineGrad1)"
              strokeWidth="2"
              strokeDasharray="8,8"
            />
            <line
              x1="15%"
              y1="70%"
              x2="85%"
              y2="70%"
              stroke="url(#lineGrad1)"
              strokeWidth="2"
              strokeDasharray="8,8"
            />
            {/* 대각선 */}
            <line
              x1="20%"
              y1="25%"
              x2="80%"
              y2="75%"
              stroke="url(#lineGrad2)"
              strokeWidth="1.5"
              strokeDasharray="6,6"
            />
            {/* 데이터 포인트 */}
            <circle cx="20%" cy="30%" r="5" fill="#10b981" opacity="0.5" />
            <circle cx="50%" cy="50%" r="6" fill="#06b6d4" opacity="0.5" />
            <circle cx="80%" cy="70%" r="5" fill="#3b82f6" opacity="0.5" />
            <circle cx="35%" cy="40%" r="4" fill="#14b8a6" opacity="0.4" />
            <circle cx="65%" cy="60%" r="4" fill="#0ea5e9" opacity="0.4" />
          </svg>

          {/* 하단 - 다양한 3D 요소들 */}
          <div className="absolute bottom-20 left-1/4 transform -translate-x-1/2">
            <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-emerald-300/20 to-teal-400/20 rounded-2xl shadow-xl transform rotate-12" />
          </div>

          <div className="absolute bottom-24 right-1/4 transform translate-x-1/2">
            <div className="relative w-28 h-28 lg:w-36 lg:h-36">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/20 to-blue-400/20 rounded-xl shadow-lg transform -rotate-6" />
              {/* 작은 정육면체 */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-blue-400/30 to-indigo-500/30 rounded-md shadow-md" />
            </div>
          </div>

          {/* 하단 중앙 - 원형 플랫폼 */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="w-48 h-16 bg-gradient-to-r from-emerald-300/15 via-cyan-300/15 to-blue-300/15 rounded-full blur-sm" />
          </div>
        </div>

        <Hero
          title="FPMate로 내 프로젝트의 가치를 높이세요"
          description="Fine Project + Mate = FPMate"
          actions={
            <>
              <Button variant="primary" size="large">
                시작하기
              </Button>
              <Button variant="secondary" size="large">
                자세히 보기
              </Button>
            </>
          }
          badge={
            <Badge variant="info" size="medium">
              GS인증1등급
            </Badge>
          }
          align="center"
          size="large"
          className="relative z-10"
        />
      </div>

      {/* FPMate 소개 Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <Heading level="2" className="mb-8">
              FPMate는?
            </Heading>
            <div className="max-w-3xl mx-auto space-y-6">
              <Text size="large" color="primary" className="leading-relaxed">
                FPMate는 SW 사업 파트너로서 SW 사업 관리를 돕고자
                탄생하였습니다.
              </Text>
              <div className="space-y-4 mt-8">
                <Text
                  size="regular"
                  color="secondary"
                  className="leading-relaxed"
                >
                  SW 사업을 기획하고 계신가요? FPMate에서 필요한 비용을
                  알아보세요.
                </Text>
                <Text
                  size="regular"
                  color="secondary"
                  className="leading-relaxed"
                >
                  SW 사업을 진행하고 계신가요? FPMate로 프로젝트의 비용을
                  추적해보세요.
                </Text>
                <Text
                  size="regular"
                  color="secondary"
                  className="leading-relaxed"
                >
                  SW 사업이 완료되셨나요? FPMate로 운영에 필요한 비용을
                  알아보세요.
                </Text>
              </div>
              <div className="mt-10 pt-8 border-t border-gray-200">
                <Text size="small" color="tertiary" className="italic">
                  * FPMate에서는 국제표준(ISO/IEC 14143)에 기반한 방법으로 SW
                  사업 비용을 산정합니다.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 기능 Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <Heading level="2" className="mb-8">
              FPMate로 SW 사업 비용 산정과 관리를 한번에
            </Heading>
            <div className="max-w-3xl mx-auto space-y-4">
              <Text size="large" color="secondary" className="leading-relaxed">
                SW 사업 비용 산정 어떻게 해야 될지 막막하시죠?
              </Text>
              <Text
                size="regular"
                color="secondary"
                className="leading-relaxed"
              >
                FPMate는 AI 비서와 함께 쉽고 빠르게 SW 사업 비용을 알아 볼 수
                있습니다.
              </Text>
              <Text
                size="regular"
                color="secondary"
                className="leading-relaxed"
              >
                사업 단계별 변경 관리도 어렵지 않아요.
              </Text>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card variant="elevated" padding="large" className="text-center">
              <CardContent>
                <div className="mb-6 text-6xl">🤖</div>
                <Heading level="4" className="mb-4">
                  AI 기반 자동 산정
                </Heading>
                <Text color="secondary">
                  AI 비서가 프로젝트 정보를 분석하여 정확한 비용을 자동으로
                  산정합니다
                </Text>
              </CardContent>
            </Card>

            <Card variant="elevated" padding="large" className="text-center">
              <CardContent>
                <div className="mb-6 text-6xl">⚡</div>
                <Heading level="4" className="mb-4">
                  빠른 비용 산정
                </Heading>
                <Text color="secondary">
                  국제 표준 기반의 검증된 방법으로 신속하게 비용을 계산합니다
                </Text>
              </CardContent>
            </Card>

            <Card variant="elevated" padding="large" className="text-center">
              <CardContent>
                <div className="mb-6 text-6xl">📊</div>
                <Heading level="4" className="mb-4">
                  체계적 변경 관리
                </Heading>
                <Text color="secondary">
                  프로젝트 단계별 변경사항을 추적하고 비용 변화를 관리합니다
                </Text>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 인사이트 기능 Section */}
      <section id="insights" className="py-24 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <Heading level="2" className="mb-8">
              SW 사업 추진 인사이트+
            </Heading>
            <div className="max-w-3xl mx-auto space-y-4">
              <Text size="large" color="secondary" className="leading-relaxed">
                고유 작업 공간에서 그동안 작업했던 SW 사업 비용 산정 내역을
                한눈에 파악해보세요.
              </Text>
              <Text
                size="regular"
                color="secondary"
                className="leading-relaxed"
              >
                리포팅 기능을 통해 소프트웨어 사업 추진에 인사이트를 더해
                드립니다.
              </Text>
            </div>
          </div>

          {/* 프로젝트 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {projectCards.map((project, index) => (
              <Card key={index} variant="bordered" padding="large">
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>
                    <Text size="small" color="tertiary" className="mt-2">
                      {project.projectName}
                    </Text>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <Text size="small" color="secondary">
                        총 기능점수
                      </Text>
                      <Text size="small" weight="semibold" color="primary">
                        {project.fp}
                      </Text>
                    </div>
                    <div className="flex justify-between items-center">
                      <Text size="small" color="secondary">
                        소프트웨어 개발비
                      </Text>
                      <Text size="small" weight="semibold" color="primary">
                        {project.cost}
                      </Text>
                    </div>
                    <div className="flex justify-between items-center">
                      <Text size="small" color="secondary">
                        산정완료일
                      </Text>
                      <Text size="small" color="tertiary">
                        {project.date}
                      </Text>
                    </div>
                    {project.manager && (
                      <div className="flex justify-between items-center">
                        <Text size="small" color="secondary">
                          담당자
                        </Text>
                        <Text size="small" color="tertiary">
                          {project.manager}
                        </Text>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="default" size="small">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FP 리포트 상세 정보 */}
          <div className="">
            <Card
              variant="elevated"
              padding="large"
              className="-rotate-z-20 rotate-y-10 rotate-x-30"
            >
              <CardHeader>
                <CardTitle>FP 리포트 상세</CardTitle>
                <CardDescription>
                  <Text size="small" color="secondary" className="mt-2">
                    프로젝트: 서비스 FP 산정 (총 기능점수: 1,082.9 FP)
                  </Text>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* 개발원가 산정 */}
                  <div>
                    <Heading level="5" className="mb-4">
                      개발원가 산정
                    </Heading>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between py-2 border-b">
                        <Text size="small" color="secondary">
                          총 기능점수
                        </Text>
                        <Text size="small" weight="medium">
                          1,082.9
                        </Text>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <Text size="small" color="secondary">
                          기능점수당 단가
                        </Text>
                        <Text size="small" weight="medium">
                          553,114원
                        </Text>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <Text size="small" color="secondary">
                          보정 후 개발원가
                        </Text>
                        <Text size="small" weight="medium">
                          540,567,383원
                        </Text>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <Text size="small" color="secondary">
                          이윤 (15%)
                        </Text>
                        <Text size="small" weight="medium">
                          81,085,107원
                        </Text>
                      </div>
                      <div className="flex justify-between py-3 mt-2 bg-blue-50 px-3 rounded-lg">
                        <Text size="small" weight="semibold" color="primary">
                          소프트웨어 개발비
                        </Text>
                        <Text size="small" weight="bold" color="primary">
                          621,652,490원
                        </Text>
                      </div>
                    </div>
                    <Text size="tiny" color="tertiary" className="mt-3">
                      ※ 2023년 기준 SW 개발사업 1FP 당 단가 553,114원
                    </Text>
                  </div>

                  {/* 보정계수 산정 */}
                  <div>
                    <Heading level="5" className="mb-4">
                      보정계수 산정
                    </Heading>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between py-2 border-b">
                        <Text size="small" color="secondary">
                          SW규모
                        </Text>
                        <Text size="small" weight="medium">
                          0.9058
                        </Text>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <Text size="small" color="secondary">
                          연계복잡성
                        </Text>
                        <Text size="small" weight="medium">
                          0.94
                        </Text>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <Text size="small" color="secondary">
                          성능 요구수준
                        </Text>
                        <Text size="small" weight="medium">
                          1.00
                        </Text>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <Text size="small" color="secondary">
                          운영환경 호환성
                        </Text>
                        <Text size="small" weight="medium">
                          1.06
                        </Text>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <Text size="small" color="secondary">
                          보안성 요구수준
                        </Text>
                        <Text size="small" weight="medium">
                          1.00
                        </Text>
                      </div>
                    </div>
                  </div>

                  {/* FP 집계 */}
                  <div className="md:col-span-2">
                    <Heading level="5" className="mb-4">
                      FP 집계
                    </Heading>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b-2 border-gray-300">
                            <th className="text-left py-3 px-3">
                              <Text size="small" weight="semibold">
                                구분
                              </Text>
                            </th>
                            <th className="text-center py-3 px-3">
                              <Text size="small" weight="semibold">
                                ILF
                              </Text>
                            </th>
                            <th className="text-center py-3 px-3">
                              <Text size="small" weight="semibold">
                                EIF
                              </Text>
                            </th>
                            <th className="text-center py-3 px-3">
                              <Text size="small" weight="semibold">
                                EI
                              </Text>
                            </th>
                            <th className="text-center py-3 px-3">
                              <Text size="small" weight="semibold">
                                EO
                              </Text>
                            </th>
                            <th className="text-center py-3 px-3">
                              <Text size="small" weight="semibold">
                                EQ
                              </Text>
                            </th>
                            <th className="text-center py-3 px-3">
                              <Text size="small" weight="semibold">
                                계
                              </Text>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-3 px-3">
                              <Text size="small" color="secondary">
                                기능수
                              </Text>
                            </td>
                            <td className="text-center py-3 px-3">
                              <Text size="small">2</Text>
                            </td>
                            <td className="text-center py-3 px-3">
                              <Text size="small">47</Text>
                            </td>
                            <td className="text-center py-3 px-3">
                              <Text size="small">94</Text>
                            </td>
                            <td className="text-center py-3 px-3">
                              <Text size="small">10</Text>
                            </td>
                            <td className="text-center py-3 px-3">
                              <Text size="small">99</Text>
                            </td>
                            <td className="text-center py-3 px-3">
                              <Text size="small" weight="semibold">
                                252
                              </Text>
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 px-3">
                              <Text size="small" color="secondary">
                                기능 점수
                              </Text>
                            </td>
                            <td className="text-center py-3 px-3">
                              <Text size="small">15</Text>
                            </td>
                            <td className="text-center py-3 px-3">
                              <Text size="small">253.8</Text>
                            </td>
                            <td className="text-center py-3 px-3">
                              <Text size="small">376</Text>
                            </td>
                            <td className="text-center py-3 px-3">
                              <Text size="small">52</Text>
                            </td>
                            <td className="text-center py-3 px-3">
                              <Text size="small">386.1</Text>
                            </td>
                            <td className="text-center py-3 px-3">
                              <Text size="small" weight="semibold">
                                1,082.9
                              </Text>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-3">
                              <Text size="small" color="secondary">
                                비중
                              </Text>
                            </td>
                            <td className="text-center py-3 px-3">
                              <Text size="small" color="tertiary">
                                0.8%
                              </Text>
                            </td>
                            <td className="text-center py-3 px-3">
                              <Text size="small" color="tertiary">
                                18.7%
                              </Text>
                            </td>
                            <td className="text-center py-3 px-3">
                              <Text size="small" color="tertiary">
                                37.3%
                              </Text>
                            </td>
                            <td className="text-center py-3 px-3">
                              <Text size="small" color="tertiary">
                                4.0%
                              </Text>
                            </td>
                            <td className="text-center py-3 px-3">
                              <Text size="small" color="tertiary">
                                39.3%
                              </Text>
                            </td>
                            <td className="text-center py-3 px-3">
                              <Text size="small" weight="semibold">
                                100%
                              </Text>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 브랜드 메시지 Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <Heading level="2" className="mb-8">
              진화하는 FPMate, SW 사업 성공 도우미
            </Heading>
            <Text size="large" color="secondary" className="max-w-3xl mx-auto">
              당신의 SW 사업 성공과 Fine 프로젝트를 위하여 FPMate는 지속적으로
              진화합니다.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {targetUsers.map((user, index) => (
              <Card key={index} variant="bordered" padding="large">
                <CardHeader>
                  <Badge variant="primary" size="medium" className="mb-3">
                    {user.title}
                  </Badge>
                  <CardTitle>{user.stage}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <Text
                        size="small"
                        weight="semibold"
                        color="secondary"
                        className="mb-2"
                      >
                        제공 기능
                      </Text>
                      <ul className="space-y-1">
                        {user.items.map((item, idx) => (
                          <li key={idx}>
                            <Text size="small" color="tertiary">
                              • {item}
                            </Text>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <Text
                        size="small"
                        weight="semibold"
                        color="secondary"
                        className="mb-2"
                      >
                        FPMate 기능
                      </Text>
                      <div className="flex flex-wrap gap-2">
                        {user.features.map((feature, idx) => (
                          <Badge key={idx} variant="info" size="small">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Text
                        size="small"
                        weight="semibold"
                        color="secondary"
                        className="mb-2"
                      >
                        제공 가치
                      </Text>
                      <ul className="space-y-1">
                        {user.value.map((val, idx) => (
                          <li key={idx}>
                            <Text size="small" color="tertiary">
                              • {val}
                            </Text>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50"
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <Card variant="elevated" padding="large" className="text-center">
            <CardContent>
              <Heading level="2" className="mb-6">
                FPMate와 함께 시작하세요
              </Heading>
              <Text
                size="large"
                color="secondary"
                className="mb-8 max-w-2xl mx-auto"
              >
                SW 사업의 성공적인 관리와 정확한 비용 산정을 위한 최고의 파트너,
                FPMate를 지금 바로 경험해보세요.
              </Text>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="primary" size="large">
                  제품도입문의
                </Button>
                <Button variant="secondary" size="large">
                  무료 체험하기
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <Footer
        logoText="FPMate"
        description="SW 사업 파트너로서 SW 사업 관리를 돕고자 탄생한 FPMate는 국제표준(ISO/IEC 14143)에 기반한 방법으로 SW 사업 비용을 산정합니다."
        sections={[
          {
            title: "제품",
            links: [
              { label: "소개", href: "#about" },
              { label: "기능", href: "#features" },
              { label: "인사이트", href: "#insights" },
            ],
          },
          {
            title: "지원",
            links: [
              { label: "이용자 약관", href: "#terms" },
              { label: "개인정보 처리지침", href: "#privacy" },
              { label: "제품문의", href: "mailto:fpmate@ibksystem.co.kr" },
            ],
          },
          {
            title: "회사",
            links: [
              { label: "서울시 중구 퇴계로 141-7", href: "#" },
              { label: "뉴서울빌딩 10F~13F", href: "#" },
              { label: "(주)IBK 시스템", href: "#" },
            ],
          },
          {
            title: "연락처",
            links: [
              { label: "대표전화: 02.3407.6600", href: "tel:02-3407-6600" },
              { label: "팩스: 02.3407.6601", href: "#" },
              {
                label: "fpmate@ibksystem.co.kr",
                href: "mailto:fpmate@ibksystem.co.kr",
              },
            ],
          },
        ]}
        bottomText="© 2023 IBK System Co. Ltd All rights reserved."
      />
    </div>
  );
}

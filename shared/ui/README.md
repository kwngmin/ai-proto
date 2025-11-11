# Shared UI Components

Linear 디자인 시스템 기반의 재사용 가능한 UI 컴포넌트 라이브러리입니다.

## 아키텍처

이 컴포넌트 라이브러리는 **FSD(Feature Sliced Design)** 아키텍처를 따릅니다.

```
shared/
├── ui/           # 재사용 가능한 UI 컴포넌트
├── lib/          # 유틸리티 함수
├── types/        # 타입 정의
└── config/       # 설정 파일 (theme.json)
```

## 사용 가능한 컴포넌트

### Layout Components

#### Navbar
네비게이션 바 컴포넌트 (모바일 반응형 지원)

```tsx
import { Navbar, Button } from '@/shared/ui';

<Navbar
  logoText="MyApp"
  links={[
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing', badge: 'New' },
    { label: 'Docs', href: '#docs' },
  ]}
  actions={
    <>
      <Button variant="ghost" size="small">Sign In</Button>
      <Button variant="primary" size="small">Sign Up</Button>
    </>
  }
  sticky
  transparent
/>
```

**Props:**
- `logo?: ReactNode` - 커스텀 로고 컴포넌트
- `logoText?: string` - 로고 텍스트 (기본값: 'Linear')
- `links?: NavLink[]` - 네비게이션 링크 배열
  - `NavLink`: `{ label: string; href: string; badge?: string }`
- `actions?: ReactNode` - 우측 액션 버튼들
- `sticky?: boolean` - 스크롤 시 상단 고정 (기본값: true)
- `transparent?: boolean` - 투명 배경 사용 (기본값: false)

**Features:**
- 모바일 반응형 (햄버거 메뉴)
- Motion 애니메이션
- 뱃지 지원
- Sticky 헤더
- 투명 배경 옵션

#### Footer
푸터 컴포넌트 (다단 레이아웃 지원)

```tsx
import { Footer } from '@/shared/ui';

<Footer
  logoText="MyApp"
  description="Making software development simple."
  sections={[
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Blog', href: '#blog' },
      ],
    },
  ]}
  socialLinks={[
    {
      icon: <TwitterIcon />,
      href: '#twitter',
      label: 'Twitter',
    },
  ]}
  bottomText="© 2025 MyApp"
  bottomLinks={[
    { label: 'Privacy', href: '#privacy' },
    { label: 'Terms', href: '#terms' },
  ]}
/>
```

**Props:**
- `logo?: ReactNode` - 커스텀 로고
- `logoText?: string` - 로고 텍스트
- `description?: string` - 푸터 설명
- `sections?: FooterSection[]` - 링크 섹션들
  - `FooterSection`: `{ title: string; links: FooterLink[] }`
  - `FooterLink`: `{ label: string; href: string }`
- `socialLinks?: SocialLink[]` - 소셜 미디어 링크들
- `bottomText?: string` - 하단 텍스트 (저작권 등)
- `bottomLinks?: FooterLink[]` - 하단 링크들

#### Hero
히어로 섹션 컴포넌트

```tsx
import { Hero, Badge, Button } from '@/shared/ui';

<Hero
  badge={<Badge variant="primary">New Release</Badge>}
  title="Build Better Products Faster"
  description="The modern development platform for teams."
  actions={
    <>
      <Button variant="primary" size="large">Get Started</Button>
      <Button variant="secondary" size="large">Learn More</Button>
    </>
  }
  image="https://example.com/hero-image.jpg"
  align="center"
  size="large"
  background="gradient"
/>
```

**Props:**
- `title: string` - 주요 제목 (필수)
- `description?: string` - 설명 텍스트
- `actions?: ReactNode` - 액션 버튼들
- `badge?: ReactNode` - 상단 뱃지
- `image?: string` - 우측 이미지 URL
- `align?: 'left' | 'center'` - 정렬 (기본값: 'center')
- `size?: 'default' | 'large'` - 크기 (기본값: 'default')
- `background?: 'default' | 'gradient' | 'image'` - 배경 타입
- `backgroundImage?: string` - 배경 이미지 URL

**Additional:**
- `HeroGridPattern` - 그리드 패턴 배경 컴포넌트

### Typography

#### Text
다양한 크기와 색상의 텍스트 컴포넌트

```tsx
import { Text } from '@/shared/ui';

<Text size="regular" color="primary" weight="normal">
  텍스트 내용
</Text>
```

**Props:**
- `as?: ElementType` - 렌더링할 HTML 요소 (기본값: 'span')
- `size?: 'tiny' | 'micro' | 'mini' | 'small' | 'regular' | 'large'` - 텍스트 크기
- `weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'` - 텍스트 굵기
- `color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary'` - 텍스트 색상

#### Heading
제목 컴포넌트 (Level 1-9)

```tsx
import { Heading } from '@/shared/ui';

<Heading level="3" color="primary">
  제목 텍스트
</Heading>
```

**Props:**
- `as?: ElementType` - 렌더링할 HTML 요소 (기본값: level에 따라 자동)
- `level?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'` - 제목 레벨
- `color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary'` - 텍스트 색상

### Interactive Components

#### Button
다양한 스타일의 버튼 컴포넌트

```tsx
import { Button } from '@/shared/ui';

<Button variant="primary" size="medium" onClick={handleClick}>
  클릭하기
</Button>
```

**Props:**
- `variant?: 'primary' | 'secondary' | 'ghost' | 'danger'` - 버튼 스타일
- `size?: 'small' | 'medium' | 'large'` - 버튼 크기
- `fullWidth?: boolean` - 전체 너비 사용 여부
- `loading?: boolean` - 로딩 상태
- `disabled?: boolean` - 비활성화 상태

#### Input
폼 입력 컴포넌트

```tsx
import { Input } from '@/shared/ui';

<Input
  label="이메일"
  type="email"
  placeholder="example@email.com"
  error={error}
  helperText="도움말 텍스트"
  fullWidth
/>
```

**Props:**
- `label?: string` - 입력 필드 레이블
- `error?: string` - 에러 메시지
- `helperText?: string` - 도움말 텍스트
- `fullWidth?: boolean` - 전체 너비 사용 여부

### Layout Components

#### Card
카드 레이아웃 컴포넌트

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/shared/ui';

<Card variant="default">
  <CardHeader>
    <CardTitle>카드 제목</CardTitle>
    <CardDescription>카드 설명</CardDescription>
  </CardHeader>
  <CardContent>
    카드 내용
  </CardContent>
  <CardFooter>
    <Button>확인</Button>
  </CardFooter>
</Card>
```

**Card Props:**
- `variant?: 'default' | 'bordered' | 'elevated'` - 카드 스타일
- `padding?: 'none' | 'small' | 'medium' | 'large'` - 내부 여백

#### CardImage
카드 내부에 이미지를 표시하는 컴포넌트

```tsx
import { Card, CardImage, CardHeader, CardTitle } from '@/shared/ui';

<Card padding="none">
  <CardImage
    src="/image.jpg"
    alt="설명"
    aspectRatio="video"
  />
  <div className="p-4">
    <CardHeader>
      <CardTitle>카드 제목</CardTitle>
    </CardHeader>
  </div>
</Card>
```

**Props:**
- `src: string` - 이미지 URL (필수)
- `alt: string` - 이미지 설명 (필수)
- `aspectRatio?: 'square' | 'video' | 'wide' | 'portrait'` - 이미지 비율
  - `square`: 1:1
  - `video`: 16:9 (기본값)
  - `wide`: 21:9
  - `portrait`: 3:4

### Display Components

#### Badge
뱃지/라벨 컴포넌트

```tsx
import { Badge } from '@/shared/ui';

<Badge variant="success" size="medium">
  Active
</Badge>
```

**Props:**
- `variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'` - 뱃지 스타일
- `size?: 'small' | 'medium' | 'large'` - 뱃지 크기

### Interactive Components

#### Carousel
이미지나 콘텐츠를 슬라이드로 표시하는 캐로셀 컴포넌트

```tsx
import { Carousel, CarouselSlide } from '@/shared/ui';

<Carousel autoPlay autoPlayInterval={5000} showDots showArrows>
  <CarouselSlide>
    <Card>첫 번째 슬라이드</Card>
  </CarouselSlide>
  <CarouselSlide>
    <Card>두 번째 슬라이드</Card>
  </CarouselSlide>
  <CarouselSlide>
    <Card>세 번째 슬라이드</Card>
  </CarouselSlide>
</Carousel>
```

**Props:**
- `children: ReactNode[]` - 캐로셀에 표시할 슬라이드 요소들
- `autoPlay?: boolean` - 자동 재생 여부 (기본값: false)
- `autoPlayInterval?: number` - 자동 재생 간격(ms) (기본값: 5000)
- `showDots?: boolean` - 하단 인디케이터 표시 여부 (기본값: true)
- `showArrows?: boolean` - 좌우 화살표 표시 여부 (기본값: true)

**Features:**
- Motion 라이브러리를 사용한 부드러운 애니메이션
- 자동 재생 기능
- 키보드 및 마우스 내비게이션
- 반응형 디자인
- 접근성 고려 (ARIA 속성)

## 테마

모든 컴포넌트는 `shared/config/theme.json`에 정의된 Linear 디자인 시스템을 기반으로 합니다.

### CSS 변수
테마 색상과 스타일은 CSS 변수로 적용되어 있어, 전역적으로 일관된 디자인을 유지합니다.

```css
/* 예시 */
--bg-primary: #08090a;
--text-primary: #f7f8f8;
--brand-bg: #5e6ad2;
--accent-default: #7170ff;
```

### 타입 안전성
TypeScript를 사용하여 테마 구조에 대한 타입 안전성을 제공합니다.

```tsx
import { theme, getThemeValue } from '@/shared/lib/theme';

const primaryBg = getThemeValue('colors.background.primary');
```

## 데모 페이지

모든 컴포넌트의 실제 동작과 다양한 변형을 확인할 수 있는 데모 페이지가 `/components` 경로에 제공됩니다.

```bash
npm run dev
# http://localhost:3000/components 접속
```

## 기술 스택

- **React 19** - 최신 React 기능 활용
- **TypeScript** - 타입 안전성
- **Tailwind CSS v4** - 스타일링
- **Next.js 15** - 프레임워크
- **FSD 아키텍처** - 확장 가능한 구조

## 개발 원칙

1. **재사용성**: 모든 컴포넌트는 프로젝트 전반에서 재사용 가능하도록 설계
2. **타입 안전성**: TypeScript를 활용한 엄격한 타입 체크
3. **접근성**: 웹 표준과 접근성 지침 준수
4. **일관성**: Linear 디자인 시스템 기반의 일관된 디자인
5. **확장성**: FSD 아키텍처를 통한 확장 가능한 구조


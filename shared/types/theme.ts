/**
 * Linear 디자인 시스템 테마 타입 정의
 */
export interface Theme {
  metadata: {
    name: string;
    version: string;
    description: string;
    colorScheme: "light" | "dark";
    extractedDate: string;
  };
  colors: {
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
      quinary: string;
      marketing: string;
      tint: string;
      translucent: string;
      level0: string;
      level1: string;
      level2: string;
      level3: string;
    };
    foreground: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
    };
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
    };
    border: {
      primary: string;
      secondary: string;
      tertiary: string;
      translucent: string;
    };
    line: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
      tint: string;
    };
    brand: {
      background: string;
      text: string;
    };
    accent: {
      default: string;
      hover: string;
      tint: string;
    };
    link: {
      primary: string;
      hover: string;
    };
    selection: {
      background: string;
      text: string;
      dim: string;
    };
    ui: {
      red: string;
      orange: string;
      yellow: string;
      green: string;
      blue: string;
      indigo: string;
      white: string;
      black: string;
    };
    product: {
      linearPlan: string;
      linearBuild: string;
      linearSecurity: string;
    };
  };
  typography: {
    fontFamily: {
      regular: string;
      monospace: string;
      serifDisplay: string;
      emoji: string;
    };
    fontWeight: {
      light: string;
      normal: string;
      medium: string;
      semibold: string;
      bold: string;
    };
    fontSize: {
      micro: string;
      microPlus: string;
      mini: string;
      miniPlus: string;
      small: string;
      smallPlus: string;
      regular: string;
      regularPlus: string;
      large: string;
      largePlus: string;
      title1: string;
      title2: string;
      title3: string;
    };
    text: {
      tiny: { size: string; lineHeight: string; letterSpacing: string };
      micro: { size: string; lineHeight: string; letterSpacing: string };
      mini: { size: string; lineHeight: string; letterSpacing: string };
      small: { size: string; lineHeight: string; letterSpacing: string };
      regular: { size: string; lineHeight: string; letterSpacing: string };
      large: { size: string; lineHeight: string; letterSpacing: string };
    };
    title: {
      [key: string]: {
        size: string;
        lineHeight: string;
        letterSpacing: string;
      };
    };
  };
  spacing: {
    page: {
      paddingInline: string;
      paddingBlock: string;
      paddingLeft: string;
      paddingRight: string;
      maxWidth: string;
    };
    prose: {
      maxWidth: string;
    };
    minTapSize: string;
  };
  borderRadius: {
    [key: string]: string;
  };
  shadows: {
    [key: string]: string;
  };
  animation: {
    easing: {
      [key: string]: string;
    };
    speed: {
      quickTransition: string;
      regularTransition: string;
      highlightFadeIn: string;
      highlightFadeOut: string;
    };
  };
  header: {
    height: string;
    background: string;
    border: string;
    blur: string;
  };
  zIndex: {
    [key: string]: string;
  };
  focusRing: {
    width: string;
    offset: string;
    color: string;
    outline: string;
  };
  scrollbar: {
    size: string;
    sizeActive: string;
    gap: string;
    color: string;
    colorHover: string;
    colorActive: string;
  };
}

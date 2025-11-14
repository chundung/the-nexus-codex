import React from 'react';
import { Container, Title, Card } from '../components/common/UI';
import { useAppSelector } from '../store/hooks';

const TutorialPage = ({ onSubtaskClick }) => {
  const { isLoggedIn } = useAppSelector(state => state.user);

  const task1Summary = {
    title: "태스크 1: 프로젝트 초기 설정 및 기본 스택 통합",
    description: "React.js 애플리케이션을 초기화하고, Redux Toolkit, Styled-components, Chart.js, Framer Motion 등 핵심 프론트엔드 기술 스택을 통합합니다. 개발 환경을 설정하고 빌드 프로세스를 최적화합니다.",
    totalSubtasks: 5,
    completedSubtasks: 5,
    status: "completed"
  };

  const task2Summary = {
    title: "태스크 2: 기본 레이아웃 및 반응형 디자인 컴포넌트 구현",
    description: "애플리케이션의 전반적인 UI/UX 고려사항에 따라 깔끔하고 미니멀하며 반응형인 기본 레이아웃 컴포넌트를 설계하고 구현합니다. 다크/라이트 모드 지원을 위한 토글 기능을 포함합니다.",
    totalSubtasks: 5,
    completedSubtasks: 5,
    status: "completed"
  };

  const task3Summary = {
    title: "태스크 3: 타이핑 연습 텍스트 표시 컴포넌트 개발",
    description: "사용자가 화면에 표시된 한글 텍스트를 따라 입력할 수 있도록 연습 텍스트를 렌더링하는 UI 컴포넌트를 개발합니다. 이 컴포넌트는 입력 상태에 따라 텍스트의 각 문자를 동적으로 표시할 수 있어야 합니다.",
    totalSubtasks: 5,
    completedSubtasks: 5,
    status: "completed"
  };

  const subtasks = [
    {
      id: 1,
      title: "React 프로젝트 초기화 및 핵심 의존성 설치",
      description: "Vite를 사용하여 React 프로젝트를 생성하고 핵심 라이브러리를 설치합니다.",
      topics: [
        "Vite로 React 프로젝트 생성",
        "핵심 의존성 설치 (Redux Toolkit, Styled-components 등)",
        "package.json 구성 이해",
        "개발 서버 실행 및 테스트"
      ],
      codeExamples: [
        {
          title: "Vite 프로젝트 생성",
          code: `npm create vite@latest korean-typing-practice -- --template react`
        },
        {
          title: "핵심 의존성 설치",
          code: `npm install @reduxjs/toolkit react-redux styled-components framer-motion react-router-dom chart.js recharts`
        }
      ]
    },
    {
      id: 2,
      title: "Styled-components 환경 설정 및 전역 스타일 정의",
      description: "Styled-components를 설정하고 전역 스타일과 테마 시스템을 구축합니다.",
      topics: [
        "Styled-components 기본 개념",
        "ThemeProvider 설정",
        "전역 스타일 (GlobalStyle) 정의",
        "테마 객체 구성",
        "CSS-in-JS 장점 이해"
      ],
      codeExamples: [
        {
          title: "테마 객체 정의",
          code: `export const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    typing: {
      correct: '#28a745',
      incorrect: '#dc3545',
      untyped: '#6c757d',
    }
  },
  fonts: {
    primary: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    monospace: "'Fira Code', 'Courier New', monospace",
  }
};`
        },
        {
          title: "전역 스타일 정의",
          code: `export const GlobalStyle = createGlobalStyle\`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: \${({ theme }) => theme.fonts.primary};
    background-color: \${({ theme }) => theme.colors.background};
  }
\`;`
        }
      ]
    },
    {
      id: 3,
      title: "Redux Toolkit 스토어 및 기본 예제 슬라이스 구성",
      description: "Redux Toolkit을 사용하여 상태 관리 시스템을 구축합니다.",
      topics: [
        "Redux Toolkit 기본 개념",
        "configureStore로 스토어 설정",
        "createSlice로 슬라이스 생성",
        "useSelector와 useDispatch 사용법",
        "비동기 액션 (createAsyncThunk)"
      ],
      codeExamples: [
        {
          title: "스토어 설정",
          code: `export const store = configureStore({
  reducer: {
    typing: typingReducer,
    user: userReducer,
    stats: statsReducer,
  },
});`
        },
        {
          title: "슬라이스 생성",
          code: `const typingSlice = createSlice({
  name: 'typing',
  initialState,
  reducers: {
    startTyping: (state) => {
      state.isActive = true;
      state.startTime = Date.now();
    },
    updateTypedText: (state, action) => {
      state.typedText = action.payload;
    },
  },
});`
        }
      ]
    },
    {
      id: 4,
      title: "기본 라우팅 구조 및 초기 레이아웃 컴포넌트 구현",
      description: "싱글 페이지 애플리케이션의 라우팅 구조와 레이아웃을 구현합니다.",
      topics: [
        "SPA 라우팅 개념",
        "상태 기반 내비게이션",
        "Layout 컴포넌트 구조",
        "Header, Footer, Main 컴포넌트",
        "반응형 내비게이션"
      ],
      codeExamples: [
        {
          title: "Layout 컴포넌트",
          code: `const Layout = ({ children, currentPage, onNavClick }) => {
  return (
    <LayoutContainer>
      <Header>
        <Nav>
          <NavLink onClick={() => onNavClick('practice')}>
            연습
          </NavLink>
        </Nav>
      </Header>
      {children}
      <Footer />
    </LayoutContainer>
  );
};`
        }
      ]
    },
    {
      id: 5,
      title: "개발 환경 최적화 및 빌드 스크립트 구성",
      description: "ESLint, Prettier를 설정하고 빌드 프로세스를 최적화합니다.",
      topics: [
        "ESLint 규칙 설정",
        "Prettier 코드 포맷팅",
        "Vite 빌드 최적화",
        "코드 분할 (Code Splitting)",
        "Terser 압축"
      ],
      codeExamples: [
        {
          title: "ESLint 설정",
          code: `export default defineConfig([
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      prettier,
    ],
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
]);`
        },
        {
          title: "Vite 빌드 최적화",
          code: `export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          redux: ['@reduxjs/toolkit', 'react-redux'],
          ui: ['styled-components', 'framer-motion'],
        },
      },
    },
  },
});`
        }
      ]
    }
  ];

  const task2Subtasks = [
    {
      id: '2-1',
      title: "전역 스타일 및 테마 시스템 초기 설정",
      description: "다크/라이트 모드를 지원하는 동적 테마 시스템을 구축하고 전역 스타일을 정의합니다.",
      topics: [
        "테마 디자인 토큰 구조",
        "라이트/다크 테마 색상 팔레트",
        "Redux를 통한 테마 상태 관리",
        "localStorage 테마 영속성",
        "시스템 테마 감지 기능",
        "CSS 변수 동적 적용"
      ],
      codeExamples: [
        {
          title: "라이트 테마 정의",
          code: `export const lightTheme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    background: '#ffffff',
    surface: '#f8f9fa',
    text: {
      primary: '#212529',
      secondary: '#6c757d',
      inverse: '#ffffff'
    }
  },
  fonts: {
    primary: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem'
  }
};`
        },
        {
          title: "테마 Redux 슬라이스",
          code: `const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    currentTheme: 'light',
    systemTheme: 'light'
  },
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.currentTheme);
    },
    setSystemTheme: (state, action) => {
      state.systemTheme = action.payload;
    }
  }
});`
        },
        {
          title: "동적 테마 적용",
          code: `const GlobalStyle = createGlobalStyle\`
  body {
    background-color: \${({ theme }) => theme.colors.background};
    color: \${({ theme }) => theme.colors.text.primary};
    transition: background-color \${({ theme }) => theme.transitions.normal};
  }
\`;`
        }
      ]
    },
    {
      id: '2-2',
      title: "기본 Layout 컴포넌트 구조 구현",
      description: "시맨틱 HTML을 사용한 반응형 레이아웃 컴포넌트를 구현합니다.",
      topics: [
        "시맨틱 HTML5 구조",
        "Header, Main, Footer 컴포넌트",
        "children prop 패턴",
        "접근성 고려사항",
        "스타일드 컴포넌트 구조",
        "네비게이션 통합"
      ],
      codeExamples: [
        {
          title: "Layout 컴포넌트 구조",
          code: `const Layout = ({ children, currentPage, onNavClick }) => {
  return (
    <LayoutContainer>
      <Header>
        <HeaderContainer>
          <Logo>한글 타이핑 연습</Logo>
          <Nav>
            <NavLink href="#practice" onClick={() => onNavClick('practice')}>
              연습
            </NavLink>
            <ThemeToggle />
          </Nav>
        </HeaderContainer>
      </Header>
      {children}
      <Footer>
        <FooterContainer>
          <p>&copy; 2024 한글 타이핑 연습</p>
        </FooterContainer>
      </Footer>
    </LayoutContainer>
  );
};`
        },
        {
          title: "스타일드 컴포넌트 레이아웃",
          code: `export const LayoutContainer = styled.div\`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
\`;

export const Header = styled.header\`
  background: \${({ theme }) => theme.colors.surface};
  box-shadow: \${({ theme }) => theme.shadows.sm};
  position: sticky;
  top: 0;
  z-index: 100;
\`;`
        }
      ]
    },
    {
      id: '2-3',
      title: "반응형 디자인 및 스타일 적용",
      description: "모바일 퍼스트 반응형 디자인을 구현하고 다양한 화면 크기에 최적화합니다.",
      topics: [
        "모바일 퍼스트 디자인 원칙",
        "반응형 브레이크포인트 설정",
        "미디어 쿼리 활용",
        "유동적인 타이포그래피",
        "반응형 간격 시스템",
        "플렉스박스와 그리드 레이아웃"
      ],
      codeExamples: [
        {
          title: "반응형 헤더 컨테이너",
          code: `export const HeaderContainer = styled.div\`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 \${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 \${({ theme }) => theme.spacing.md};
    flex-wrap: wrap;
    gap: \${({ theme }) => theme.spacing.sm};
  }

  @media (max-width: 480px) {
    padding: 0 \${({ theme }) => theme.spacing.sm};
  }
\`;`
        },
        {
          title: "반응형 네비게이션",
          code: `export const Nav = styled.nav\`
  display: flex;
  gap: \${({ theme }) => theme.spacing.lg};
  align-items: center;

  @media (max-width: 768px) {
    gap: \${({ theme }) => theme.spacing.md};
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: \${({ theme }) => theme.spacing.sm};
    width: 100%;
    justify-content: space-around;
  }
\`;`
        },
        {
          title: "반응형 타이포그래피",
          code: `export const Logo = styled.h1\`
  font-size: \${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: \${({ theme }) => theme.fontSizes.xl};
  }

  @media (max-width: 480px) {
    font-size: \${({ theme }) => theme.fontSizes.lg};
  }
\`;`
        }
      ]
    },
    {
      id: '2-4',
      title: "다크/라이트 모드 토글 기능 및 UI 구현",
      description: "사용자 친화적인 테마 전환 기능과 애니메이션 효과를 구현합니다.",
      topics: [
        "테마 토글 컴포넌트 디자인",
        "CSS 애니메이션과 트랜지션",
        "아이콘 기반 UI/UX",
        "접근성 고려사항",
        "상태 관리 연동",
        "사용자 인터랙션 처리"
      ],
      codeExamples: [
        {
          title: "테마 토글 컴포넌트",
          code: `const ThemeToggle = () => {
  const { currentTheme, toggle } = useTheme();
  const isDark = currentTheme === 'dark';

  return (
    <ToggleButton onClick={toggle} isDark={isDark}>
      <IconContainer isDark={isDark}>
        {isDark ? '🌙' : '☀️'}
      </IconContainer>
    </ToggleButton>
  );
};`
        },
        {
          title: "테마 토글 스타일",
          code: `export const ToggleButton = styled.button\`
  background: \${({ theme, isDark }) => 
    isDark ? theme.colors.primary : theme.colors.secondary};
  border: none;
  border-radius: 2rem;
  padding: 0.5rem;
  cursor: pointer;
  transition: all \${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: scale(1.05);
    box-shadow: \${({ theme }) => theme.shadows.md};
  }
\`;`
        },
        {
          title: "커스텀 훅",
          code: `export const useTheme = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectCurrentTheme);

  const toggle = () => {
    dispatch(toggleTheme());
  };

  return { currentTheme, toggle };
};`
        }
      ]
    },
    {
      id: '2-5',
      title: "헤더 및 푸터 컴포넌트 초기 구현 및 통합",
      description: "완성된 헤더와 푸터 컴포넌트를 레이아웃에 통합하고 최종 테스트를 수행합니다.",
      topics: [
        "컴포넌트 통합 패턴",
        "레이아웃 최적화",
        "성능 고려사항",
        "브라우저 호환성",
        "사용자 테스트",
        "코드 리뷰 및 리팩토링"
      ],
      codeExamples: [
        {
          title: "통합된 레이아웃",
          code: `const App = () => {
  const [currentPage, setCurrentPage] = useState('practice');

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <Layout currentPage={currentPage} onNavClick={handleNavClick}>
      <MainContent currentPage={currentPage} />
    </Layout>
  );
};`
        },
        {
          title: "푸터 컴포넌트",
          code: `export const Footer = styled.footer\`
  background: \${({ theme }) => theme.colors.dark};
  color: \${({ theme }) => theme.colors.surface};
  padding: \${({ theme }) => theme.spacing.xl} 0;
  margin-top: auto;

  @media (max-width: 768px) {
    padding: \${({ theme }) => theme.spacing.lg} 0;
  }
\`;`
        }
      ]
    }
  ];

  const task3Subtasks = [
    {
      id: '3-1',
      title: "TypingTextDisplay 컴포넌트 초기 설정 및 기본 텍스트 렌더링",
      description: "TypingTextDisplay 컴포넌트를 생성하고, props로 받은 문자열을 개별 문자로 분리하여 화면에 표시합니다.",
      topics: [
        "React 컴포넌트 기본 구조",
        "문자열 분리 및 배열 매핑",
        "JSX에서 동적 렌더링",
        "고유 key prop 할당",
        "기본 스타일링 적용",
        "컴포넌트 props 타입 정의"
      ],
      codeExamples: [
        {
          title: "기본 컴포넌트 구조",
          code: `import React from 'react';
import styled from 'styled-components';

const TypingTextDisplay = ({ text }) => {
  const renderCharacters = () => {
    if (!text) return null;
    
    return text.split('').map((char, index) => (
      <span key={index} className="character">
        {char}
      </span>
    ));
  };

  return (
    <TextContainer>
      {renderCharacters()}
    </TextContainer>
  );
};

const TextContainer = styled.div\`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 1.5rem;
  background: \${props => props.theme.colors.surface};
  border-radius: 8px;
  border: 2px solid \${props => props.theme.colors.border};
\`;

export default TypingTextDisplay;`
        },
        {
          title: "문자별 렌더링 최적화",
          code: `const TypingTextDisplay = ({ text }) => {
  // useMemo로 성능 최적화
  const characters = React.useMemo(() => {
    if (!text) return [];
    
    return text.split('').map((char, index) => ({
      id: index,
      char: char,
      state: 'untyped' // 초기 상태
    }));
  }, [text]);

  return (
    <TextContainer>
      {characters.map(({ id, char, state }) => (
        <CharacterSpan 
          key={id} 
          state={state}
          data-index={id}
        >
          {char}
        </CharacterSpan>
      ))}
    </TextContainer>
  );
};`
        },
        {
          title: "접근성 고려사항",
          code: `const TypingTextDisplay = ({ text }) => {
  return (
    <TextContainer
      role="textbox"
      aria-multiline="true"
      aria-label="타이핑 연습 텍스트"
    >
      {text.split('').map((char, index) => (
        <CharacterSpan
          key={index}
          aria-label={\`문자 \${index + 1}: \${char}\`}
          data-index={index}
        >
          {char}
        </CharacterSpan>
      ))}
    </TextContainer>
  );
};`
        }
      ]
    },
    {
      id: '3-2',
      title: "입력 진행 상태 및 오류 추적을 위한 상태 관리 구현",
      description: "Redux Toolkit을 사용하여 타이핑 진행 상태, 문자별 상태, 오류 위치를 추적하는 상태 관리 시스템을 구현합니다.",
      topics: [
        "Redux Toolkit 슬라이스 확장",
        "문자 단위 상태 추적",
        "배열 상태 관리 패턴",
        "액션 및 리듀서 설계",
        "상태 초기화 로직",
        "선택자(Selector) 활용"
      ],
      codeExamples: [
        {
          title: "Redux 슬라이스 확장",
          code: `const typingSlice = createSlice({
  name: 'typing',
  initialState: {
    currentText: '',
    typedText: '',
    currentIndex: 0,
    // 문자 단위 상태 추적
    charStates: [], // 'correct', 'incorrect', 'current', 'untyped'
    errors: [], // 오류 위치 배열
    keystrokes: [], // 키스트로크 데이터
    // 기존 상태들...
    isActive: false,
    isCompleted: false,
  },
  reducers: {
    updateTypedText: (state, action) => {
      const newTypedText = action.payload;
      state.typedText = newTypedText;
      state.currentIndex = newTypedText.length;
      
      // 문자 상태 업데이트
      const currentText = state.currentText;
      state.charStates = [];
      state.errors = [];
      
      for (let i = 0; i < currentText.length; i++) {
        if (i < newTypedText.length) {
          const isCorrect = newTypedText[i] === currentText[i];
          state.charStates.push(isCorrect ? 'correct' : 'incorrect');
          if (!isCorrect) state.errors.push(i);
        } else if (i === newTypedText.length) {
          state.charStates.push('current');
        } else {
          state.charStates.push('untyped');
        }
      }
    },
    setCurrentText: (state, action) => {
      state.currentText = action.payload;
      // 새 텍스트에 대한 문자 상태 초기화
      const text = action.payload;
      state.charStates = [];
      for (let i = 0; i < text.length; i++) {
        state.charStates.push(i === 0 ? 'current' : 'untyped');
      }
    },
  },
});`
        },
        {
          title: "선택자(Selector) 정의",
          code: `// 문자 상태 선택자
export const selectCharStates = (state) => state.typing.charStates;
export const selectErrors = (state) => state.typing.errors;
export const selectCurrentIndex = (state) => state.typing.currentIndex;

// 통계 선택자
export const selectTypingStats = createSelector(
  [
    selectCharStates,
    selectErrors,
    state => state.typing.currentText,
    state => state.typing.typedText
  ],
  (charStates, errors, currentText, typedText) => {
    const total = currentText.length;
    const typed = typedText.length;
    const correct = charStates.filter(state => state === 'correct').length;
    const incorrect = charStates.filter(state => state === 'incorrect').length;
    
    return {
      total,
      typed,
      correct,
      incorrect,
      progress: total > 0 ? Math.round((typed / total) * 100) : 0,
      accuracy: typed > 0 ? Math.round((correct / typed) * 100) : 0,
    };
  }
);`
        },
        {
          title: "컴포넌트에서 상태 사용",
          code: `const TypingTextDisplay = () => {
  const { theme } = useSelector(state => state.theme);
  const { 
    currentText, 
    typedText, 
    charStates, 
    errors 
  } = useSelector(state => state.typing);
  
  const stats = useSelector(selectTypingStats);

  const renderCharacters = () => {
    if (!currentText) return null;

    return currentText.split('').map((char, index) => {
      const charState = charStates[index] || 'untyped';
      const hasError = errors.includes(index);
      
      return (
        <CharacterSpan
          key={index}
          state={charState}
          hasError={hasError}
          theme={theme}
        >
          {char}
        </CharacterSpan>
      );
    });
  };

  return (
    <TextDisplayContainer theme={theme}>
      <StatsBar theme={theme}>
        <div className="stat">
          <span className="label">진행률:</span>
          <span className="value">{stats.progress}%</span>
        </div>
        <div className="stat">
          <span className="label">정확도:</span>
          <span className="value correct">{stats.accuracy}%</span>
        </div>
      </StatsBar>
      
      <TextContainer theme={theme}>
        {renderCharacters()}
      </TextContainer>
    </TextDisplayContainer>
  );
};`
        }
      ]
    },
    {
      id: '3-3',
      title: "입력 상태에 따른 문자별 동적 스타일링 로직 구현",
      description: "문자 상태(correct, incorrect, current, untyped)에 따라 동적인 CSS 스타일과 애니메이션을 적용하는 시스템을 구현합니다.",
      topics: [
        "동적 스타일링 패턴",
        "CSS-in-JS 조건부 스타일",
        "애니메이션 키프레임 정의",
        "테마 기반 색상 시스템",
        "반응형 타이포그래피",
        "시각적 피드백 디자인"
      ],
      codeExamples: [
        {
          title: "동적 스타일링 함수",
          code: `// TypingStyles.js
export const getCharacterStyles = (theme, state, hasError = false) => {
  const baseStyles = {
    position: 'relative',
    transition: 'all 0.2s ease',
    borderRadius: '2px',
    padding: '2px 1px',
    display: 'inline-block',
  };

  const stateStyles = {
    correct: {
      color: theme.colors.success,
      backgroundColor: \`\${theme.colors.success}15\`,
      fontWeight: '500',
    },
    incorrect: {
      color: theme.colors.error,
      backgroundColor: \`\${theme.colors.error}20\`,
      animation: \`\${shakeAnimation} 0.3s ease-in-out\`,
      fontWeight: '600',
    },
    current: {
      backgroundColor: \`\${theme.colors.primary}20\`,
      borderBottom: \`3px solid \${theme.colors.primary}\`,
      animation: \`\${blinkAnimation} 1s infinite\`,
      fontWeight: '500',
    },
    untyped: {
      color: theme.colors.textSecondary,
      opacity: '0.7',
    },
  };

  const errorStyles = hasError ? {
    boxShadow: \`0 0 0 1px \${theme.colors.error}\`,
    backgroundColor: \`\${theme.colors.error}10\`,
  } : {};

  return {
    ...baseStyles,
    ...stateStyles[state],
    ...errorStyles,
  };
};`
        },
        {
          title: "애니메이션 정의",
          code: `// 애니메이션 키프레임
export const shakeAnimation = keyframes\`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
\`;

export const blinkAnimation = keyframes\`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0.3; }
\`;

export const pulseAnimation = keyframes\`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
\`;

export const slideInAnimation = keyframes\`
  from { 
    opacity: 0;
    transform: translateY(-10px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
\`;`
        },
        {
          title: "스타일드 컴포넌트 적용",
          code: `export const CharacterSpan = styled.span\`
  \${props => getCharacterStyles(props.theme, props.state, props.hasError)}
  
  /* 호버 효과 */
  &:hover {
    transform: translateY(-1px);
  }
  
  /* 포커스 스타일 */
  &:focus {
    outline: 2px solid \${props => props.theme.colors.primary};
    outline-offset: 2px;
  }
\`;

export const TextContainer = styled.div\`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 1.5rem;
  background: \${props => props.theme.colors.surface};
  border-radius: 8px;
  border: 2px solid \${props => props.theme.colors.border};
  box-shadow: 0 2px 8px \${props => props.theme.colors.shadow};
  letter-spacing: 0.05em;
  word-break: break-all;
  overflow-wrap: break-word;
  min-height: 120px;
  position: relative;
  transition: border-color 0.3s ease;
  
  &:focus-within {
    border-color: \${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px \${props => props.theme.colors.primary}20;
  }
  
  /* 반응형 디자인 */
  @media (max-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
    padding: 1rem;
    min-height: 100px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    line-height: 1.5rem;
    padding: 0.75rem;
    min-height: 80px;
  }
\`;`
        }
      ]
    },
    {
      id: '3-4',
      title: "외부 입력 이벤트 처리 및 useTypingInput 훅 구현",
      description: "키보드 입력, 한국어 IME 처리, 붙여넣기 방지 등 외부 입력 이벤트를 처리하는 커스텀 훅을 구현합니다.",
      topics: [
        "커스텀 훅 설계 원칙",
        "키보드 이벤트 처리",
        "한국어 IME 조합 이벤트",
        "입력 유효성 검사",
        "붙여넣기 방지 로직",
        "단축키 구현"
      ],
      codeExamples: [
        {
          title: "useTypingInput 훅 기본 구조",
          code: `import { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateTypedText,
  startTyping,
  resetTyping,
  recordKeystroke,
  addError,
  removeError,
} from '../store/slices/typingSlice';

export const useTypingInput = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const {
    currentText,
    typedText,
    currentIndex,
    isActive,
    isCompleted,
    errors,
  } = useSelector(state => state.typing);

  // 문자 입력 처리
  const handleCharacterInput = useCallback((character) => {
    if (!currentText || isCompleted) return;

    // 타이핑 시작
    if (!isActive) {
      dispatch(startTyping());
    }

    const newTypedText = typedText + character;
    const expectedChar = currentText[currentIndex];
    const isCorrect = character === expectedChar;
    
    // 키스트로크 기록
    dispatch(recordKeystroke({
      charIndex: currentIndex,
      character,
      expected: expectedChar,
      isCorrect,
      timestamp: Date.now(),
    }));

    // 오류 추적
    if (!isCorrect && currentIndex < currentText.length) {
      dispatch(addError(currentIndex));
    } else if (isCorrect && errors.includes(currentIndex)) {
      dispatch(removeError(currentIndex));
    }

    dispatch(updateTypedText(newTypedText));
  }, [currentText, typedText, currentIndex, isActive, isCompleted, errors, dispatch]);

  return {
    inputRef,
    handleCharacterInput,
    // 다른 함수들...
  };
};`
        },
        {
          title: "한국어 IME 처리",
          code: `// IME 조합 이벤트 처리
const handleCompositionEvents = useCallback((event) => {
  switch (event.type) {
    case 'compositionstart':
      // 조합 시작 - 입력 처리 일시 중지
      setIsComposing(true);
      break;
      
    case 'compositionupdate':
      // 조합 업데이트 - 중간 상태 처리
      setComposingText(event.data);
      break;
      
    case 'compositionend':
      // 조합 완료 - 최종 문자 처리
      setIsComposing(false);
      const finalChar = event.data;
      if (finalChar) {
        handleCharacterInput(finalChar);
      }
      setComposingText('');
      break;
  }
}, [handleCharacterInput]);

// 이벤트 리스너 설정
useEffect(() => {
  const inputElement = inputRef.current;
  if (!inputElement) return;

  inputElement.addEventListener('compositionstart', handleCompositionEvents);
  inputElement.addEventListener('compositionupdate', handleCompositionEvents);
  inputElement.addEventListener('compositionend', handleCompositionEvents);

  return () => {
    inputElement.removeEventListener('compositionstart', handleCompositionEvents);
    inputElement.removeEventListener('compositionupdate', handleCompositionEvents);
    inputElement.removeEventListener('compositionend', handleCompositionEvents);
  };
}, [handleCompositionEvents]);`
        },
        {
          title: "키보드 이벤트 핸들러",
          code: `const handleKeystroke = useCallback((event) => {
  const { key, ctrlKey, metaKey, shiftKey } = event;
  
  // 조합 중이면 기본 동작만 방지
  if (isComposing) {
    event.preventDefault();
    return;
  }

  // 일반 문자 입력 처리
  if (!ctrlKey && !metaKey && key.length === 1) {
    event.preventDefault();
    handleCharacterInput(key);
    return;
  }

  // 특수 키 처리
  switch (key) {
    case 'Backspace':
      event.preventDefault();
      handleBackspace();
      break;
      
    case 'Escape':
      event.preventDefault();
      handleReset();
      break;
      
    case 'Tab':
      event.preventDefault();
      break;
      
    case 'Enter':
      if (ctrlKey || metaKey) {
        event.preventDefault();
        // 제출 로직
      }
      break;
  }
}, [isComposing, handleCharacterInput, handleBackspace, handleReset]);`
        },
        {
          title: "붙여넣기 방지",
          code: `const handlePaste = useCallback((event) => {
  event.preventDefault();
  
  // 붙여넣기 허용 로직 (선택적)
  const pastedText = event.clipboardData.getData('text');
  
  // 현재 위치부터 붙여넣기 허용
  if (pastedText === currentText.substring(currentIndex, currentIndex + pastedText.length)) {
    const newTypedText = typedText + pastedText;
    dispatch(updateTypedText(newTypedText));
  } else {
    // 붙여넣기 차단 알림
    showNotification('붙여넣기는 허용되지 않습니다.');
  }
}, [currentText, currentIndex, typedText, dispatch]);`
        }
      ]
    },
    {
      id: '3-5',
      title: "컴포넌트 접근성 및 성능 최적화",
      description: "스크린 리더 지원, 키보드 내비게이션, 성능 최적화를 통해 접근성과 사용자 경험을 개선합니다.",
      topics: [
        "ARIA 속성 활용",
        "스크린 리더 announcements",
        "React.memo 최적화",
        "useMemo 훅 활용",
        "키보드 내비게이션",
        "성능 모니터링"
      ],
      codeExamples: [
        {
          title: "접근성 속성 추가",
          code: `const TypingTextDisplay = () => {
  // 스크린 리더 announcements
  const getAccessibilityAnnouncement = useCallback(() => {
    if (!currentText) return '텍스트 로딩 중';
    
    const progress = enhancedStats.progress;
    const accuracy = enhancedStats.accuracy;
    const errors = enhancedStats.incorrect;
    
    if (enhancedStats.total === enhancedStats.typed) {
      return \`타이핑 완료! 정확도: \${accuracy}%. 오류: \${errors}개.\`;
    }
    
    return \`진행률: \${progress}%. 정확도: \${accuracy}%. 오류: \${errors}개. 현재 위치: \${currentIndex + 1}번째 문자.\`;
  }, [currentText, enhancedStats, currentIndex]);

  return (
    <TextDisplayContainer theme={theme}>
      {/* 스크린 리더 announcements */}
      <div 
        aria-live="polite" 
        aria-atomic="true" 
        className="sr-only"
        style={{ position: 'absolute', left: '-10000px' }}
      >
        {getAccessibilityAnnouncement()}
      </div>

      {/* 통계 바 */}
      <StatsBar 
        theme={theme}
        role="status"
        aria-label="타이핑 통계"
      >
        <div className="stat">
          <span className="label">진행률:</span>
          <span 
            className="value" 
            aria-label={\`진행률: \${enhancedStats.progress} 퍼센트\`}
          >
            {enhancedStats.progress}%
          </span>
        </div>
      </StatsBar>
      
      {/* 텍스트 컨테이너 */}
      <TextContainer 
        theme={theme}
        role="textbox"
        aria-multiline="true"
        aria-label="타이핑 연습 텍스트"
        tabIndex={0}
      >
        {renderCharacters}
      </TextContainer>
      
      {/* 진행률 바 */}
      <ProgressBar 
        theme={theme}
        role="progressbar"
        aria-valuenow={enhancedStats.progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={\`타이핑 진행률: \${enhancedStats.progress} 퍼센트\`}
      >
        <ProgressFill 
          theme={theme} 
          progress={enhancedStats.progress}
        />
      </ProgressBar>
    </TextDisplayContainer>
  );
};`
        },
        {
          title: "성능 최적화",
          code: `// 문자 렌더링 최적화
const renderCharacters = useMemo(() => {
  if (!currentText) return null;

  return currentText.split('').map((char, index) => {
    let charState = charStates[index] || 'untyped';
    
    // 폴백 계산
    if (!charStates.length) {
      if (index < typedText.length) {
        charState = typedText[index] === char ? 'correct' : 'incorrect';
      } else if (index === typedText.length) {
        charState = 'current';
      } else {
        charState = 'untyped';
      }
    }

    const hasError = errors.includes(index);
    const isCurrent = index === currentIndex;
    
    let enhancedState = charState;
    if (isCurrent && charState === 'untyped') {
      enhancedState = 'current';
    }

    return (
      <CharacterSpan
        key={index}
        theme={theme}
        state={enhancedState}
        hasError={hasError}
        data-index={index}
        data-state={enhancedState}
        data-error={hasError}
        aria-label={\`문자 \${index + 1}: \${char} (\${enhancedState})\`}
        role="text"
      >
        {char}
      </CharacterSpan>
    );
  });
}, [currentText, typedText, currentIndex, charStates, errors, theme]);

// 통계 계산 최적화
const enhancedStats = useMemo(() => {
  const total = currentText.length;
  const typed = typedText.length;
  const correct = charStates.filter(state => state === 'correct').length;
  const incorrect = charStates.filter(state => state === 'incorrect').length;
  const untyped = charStates.filter(state => state === 'untyped').length;
  const current = charStates.filter(state => state === 'current').length;
  const progress = total > 0 ? Math.round((typed / total) * 100) : 0;
  const accuracy = typed > 0 ? Math.round((correct / typed) * 100) : 0;

  return { 
    total, 
    typed, 
    correct, 
    incorrect, 
    untyped, 
    current, 
    progress, 
    accuracy,
    wpm: 0,
  };
}, [currentText.length, typedText.length, charStates]);`
        },
        {
          title: "React.memo로 컴포넌트 최적화",
          code: `// 문자 스팬 컴포넌트 최적화
const CharacterSpan = React.memo(styled.span\`
  \${props => getCharacterStyles(props.theme, props.state, props.hasError)}
  
  &:hover {
    transform: translateY(-1px);
  }
\`);

// 메인 컴포넌트 최적화
const TypingTextDisplay = React.memo(() => {
  // 컴포넌트 로직...
  
  return (
    <TextDisplayContainer theme={theme}>
      {/* 컴포넌트 내용 */}
    </TextDisplayContainer>
  );
});

// 커스텀 훅 최적화
const useTypingInput = () => {
  // useCallback으로 함수 최적화
  const handleCharacterInput = useCallback((character) => {
    // 입력 처리 로직...
  }, [currentText, typedText, currentIndex, isActive, isCompleted, errors, dispatch]);

  const focusInput = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return {
    inputRef,
    handleCharacterInput,
    focusInput,
    // 다른 함수들...
  };
};`
        }
      ]
    }
  ];

  const handleSubtaskClick = (subtaskId) => {
    // 서브태스크 상세 페이지로 이동
    onSubtaskClick(subtaskId.toString());
  };

  return (
    <Container>
      <Title size="3xl">개발 튜토리얼</Title>
      
      {/* 태스크 1 요약 */}
      <Card style={{ marginBottom: '2rem', padding: '2rem' }}>
        <h2 style={{ color: '#007bff', marginBottom: '1rem' }}>
          {task1Summary.title}
        </h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
          {task1Summary.description}
        </p>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem',
          marginBottom: '1.5rem'
        }}>
          <span style={{ 
            background: '#28a745', 
            color: 'white', 
            padding: '0.25rem 0.75rem',
            borderRadius: '1rem',
            fontSize: '0.9rem'
          }}>
            ✅ 완료됨
          </span>
          <span>
            진행률: {task1Summary.completedSubtasks}/{task1Summary.totalSubtasks} 서브태스크
          </span>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '1.5rem'
        }}>
          <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '0.5rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#007bff' }}>5</div>
            <div style={{ color: '#6c757d' }}>완료된 서브태스크</div>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '0.5rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#28a745' }}>100%</div>
            <div style={{ color: '#6c757d' }}>완료율</div>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '0.5rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#17a2b8' }}>29</div>
            <div style={{ color: '#6c757d' }}>생성된 파일</div>
          </div>
        </div>

        <p style={{ color: '#6c757d', fontStyle: 'italic' }}>
          이 튜토리얼에서는 태스크 1의 각 서브태스크를 상세히 학습할 수 있습니다. 아래에서 원하는 서브태스크를 선택하세요.
        </p>
      </Card>

      {/* 태스크 2 요약 */}
      <Card style={{ marginBottom: '2rem', padding: '2rem' }}>
        <h2 style={{ color: '#17a2b8', marginBottom: '1rem' }}>
          {task2Summary.title}
        </h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
          {task2Summary.description}
        </p>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem',
          marginBottom: '1.5rem'
        }}>
          <span style={{ 
            background: '#28a745', 
            color: 'white', 
            padding: '0.25rem 0.75rem',
            borderRadius: '1rem',
            fontSize: '0.9rem'
          }}>
            ✅ 완료됨
          </span>
          <span>
            진행률: {task2Summary.completedSubtasks}/{task2Summary.totalSubtasks} 서브태스크
          </span>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '1.5rem'
        }}>
          <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '0.5rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#17a2b8' }}>5</div>
            <div style={{ color: '#6c757d' }}>완료된 서브태스크</div>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '0.5rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#28a745' }}>100%</div>
            <div style={{ color: '#6c757d' }}>완료율</div>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '0.5rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ffc107' }}>12</div>
            <div style={{ color: '#6c757d' }}>생성된 파일</div>
          </div>
        </div>

        <p style={{ color: '#6c757d', fontStyle: 'italic' }}>
          태스크 2에서는 테마 시스템, 반응형 디자인, 레이아웃 컴포넌트를 학습할 수 있습니다. 아래에서 원하는 서브태스크를 선택하세요.
        </p>
      </Card>

      {/* 태스크 1 서브태스크 목록 */}
      <h2 style={{ marginBottom: '1.5rem', color: '#343a40' }}>태스크 1: 서브태스크 목록</h2>
      
      {subtasks.map((subtask) => (
        <Card 
          key={subtask.id} 
          style={{ 
            marginBottom: '1.5rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: '2px solid transparent'
          }}
          onClick={() => handleSubtaskClick(subtask.id)}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#007bff';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,123,255,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'transparent';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <h3 style={{ color: '#007bff', margin: 0 }}>
              서브태스크 {subtask.id}: {subtask.title}
            </h3>
            <span style={{ 
              background: '#28a745', 
              color: 'white', 
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              fontSize: '0.8rem'
            }}>
              완료됨
            </span>
          </div>
          
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: '#495057' }}>
            {subtask.description}
          </p>

          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ color: '#343a40', marginBottom: '0.5rem' }}>학습 주제:</h4>
            <ul style={{ paddingLeft: '1.5rem', color: '#6c757d' }}>
              {subtask.topics.map((topic, index) => (
                <li key={index} style={{ marginBottom: '0.25rem' }}>{topic}</li>
              ))}
            </ul>
          </div>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            color: '#007bff',
            fontWeight: '500'
          }}>
            <span>{subtask.codeExamples.length}개 코드 예제</span>
            <span>→ 상세 보기</span>
          </div>
        </Card>
      ))}

      {/* 태스크 2 서브태스크 목록 */}
      <h2 style={{ marginBottom: '1.5rem', color: '#343a40', marginTop: '2rem' }}>태스크 2: 서브태스크 목록</h2>
      
      {task2Subtasks.map((subtask) => (
        <Card 
          key={subtask.id} 
          style={{ 
            marginBottom: '1.5rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: '2px solid transparent'
          }}
          onClick={() => handleSubtaskClick(subtask.id)}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#17a2b8';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(23,162,184,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'transparent';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <h3 style={{ color: '#17a2b8', margin: 0 }}>
              서브태스크 {subtask.id}: {subtask.title}
            </h3>
            <span style={{ 
              background: '#28a745', 
              color: 'white', 
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              fontSize: '0.8rem'
            }}>
              완료됨
            </span>
          </div>
          
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: '#495057' }}>
            {subtask.description}
          </p>

          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ color: '#343a40', marginBottom: '0.5rem' }}>학습 주제:</h4>
            <ul style={{ paddingLeft: '1.5rem', color: '#6c757d' }}>
              {subtask.topics.map((topic, index) => (
                <li key={index} style={{ marginBottom: '0.25rem' }}>{topic}</li>
              ))}
            </ul>
          </div>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            color: '#17a2b8',
            fontWeight: '500'
          }}>
            <span>{subtask.codeExamples.length}개 코드 예제</span>
            <span>→ 상세 보기</span>
          </div>
        </Card>
      ))}

      {!isLoggedIn && (
        <Card style={{ 
          backgroundColor: '#fff3cd', 
          border: '1px solid #ffeaa7',
          textAlign: 'center',
          padding: '1.5rem'
        }}>
          <h3 style={{ color: '#856404', marginBottom: '1rem' }}>💡 학습 팁</h3>
          <p style={{ color: '#856404', lineHeight: '1.6' }}>
            로그인하면 학습 진행 상황을 저장하고, 각 서브태스크의 완료 상태를 추적할 수 있습니다.
            프로필 페이지에서 로그인하여 개인화된 학습 경험을 활용하세요.
          </p>
        </Card>
      )}

      {/* 태스크 3 요약 */}
      <Card style={{ marginBottom: '2rem', padding: '2rem' }}>
        <h2 style={{ color: '#6f42c1', marginBottom: '1rem' }}>
          {task3Summary.title}
        </h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
          {task3Summary.description}
        </p>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem',
          marginBottom: '1.5rem'
        }}>
          <span style={{ 
            background: '#28a745', 
            color: 'white', 
            padding: '0.25rem 0.75rem',
            borderRadius: '1rem',
            fontSize: '0.9rem'
          }}>
            ✅ 완료됨
          </span>
          <span>
            진행률: {task3Summary.completedSubtasks}/{task3Summary.totalSubtasks} 서브태스크
          </span>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '1.5rem'
        }}>
          <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '0.5rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#6f42c1' }}>5</div>
            <div style={{ color: '#6c757d' }}>완료된 서브태스크</div>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '0.5rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#28a745' }}>100%</div>
            <div style={{ color: '#6c757d' }}>완료율</div>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '0.5rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fd7e14' }}>6</div>
            <div style={{ color: '#6c757d' }}>생성된 파일</div>
          </div>
        </div>

        <p style={{ color: '#6c757d', fontStyle: 'italic' }}>
          태스크 3에서는 타이핑 텍스트 표시, 상태 관리, 입력 처리, 접근성 최적화를 학습할 수 있습니다. 아래에서 원하는 서브태스크를 선택하세요.
        </p>
      </Card>

      {/* 태스크 3 서브태스크 목록 */}
      <h2 style={{ marginBottom: '1.5rem', color: '#343a40' }}>태스크 3: 서브태스크 목록</h2>
      
      {task3Subtasks.map((subtask) => (
        <Card 
          key={subtask.id} 
          style={{ 
            marginBottom: '1.5rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: '2px solid transparent'
          }}
          onClick={() => handleSubtaskClick(subtask.id)}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#6f42c1';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(111,66,193,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'transparent';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <h3 style={{ color: '#6f42c1', margin: 0 }}>
              서브태스크 {subtask.id}: {subtask.title}
            </h3>
            <span style={{ 
              background: '#28a745', 
              color: 'white', 
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              fontSize: '0.8rem'
            }}>
              완료됨
            </span>
          </div>
          
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: '#495057' }}>
            {subtask.description}
          </p>

          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ color: '#343a40', marginBottom: '0.5rem' }}>학습 주제:</h4>
            <ul style={{ paddingLeft: '1.5rem', color: '#6c757d' }}>
              {subtask.topics.map((topic, index) => (
                <li key={index} style={{ marginBottom: '0.25rem' }}>{topic}</li>
              ))}
            </ul>
          </div>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            color: '#6f42c1',
            fontWeight: '500'
          }}>
            <span>{subtask.codeExamples.length}개 코드 예제</span>
            <span>→ 상세 보기</span>
          </div>
        </Card>
      ))}
    </Container>
  );
};

export default TutorialPage;
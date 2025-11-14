import React, { useState } from 'react';
import { Container, Title, Card, Button } from '../components/common/UI';
import { useAppSelector } from '../store/hooks';

const SubtaskDetailPage = ({ subtaskId, onBack }) => {
  const { isLoggedIn } = useAppSelector(state => state.user);
  const [activeTab, setActiveTab] = useState('overview');

  const subtaskData = {
    1: {
      title: "React 프로젝트 초기화 및 핵심 의존성 설치",
      description: "Vite를 사용하여 React 프로젝트를 생성하고 핵심 라이브러리를 설치합니다. 현대적인 프론트엔드 개발 환경을 구축하는 첫 단계입니다.",
      objectives: [
        "Vite로 React 프로젝트 생성하기",
        "핵심 프론트엔드 라이브러리 설치 및 이해하기",
        "package.json 구조 파악하기",
        "개발 서버 실행 및 기본 동작 확인하기"
      ],
      prerequisites: [
        "Node.js 16+ 설치",
        "npm 또는 yarn 기본 사용법",
        "터미널 명령어 기본 지식"
      ],
      steps: [
        {
          title: "1. Vite 프로젝트 생성",
          content: "Vite는 빠른 개발 서버와 빌드 도구를 제공하는 현대적인 프론트엔드 빌드 툴입니다.",
          command: "npm create vite@latest korean-typing-practice -- --template react",
          explanation: "이 명령어는 'korean-typing-practice'라는 이름의 React 프로젝트를 생성합니다. --template react 옵션으로 React 템플릿을 사용합니다."
        },
        {
          title: "2. 프로젝트 디렉토리 이동 및 의존성 설치",
          content: "생성된 프로젝트 디렉토리로 이동하고 기본 의존성을 설치합니다.",
          commands: [
            "cd korean-typing-practice",
            "npm install"
          ],
          explanation: "cd 명령어로 프로젝트 폴더로 이동한 후, npm install로 package.json에 정의된 의존성들을 설치합니다."
        },
        {
          title: "3. 핵심 라이브러리 설치",
          content: "한글 타이핑 연습 애플리케이션에 필요한 핵심 라이브러리들을 설치합니다.",
          command: "npm install @reduxjs/toolkit react-redux styled-components framer-motion react-router-dom chart.js recharts",
          explanation: "각 라이브러리의 역할:\n• @reduxjs/toolkit: 상태 관리\n• react-redux: React와 Redux 연결\n• styled-components: CSS-in-JS 스타일링\n• framer-motion: 애니메이션\n• react-router-dom: 라우팅\n• chart.js/recharts: 데이터 시각화"
        },
        {
          title: "4. 개발 서버 실행",
          content: "설치가 완료되면 개발 서버를 실행하여 프로젝트가 정상적으로 동작하는지 확인합니다.",
          command: "npm run dev",
          explanation: "개발 서버가 실행되면 브라우저에서 http://localhost:5173으로 접속하여 기본 React 페이지가 표시되는지 확인합니다."
        }
      ],
      codeExamples: [
        {
          title: "package.json 예시",
          code: `{
  "name": "korean-typing-practice",
  "dependencies": {
    "@reduxjs/toolkit": "^2.10.1",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-redux": "^9.2.0",
    "styled-components": "^6.1.19",
    "framer-motion": "^12.23.24",
    "react-router-dom": "^7.9.6",
    "chart.js": "^4.5.1",
    "recharts": "^3.4.1"
  }
}`,
          explanation: "package.json 파일은 프로젝트의 의존성과 스크립트를 정의합니다. dependencies 섹션에 설치된 라이브러리들이 표시됩니다."
        },
        {
          title: "기본 React 컴포넌트 구조",
          code: `import React from 'react';

function App() {
  return (
    <div>
      <h1>한글 타이핑 연습</h1>
      <p>React 프로젝트가 성공적으로 생성되었습니다!</p>
    </div>
  );
}

export default App;`,
          explanation: "Vite로 생성된 기본 React 컴포넌트 구조입니다. 함수형 컴포넌트와 JSX 문법을 사용합니다."
        }
      ],
      tips: [
        "Vite는 Create React App보다 빠른 개발 경험을 제공합니다",
        "npm 대신 yarn을 사용할 수도 있습니다 (yarn create vite)",
        "package-lock.json 파일은 의존성 버전을 고정하여 일관된 환경을 보장합니다",
        "node_modules 폴더는 git에 포함하지 않습니다 (.gitignore에 추가)"
      ],
      commonErrors: [
        {
          error: "npm ERR! code ENOENT",
          solution: "Node.js와 npm이 올바르게 설치되었는지 확인하세요"
        },
        {
          error: "Port 5173 is already in use",
          solution: "다른 포트를 사용하거나 해당 포트를 사용하는 프로세스를 종료하세요"
        }
      ]
    },
    2: {
      title: "Styled-components 환경 설정 및 전역 스타일 정의",
      description: "Styled-components를 사용하여 CSS-in-JS 방식의 스타일링 시스템을 구축하고, 전역 스타일과 테마 시스템을 구현합니다.",
      objectives: [
        "Styled-components 기본 개념 이해하기",
        "ThemeProvider로 테마 시스템 구축하기",
        "GlobalStyle로 전역 스타일 정의하기",
        "반응형 디자인을 위한 테마 변수 활용하기"
      ],
      prerequisites: [
        "React 기본 지식",
        "CSS 기본 지식",
        "JavaScript ES6+ 문법"
      ],
      steps: [
        {
          title: "1. Styled-components 설치",
          content: "이미 서브태스크 1에서 설치했지만, 개념을 이해하는 것이 중요합니다.",
          command: "npm install styled-components",
          explanation: "Styled-components는 CSS를 JavaScript로 작성할 수 있게 해주는 CSS-in-JS 라이브러리입니다."
        },
        {
          title: "2. 테마 객체 생성",
          content: "애플리케이션 전체에서 사용할 디자인 토큰(색상, 폰트, 간격 등)을 정의합니다.",
          code: `// src/styles/GlobalStyle.js
export const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
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
};`,
          explanation: "테마 객체는 디자인 시스템의 핵심입니다. 일관된 디자인을 유지하고 유지보수를 쉽게 만듭니다."
        },
        {
          title: "3. 전역 스타일 정의",
          content: "createGlobalStyle을 사용하여 애플리케이션 전체에 적용될 CSS를 정의합니다.",
          code: `import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle\`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: \${({ theme }) => theme.fonts.primary};
    background-color: \${({ theme }) => theme.colors.background};
    line-height: 1.6;
  }
\`;`,
          explanation: "GlobalStyle은 CSS 리셋과 기본 스타일을 정의합니다. 템플릿 리터럴을 사용하여 테마 변수에 접근합니다."
        },
        {
          title: "4. ThemeProvider로 애플리케이션 감싸기",
          content: "React 애플리케이션을 ThemeProvider로 감싸서 테마를 모든 컴포넌트에 제공합니다.",
          code: `// src/main.jsx
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles/GlobalStyle';

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);`,
          explanation: "ThemeProvider는 Context API를 사용하여 테마 객체를 하위 컴포넌트들에게 전달합니다."
        }
      ],
      codeExamples: [
        {
          title: "Styled 컴포넌트 생성",
          code: `import styled from 'styled-components';

export const Button = styled.button\`
  background: \${({ theme, variant = 'primary' }) => theme.colors[variant]};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
\`;

// 사용법
<Button variant="primary">클릭하세요</Button>
<Button variant="secondary">취소</Button>`,
          explanation: "styled 함수를 사용하여 스타일링된 컴포넌트를 생성합니다. props를 통해 동적으로 스타일을 적용할 수 있습니다."
        },
        {
          title: "반응형 스타일링",
          code: `export const Container = styled.div\`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.25rem;
  }
\`;`,
          explanation: "미디어 쿼리를 사용하여 반응형 디자인을 구현합니다. 화면 크기에 따라 스타일이 동적으로 변경됩니다."
        }
      ],
      tips: [
        "스타일드 컴포넌트는 재사용성이 높습니다",
        "테마 객체를 잘 구성하면 다크모드 구현이 쉬워집니다",
        "CSS-in-JS는 클래스 이름 충돌을 방지합니다",
        "개발자 도구에서 자동 생성된 클래스 이름을 확인할 수 있습니다"
      ],
      commonErrors: [
        {
          error: "Styled-components: Cannot access theme",
          solution: "컴포넌트가 ThemeProvider 내부에 있는지 확인하세요"
        },
        {
          error: "GlobalStyle not applying",
          solution: "GlobalStyle 컴포넌트가 ThemeProvider 내부에서 렌더링되는지 확인하세요"
        }
      ]
    },
    3: {
      title: "Redux Toolkit 설정 및 상태 관리 구조 설계",
      description: "Redux Toolkit을 사용하여 애플리케이션의 상태 관리 시스템을 구축합니다. 타이핑 게임에 필요한 상태들을 효율적으로 관리하는 방법을 학습합니다.",
      objectives: [
        "Redux Toolkit 기본 개념 이해하기",
        "Store 생성 및 Provider 연결하기",
        "Slice 패턴으로 상태 관리 구조 설계하기",
        "useSelector와 useDispatch로 상태 다루기"
      ],
      prerequisites: [
        "React Hooks 기본 지식",
        "JavaScript 비동기 처리 이해",
        "상태 관리 기본 개념"
      ],
      steps: [
        {
          title: "1. Redux Toolkit 설치",
          content: "상태 관리를 위한 Redux Toolkit과 React 연결을 위한 react-redux를 설치합니다.",
          command: "npm install @reduxjs/toolkit react-redux",
          explanation: "@reduxjs/toolkit은 Redux의 복잡성을 줄여주는 공식 도구입니다. react-redux는 React 컴포넌트와 Redux를 연결해줍니다."
        },
        {
          title: "2. Store 생성",
          content: "애플리케이션의 중앙 상태 저장소를 생성합니다.",
          code: `// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // 여기에 slice들이 추가될 예정
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export default store;`,
          explanation: "configureStore는 Redux store를 쉽게 생성하는 함수입니다. middleware 설정으로 개발 경험을 최적화할 수 있습니다."
        },
        {
          title: "3. Typing Slice 생성",
          content: "타이핑 게임의 핵심 상태를 관리하는 slice를 생성합니다.",
          code: `// src/store/slices/typingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentText: '',
  userInput: '',
  isTyping: false,
  startTime: null,
  endTime: null,
  wpm: 0,
  accuracy: 0,
  errors: [],
};

const typingSlice = createSlice({
  name: 'typing',
  initialState,
  reducers: {
    startTyping: (state, action) => {
      state.isTyping = true;
      state.startTime = Date.now();
      state.currentText = action.payload;
      state.userInput = '';
      state.errors = [];
    },
    updateInput: (state, action) => {
      state.userInput = action.payload;
    },
    finishTyping: (state) => {
      state.isTyping = false;
      state.endTime = Date.now();
      // WPM 계산
      const timeInMinutes = (state.endTime - state.startTime) / 60000;
      const wordsTyped = state.userInput.length / 5;
      state.wpm = Math.round(wordsTyped / timeInMinutes);
      // 정확도 계산
      const correctChars = state.currentText
        .split('')
        .filter((char, index) => char === state.userInput[index]).length;
      state.accuracy = Math.round((correctChars / state.currentText.length) * 100);
    },
  },
});

export const { startTyping, updateInput, finishTyping } = typingSlice.actions;
export default typingSlice.reducer;`,
          explanation: "Slice는 Redux Toolkit의 핵심 개념으로, reducer와 action을 하나의 파일에서 관리합니다. Immer 라이브러리로 불변성을 자동으로 처리합니다."
        },
        {
          title: "4. Store에 Slice 연결",
          content: "생성한 slice를 store에 등록합니다.",
          code: `// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import typingSlice from './slices/typingSlice';

export const store = configureStore({
  reducer: {
    typing: typingSlice,
  },
});`,
          explanation: "store의 reducer 객체에 각 slice를 추가합니다. 키 이름은 상태를 식별하는 데 사용됩니다."
        },
        {
          title: "5. Provider로 앱 감싸기",
          content: "React 애플리케이션을 Redux Provider로 감싸서 모든 컴포넌트에서 store에 접근할 수 있게 합니다.",
          code: `// src/main.jsx
import { Provider } from 'react-redux';
import { store } from './store/store';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>
);`,
          explanation: "Provider는 React Context API를 사용하여 store를 모든 하위 컴포넌트에 제공합니다."
        }
      ],
      codeExamples: [
        {
          title: "컴포넌트에서 Redux 사용",
          code: `import { useSelector, useDispatch } from 'react-redux';
import { startTyping, updateInput, finishTyping } from '../store/slices/typingSlice';

const TypingPractice = () => {
  const dispatch = useDispatch();
  const { userInput, isTyping, wpm, accuracy } = useSelector(state => state.typing);

  const handleStart = (text) => {
    dispatch(startTyping(text));
  };

  const handleInputChange = (input) => {
    dispatch(updateInput(input));
  };

  const handleFinish = () => {
    dispatch(finishTyping());
  };

  return (
    <div>
      <p>WPM: {wpm}</p>
      <p>Accuracy: {accuracy}%</p>
    </div>
  );
};`,
          explanation: "useSelector는 store에서 상태를 선택하고, useDispatch는 action을 발생시킵니다."
        }
      ],
      tips: [
        "Redux DevTools 브라우저 확장 프로그램을 설치하면 디버깅이 쉬워집니다",
        "Slice는 기능별로 분리하는 것이 좋습니다 (user, stats, typing 등)",
        "createAsyncThunk를 사용하면 비동기 작업을 쉽게 처리할 수 있습니다",
        "상태 구조는 가능한 평평하게 유지하는 것이 좋습니다"
      ],
      commonErrors: [
        {
          error: "could not find react-redux context value",
          solution: "컴포넌트가 Provider 내부에 있는지 확인하세요"
        },
        {
          error: "TypeError: state is undefined",
          solution: "useSelector에서 올바른 상태 경로를 선택했는지 확인하세요"
        }
      ]
    },
    4: {
      title: "라우팅 구조 및 레이아웃 컴포넌트 구현",
      description: "React Router를 사용하여 싱글 페이지 애플리케이션의 라우팅 시스템을 구축하고, 재사용 가능한 레이아웃 컴포넌트를 구현합니다.",
      objectives: [
        "React Router 기본 개념 이해하기",
        "Layout 컴포넌트 구조 설계하기",
        "네비게이션 및 페이지 전환 구현하기",
        "반응형 레이아웃 디자인하기"
      ],
      prerequisites: [
        "React 컴포넌트 기본 지식",
        "Styled-components 사용법",
        "JavaScript ES6+ 문법"
      ],
      steps: [
        {
          title: "1. React Router 설치",
          content: "클라이언트 사이드 라우팅을 위한 React Router를 설치합니다.",
          command: "npm install react-router-dom",
          explanation: "react-router-dom은 웹 애플리케이션을 위한 라우팅 라이브러리입니다."
        },
        {
          title: "2. Layout 스타일 정의",
          content: "레이아웃 컴포넌트에서 사용할 스타일 컴포넌트들을 생성합니다.",
          code: `// src/components/layout/LayoutStyles.js
import styled from 'styled-components';

export const LayoutContainer = styled.div\`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
\`;

export const Header = styled.header\`
  background: linear-gradient(135deg, \${props => props.theme.colors.primary} 0%, \${props => props.theme.colors.secondary} 100%);
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
\`;

export const HeaderContainer = styled.div\`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
\`;

export const Logo = styled.h1\`
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
\`;

export const Nav = styled.nav\`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
\`;

export const NavLink = styled.a\`
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: 500;
  cursor: pointer;
  
  &:hover, &.active {
    background-color: rgba(255,255,255,0.2);
    transform: translateY(-1px);
  }
\`;

export const Main = styled.main\`
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
\`;

export const Footer = styled.footer\`
  background-color: \${props => props.theme.colors.secondary};
  color: white;
  text-align: center;
  padding: 2rem 0;
  margin-top: auto;
\`;`,
          explanation: "styled-components를 사용하여 반응형 레이아웃 스타일을 정의합니다. 미디어 쿼리로 모바일 환경도 고려합니다."
        },
        {
          title: "3. Layout 컴포넌트 구현",
          content: "재사용 가능한 레이아웃 컴포넌트를 생성합니다.",
          code: `// src/components/layout/Layout.jsx
import React from 'react';
import {
  LayoutContainer,
  Header,
  HeaderContainer,
  Logo,
  Nav,
  NavLink,
  Footer,
  FooterContainer,
} from './LayoutStyles';

const Layout = ({ children, currentPage, onNavClick }) => {
  return (
    <LayoutContainer>
      <Header>
        <HeaderContainer>
          <Logo>한글 타이핑 연습</Logo>
          <Nav>
            <NavLink
              href="#practice"
              className={currentPage === 'practice' ? 'active' : ''}
              onClick={e => {
                e.preventDefault();
                onNavClick('practice');
              }}
            >
              연습
            </NavLink>
            <NavLink
              href="#stats"
              className={currentPage === 'stats' ? 'active' : ''}
              onClick={e => {
                e.preventDefault();
                onNavClick('stats');
              }}
            >
              통계
            </NavLink>
            <NavLink
              href="#profile"
              className={currentPage === 'profile' ? 'active' : ''}
              onClick={e => {
                e.preventDefault();
                onNavClick('profile');
              }}
            >
              프로필
            </NavLink>
          </Nav>
        </HeaderContainer>
      </Header>

      {children}

      <Footer>
        <FooterContainer>
          <p>&copy; 2024 한글 타이핑 연습. All rights reserved.</p>
        </FooterContainer>
      </Footer>
    </LayoutContainer>
  );
};

export default Layout;`,
          explanation: "Layout 컴포넌트는 헤더, 메인 콘텐츠, 푸터로 구성된 전체 앱 구조를 정의합니다. props를 통해 현재 페이지와 네비게이션 핸들러를 받습니다."
        },
        {
          title: "4. 페이지 컴포넌트들 생성",
          content: "각 라우트에 대응하는 페이지 컴포넌트들을 생성합니다.",
          code: `// src/pages/PracticePage.jsx
import React from 'react';
import { Container, Title } from '../components/common/UI';

const PracticePage = () => {
  return (
    <Container>
      <Title>타이핑 연습</Title>
      <p>여기서 타이핑 연습을 할 수 있습니다.</p>
    </Container>
  );
};

export default PracticePage;

// src/pages/StatsPage.jsx
import React from 'react';
import { Container, Title } from '../components/common/UI';

const StatsPage = () => {
  return (
    <Container>
      <Title>통계</Title>
      <p>타이핑 통계를 확인할 수 있습니다.</p>
    </Container>
  );
};

export default StatsPage;

// src/pages/ProfilePage.jsx
import React from 'react';
import { Container, Title } from '../components/common/UI';

const ProfilePage = () => {
  return (
    <Container>
      <Title>프로필</Title>
      <p>사용자 프로필 정보를 관리할 수 있습니다.</p>
    </Container>
  );
};

export default ProfilePage;`,
          explanation: "각 페이지 컴포넌트는 특정 기능에 대한 UI를 담당합니다. 공통 UI 컴포넌트를 재사용하여 일관성을 유지합니다."
        },
        {
          title: "5. App 컴포넌트에서 라우팅 구현",
          content: "상태 기반의 라우팅 시스템을 구현합니다.",
          code: `// src/App.jsx
import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import PracticePage from './pages/PracticePage';
import StatsPage from './pages/StatsPage';
import ProfilePage from './pages/ProfilePage';
import { Main } from './components/layout/LayoutStyles';

function App() {
  const [currentPage, setCurrentPage] = useState('practice');

  const renderPage = () => {
    switch (currentPage) {
      case 'practice':
        return <PracticePage />;
      case 'stats':
        return <StatsPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <PracticePage />;
    }
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <Layout currentPage={currentPage} onNavClick={handleNavClick}>
      <Main>{renderPage()}</Main>
    </Layout>
  );
}

export default App;`,
          explanation: "상태 기반 라우팅을 사용하여 페이지 전환을 구현합니다. React Router 대신 간단한 상태 관리로 라우팅을 처리합니다."
        }
      ],
      codeExamples: [
        {
          title: "공통 UI 컴포넌트",
          code: `// src/components/common/UI.js
import styled from 'styled-components';

export const Container = styled.div\`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
\`;

export const Title = styled.h1\`
  font-size: 2.5rem;
  color: \${props => props.theme.colors.primary};
  margin-bottom: 1rem;
\`;

export const Card = styled.div\`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
\`;

export const Button = styled.button\`
  background: \${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
\`;`,
          explanation: "재사용 가능한 UI 컴포넌트들을 정의하여 일관된 디자인을 유지합니다."
        }
      ],
      tips: [
        "컴포넌트는 가능한 작게 유지하고 단일 책임을 갖도록 설계하세요",
        "스타일 컴포넌트는 해당 컴포넌트와 가까운 곳에 두는 것이 좋습니다",
        "반응형 디자인은 처음부터 고려하는 것이 좋습니다",
        "접근성을 위해 시맨틱 HTML 태그를 사용하세요"
      ],
      commonErrors: [
        {
          error: "styled-components: Cannot access theme",
          solution: "컴포넌트가 ThemeProvider 내부에 있는지 확인하세요"
        },
        {
          error: "Navigation not working",
          solution: "이벤트 핸들러에서 preventDefault()를 호출했는지 확인하세요"
        }
      ]
    },
    5: {
      title: "개발 환경 최적화 및 빌드 설정",
      description: "코드 품질을 유지하고 개발 경험을 향상시키기 위한 도구들을 설정하고, 프로덕션 빌드를 최적화합니다.",
      objectives: [
        "ESLint와 Prettier로 코드 품질 관리하기",
        "Vite 설정으로 개발 경험 최적화하기",
        "번들 분석 및 최적화하기",
        "프로덕션 배포 준비하기"
      ],
      prerequisites: [
        "Node.js 생태계 이해",
        "빌드 도구 기본 개념",
        "코드 품질 도구 사용 경험"
      ],
      steps: [
        {
          title: "1. ESLint 설정",
          content: "코드의 잠재적 오류와 스타일 문제를 찾아주는 ESLint를 설정합니다.",
          code: `// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  { ignores: ['dist', 'node_modules', 'build'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    settings: { react: { version: '18.0' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 0,
      'no-unused-vars': 'warn',
      'no-console': 'warn',
    },
  },
];`,
          explanation: "ESLint 설정으로 코드 일관성을 유지하고 잠재적 버그를 조기에 발견할 수 있습니다."
        },
        {
          title: "2. Prettier 설정",
          content: "코드 포맷팅을 자동화하는 Prettier를 설정합니다.",
          code: `// .prettierrc.json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "arrowParens": "avoid"
}

// .prettierignore
node_modules
dist
build
*.min.js
*.min.css
package-lock.json
yarn.lock
.env*`,
          explanation: "Prettier는 팀원 간의 코드 스타일 차이를 없애고 일관된 포맷을 유지해줍니다."
        },
        {
          title: "3. Vite 설정 최적화",
          content: "개발 경험과 빌드 성능을 향상시키기 위해 Vite를 설정합니다.",
          code: `// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          redux: ['@reduxjs/toolkit', 'react-redux'],
          router: ['react-router-dom'],
          styles: ['styled-components']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: true,
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'styled-components'],
  },
});`,
          explanation: "코드 분할, 소스맵, 압축 등 프로덕션 최적화 설정을 적용합니다."
        },
        {
          title: "4. Package.json 스크립트 추가",
          content: "개발 및 빌드 관련 스크립트를 package.json에 추가합니다.",
          code: `{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint . --ext js,jsx --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "type-check": "tsc --noEmit",
    "analyze": "npm run build && npx vite-bundle-analyzer dist/stats.html"
  }
}`,
          explanation: "일관된 명령어로 개발 워크플로우를 관리할 수 있습니다."
        },
        {
          title: "5. 환경 변수 설정",
          content: "개발/프로덕션 환경별 설정을 위한 환경 변수를 설정합니다.",
          code: `// .env.example
VITE_APP_TITLE=한글 타이핑 연습
VITE_API_BASE_URL=http://localhost:3001
VITE_APP_VERSION=1.0.0

// .env.development
VITE_API_BASE_URL=http://localhost:3001
VITE_DEBUG_MODE=true

// .env.production
VITE_API_BASE_URL=https://api.korean-typing.com
VITE_DEBUG_MODE=false`,
          explanation: "Vite에서는 VITE_ 접두사를 붙인 환경 변수만 클라이언트에 노출됩니다."
        }
      ],
      codeExamples: [
        {
          title: "Git hooks 설정",
          code: `// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "npm run type-check"
    }
  },
  "lint-staged": {
    "*.{js,jsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}

// 설치
npm install --save-dev husky lint-staged
npx husky install`,
          explanation: "Git hooks를 사용하여 커밋 전에 코드 품질 검사를 자동화할 수 있습니다."
        },
        {
          title: "번들 분석 스크립트",
          code: `// scripts/analyze.js
import { readFileSync } from 'fs';
import { join } from 'path';
import { gzipSync } from 'zlib';

const stats = JSON.parse(
  readFileSync(join(process.cwd(), 'dist/stats.json'), 'utf8')
);

const assets = stats.assets
  .filter(asset => asset.name.endsWith('.js'))
  .map(asset => ({
    name: asset.name,
    size: asset.size,
    gzipped: gzipSync(readFileSync(join(process.cwd(), 'dist', asset.name))).length,
  }));

console.table(assets);`,
          explanation: "번들 크기를 분석하여 최적화 기회를 찾을 수 있습니다."
        }
      ],
      tips: [
        "CI/CD 파이프라인에 lint와 test 단계를 포함하세요",
        "번들 분석을 정기적으로 수행하여 번들 크기를 모니터링하세요",
        "소스맵은 프로덕션에서도 디버깅을 위해 유지하는 것이 좋습니다",
        "성능 모니터링 도구를 사용하여 실제 사용자 경험을 측정하세요"
      ],
      commonErrors: [
        {
          error: "ESLint and Prettier conflict",
          solution: "eslint-config-prettier를 설치하여 충돌을 해결하세요"
        },
        {
          error: "Build memory issues",
          solution: "Node.js 메모리 제한을 늘리거나 빌드 과정을 분할하세요"
        }
      ]
    },
    '2-1': {
      title: "전역 스타일 및 테마 시스템 초기 설정",
      description: "다크/라이트 모드를 지원하는 동적 테마 시스템을 구축하고 전역 스타일을 정의합니다. 사용자 경험을 향상시키는 테마 전환 기능의 핵심을 학습합니다.",
      objectives: [
        "테마 디자인 토큰 구조 설계하기",
        "라이트/다크 테마 색상 팔레트 구성하기",
        "Redux를 통한 테마 상태 관리 구현하기",
        "localStorage를 이용한 테마 영속성 구현하기",
        "시스템 테마 감지 기능 추가하기",
        "CSS 변수를 통한 동적 테마 적용하기"
      ],
      prerequisites: [
        "Styled-components 기본 지식",
        "Redux Toolkit 사용법",
        "JavaScript localStorage API",
        "CSS 변수 이해",
        "미디어 쿼리 기본 지식"
      ],
      steps: [
        {
          title: "1. 테마 디자인 토큰 구조 설계",
          content: "애플리케이션의 디자인 시스템을 위한 토큰 구조를 설계합니다. 일관된 디자인을 위해 색상, 타이포그래피, 간격 등을 체계적으로 정의합니다.",
          code: `// src/styles/themes/light.js
export const lightTheme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    background: '#ffffff',
    surface: '#f8f9fa',
    dark: '#343a40',
    text: {
      primary: '#212529',
      secondary: '#6c757d',
      muted: '#adb5bd',
      inverse: '#ffffff'
    },
    scrollbar: {
      track: '#f1f1f1',
      thumb: '#c1c1c1',
      thumbHover: '#a8a8a8'
    }
  },
  fonts: {
    primary: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    monospace: "'Fira Code', 'Courier New', monospace"
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem'
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px'
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
  },
  transitions: {
    fast: '0.15s ease-in-out',
    normal: '0.3s ease-in-out',
    slow: '0.5s ease-in-out'
  }
};`,
          explanation: "디자인 토큰은 디자인 시스템의 기본 단위입니다. 일관된 디자인을 유지하고 유지보수를 쉽게 만들어줍니다."
        },
        {
          title: "2. 다크 테마 구현",
          content: "라이트 테마를 기반으로 다크 테마를 구현합니다. 다크 모드에서의 가독성과 사용자 경험을 고려하여 색상을 조정합니다.",
          code: `// src/styles/themes/dark.js
import { lightTheme } from './light';

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    background: '#1a1a1a',
    surface: '#2d2d2d',
    dark: '#0d1117',
    text: {
      primary: '#e9ecef',
      secondary: '#adb5bd',
      muted: '#6c757d',
      inverse: '#212529'
    },
    scrollbar: {
      track: '#2d2d2d',
      thumb: '#6c757d',
      thumbHover: '#adb5bd'
    }
  }
};`,
          explanation: "다크 테마는 라이트 테마의 구조를 재사용하면서 색상만 변경합니다. 이를 통해 일관성을 유지하고 관리 부담을 줄입니다."
        },
        {
          title: "3. 테마 관리 유틸리티 구현",
          content: "테마를 쉽게 관리하고 전환할 수 있는 유틸리티 함수를 구현합니다.",
          code: `// src/styles/themes/index.js
import { lightTheme } from './light';
import { darkTheme } from './dark';

export const themes = {
  light: lightTheme,
  dark: darkTheme
};

export const getTheme = (themeName) => {
  return themes[themeName] || lightTheme;
};

export const isValidTheme = (themeName) => {
  return Object.keys(themes).includes(themeName);
};`,
          explanation: "테마 유틸리티는 테마 관리 로직을 중앙화하고 재사용성을 높여줍니다."
        },
        {
          title: "4. Redux 테마 슬라이스 생성",
          content: "테마 상태를 관리하기 위한 Redux 슬라이스를 생성합니다. 현재 테마, 시스템 테마, 전환 로직을 관리합니다.",
          code: `// src/store/slices/themeSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { getTheme, isValidTheme } from '../../styles/themes';

// localStorage에서 저장된 테마 가져오기
const getSavedTheme = () => {
  try {
    const saved = localStorage.getItem('theme');
    return isValidTheme(saved) ? saved : 'light';
  } catch {
    return 'light';
  }
};

// 시스템 테마 감지
const getSystemTheme = () => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
};

const initialState = {
  currentTheme: getSavedTheme(),
  systemTheme: getSystemTheme(),
  isSystemTheme: false
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light';
      state.isSystemTheme = false;
      localStorage.setItem('theme', state.currentTheme);
    },
    setTheme: (state, action) => {
      const themeName = action.payload;
      if (isValidTheme(themeName)) {
        state.currentTheme = themeName;
        state.isSystemTheme = false;
        localStorage.setItem('theme', themeName);
      }
    },
    setSystemTheme: (state, action) => {
      state.systemTheme = action.payload;
      // 사용자가 명시적으로 테마를 선택하지 않았다면 시스템 테마 따르기
      if (state.isSystemTheme || !localStorage.getItem('theme')) {
        state.currentTheme = action.payload;
      }
    },
    followSystemTheme: (state) => {
      state.currentTheme = state.systemTheme;
      state.isSystemTheme = true;
      localStorage.removeItem('theme');
    }
  }
});

export const { 
  toggleTheme, 
  setTheme, 
  setSystemTheme, 
  followSystemTheme 
} = themeSlice.actions;

// Selectors
export const selectCurrentTheme = (state) => getTheme(state.theme.currentTheme);
export const selectThemeName = (state) => state.theme.currentTheme;
export const selectSystemTheme = (state) => state.theme.systemTheme;
export const selectIsSystemTheme = (state) => state.theme.isSystemTheme;

export default themeSlice.reducer;`,
          explanation: "테마 슬라이스는 테마 관련 모든 상태와 로직을 관리합니다. localStorage 영속성과 시스템 테마 감지를 포함합니다."
        },
        {
          title: "5. 시스템 테마 감지 훅 구현",
          content: "사용자의 시스템 테마 설정을 실시간으로 감지하는 커스텀 훅을 구현합니다.",
          code: `// src/hooks/useSystemThemeDetection.js
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSystemTheme } from '../store/slices/themeSlice';

export const useSystemThemeDetection = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // 시스템 테마 변경 감지
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      const systemTheme = mediaQuery.matches ? 'dark' : 'light';
      dispatch(setSystemTheme(systemTheme));
    };

    // 초기 시스템 테마 설정
    handleChange();

    // 시스템 테마 변경 리스너 등록
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // 구형 브라우저 지원
      mediaQuery.addListener(handleChange);
    }

    // 클린업
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, [dispatch]);
};`,
          explanation: "시스템 테마 감지 훅은 사용자의 OS 테마 설정 변경을 실시간으로 감지하여 Redux 상태를 업데이트합니다."
        },
        {
          title: "6. 테마 커스텀 훅 구현",
          content: "테마 관련 기능을 쉽게 사용할 수 있는 커스텀 훅을 구현합니다.",
          code: `// src/hooks/useTheme.js
import { useSelector, useDispatch } from 'react-redux';
import { 
  toggleTheme, 
  setTheme, 
  followSystemTheme,
  selectCurrentTheme,
  selectThemeName,
  selectSystemTheme,
  selectIsSystemTheme
} from '../store/slices/themeSlice';

export const useTheme = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectCurrentTheme);
  const themeName = useSelector(selectThemeName);
  const systemTheme = useSelector(selectSystemTheme);
  const isSystemTheme = useSelector(selectIsSystemTheme);

  const toggle = () => {
    dispatch(toggleTheme());
  };

  const set = (themeName) => {
    dispatch(setTheme(themeName));
  };

  const followSystem = () => {
    dispatch(followSystemTheme());
  };

  return {
    currentTheme,
    themeName,
    systemTheme,
    isSystemTheme,
    toggle,
    set,
    followSystem
  };
};`,
          explanation: "useTheme 훅은 테마 관련 모든 기능을 하나의 인터페이스로 제공하여 컴포넌트에서 쉽게 사용할 수 있게 합니다."
        },
        {
          title: "7. 동적 전역 스타일 업데이트",
          content: "테마 변경에 따라 동적으로 스타일이 적용되도록 GlobalStyle을 업데이트합니다.",
          code: `// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle\`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: \${({ theme }) => theme.fonts.primary};
    background-color: \${({ theme }) => theme.colors.background};
    color: \${({ theme }) => theme.colors.text.primary};
    line-height: 1.6;
    overflow-x: hidden;
    transition: background-color \${({ theme }) => theme.transitions.normal},
                color \${({ theme }) => theme.transitions.normal};
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* Focus styles for accessibility */
  button:focus-visible,
  input:focus-visible,
  textarea:focus-visible {
    outline: 2px solid \${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  /* Selection color */
  ::selection {
    background-color: \${({ theme }) => theme.colors.primary};
    color: \${({ theme }) => theme.colors.text.inverse};
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: \${({ theme }) => theme.colors.scrollbar.track};
  }

  ::-webkit-scrollbar-thumb {
    background: \${({ theme }) => theme.colors.scrollbar.thumb};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: \${({ theme }) => theme.colors.scrollbar.thumbHover};
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Remove default styles */
  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
\`;`,
          explanation: "동적 GlobalStyle은 테마 변경 시 부드러운 전환 효과와 함께 모든 스타일이 적용되도록 보장합니다."
        },
        {
          title: "8. ThemeProvider 래퍼 구현",
          content: "Redux 상태와 styled-components ThemeProvider를 연결하는 래퍼 컴포넌트를 구현합니다.",
          code: `// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle.js';
import { store } from './store/store.js';
import App from './App.jsx';
import { useSelector } from 'react-redux';
import { selectTheme } from './store/slices/themeSlice';
import { useSystemThemeDetection } from './hooks/useSystemThemeDetection';

// 테마 프로바이더 컴포넌트
/* eslint-disable react-refresh/only-export-components */
const ThemeProviderWrapper = ({ children }) => {
  const theme = useSelector(selectTheme);
  
  // 시스템 테마 변경 감지
  useSystemThemeDetection();
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProviderWrapper>
        <App />
      </ThemeProviderWrapper>
    </Provider>
  </StrictMode>
);`,
          explanation: "ThemeProviderWrapper는 Redux 상태를 styled-components ThemeProvider와 연결하여 동적 테마 전환을 가능하게 합니다."
        }
      ],
      codeExamples: [
        {
          title: "테마 토글 버튼 컴포넌트",
          code: `// src/components/common/ThemeToggle.jsx
import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../hooks/useTheme';

const ToggleButton = styled.button\`
  background: \${({ theme, isDark }) => 
    isDark ? theme.colors.primary : theme.colors.secondary};
  border: none;
  border-radius: 2rem;
  padding: 0.5rem;
  cursor: pointer;
  transition: all \${({ theme }) => theme.transitions.fast};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;

  &:hover {
    transform: scale(1.05);
    box-shadow: \${({ theme }) => theme.shadows.md};
  }

  &:focus-visible {
    outline: 2px solid \${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
\`;

const IconContainer = styled.span\`
  font-size: 1.2rem;
  transition: transform \${({ theme }) => theme.transitions.normal};
  
  \${ToggleButton}:hover & {
    transform: rotate(20deg);
  }
\`;

const ThemeToggle = () => {
  const { currentTheme, toggle } = useTheme();
  const isDark = currentTheme.name === 'dark';

  const handleToggle = () => {
    toggle();
  };

  return (
    <ToggleButton 
      onClick={handleToggle} 
      isDark={isDark}
      aria-label="테마 전환"
    >
      <IconContainer>
        {isDark ? '🌙' : '☀️'}
      </IconContainer>
    </ToggleButton>
  );
};

export default ThemeToggle;`,
          explanation: "테마 토글 버튼은 접근성을 고려하고 부드러운 애니메이션 효과를 제공합니다."
        },
        {
          title: "테마 선택 드롭다운",
          code: `// src/components/common/ThemeSelector.jsx
import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../hooks/useTheme';

const SelectorContainer = styled.div\`
  position: relative;
\`;

const SelectorButton = styled.button\`
  background: \${({ theme }) => theme.colors.surface};
  border: 1px solid \${({ theme }) => theme.colors.border};
  border-radius: \${({ theme }) => theme.borderRadius.md};
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all \${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: \${({ theme }) => theme.colors.primary};
  }
\`;

const Dropdown = styled.div\`
  position: absolute;
  top: 100%;
  right: 0;
  background: \${({ theme }) => theme.colors.surface};
  border: 1px solid \${({ theme }) => theme.colors.border};
  border-radius: \${({ theme }) => theme.borderRadius.md};
  box-shadow: \${({ theme }) => theme.shadows.lg};
  z-index: 1000;
  min-width: 150px;
\`;

const Option = styled.button\`
  width: 100%;
  background: none;
  border: none;
  padding: 0.75rem 1rem;
  text-align: left;
  cursor: pointer;
  transition: background-color \${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: \${({ theme }) => theme.colors.background};
  }

  &.active {
    background-color: \${({ theme }) => theme.colors.primary};
    color: \${({ theme }) => theme.colors.text.inverse};
  }
\`;

const ThemeSelector = () => {
  const { themeName, systemTheme, isSystemTheme, set, followSystem } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSelect = (theme) => {
    if (theme === 'system') {
      followSystem();
    } else {
      set(theme);
    }
    setIsOpen(false);
  };

  return (
    <SelectorContainer>
      <SelectorButton onClick={() => setIsOpen(!isOpen)}>
        테마: {isSystemTheme ? '시스템' : themeName === 'light' ? '라이트' : '다크'}
      </SelectorButton>
      
      {isOpen && (
        <Dropdown>
          <Option 
            onClick={() => handleSelect('light')}
            className={themeName === 'light' && !isSystemTheme ? 'active' : ''}
          >
            ☀️ 라이트
          </Option>
          <Option 
            onClick={() => handleSelect('dark')}
            className={themeName === 'dark' && !isSystemTheme ? 'active' : ''}
          >
            🌙 다크
          </Option>
          <Option 
            onClick={() => handleSelect('system')}
            className={isSystemTheme ? 'active' : ''}
          >
            💻 시스템
          </Option>
        </Dropdown>
      )}
    </SelectorContainer>
  );
};

export default ThemeSelector;`,
          explanation: "테마 선택 드롭다운은 사용자에게 더 많은 테마 선택 옵션을 제공합니다."
        }
      ],
      tips: [
        "테마 전환 시 부드러운 애니메이션을 위해 CSS transition을 사용하세요",
        "접근성을 위해 aria-label과 키보드 내비게이션을 지원하세요",
        "사용자의 테마 선택을 localStorage에 저장하여 재방문 시에도 유지하세요",
        "시스템 테마를 감지하여 사용자 경험을 개선하세요",
        "테마 객체는 가능한 한 평평한 구조를 유지하여 성능을 최적화하세요",
        "CSS 변수를 사용하면 JavaScript 없이도 테마 전환이 가능합니다"
      ],
      commonErrors: [
        {
          error: "테마가 적용되지 않음",
          solution: "컴포넌트가 ThemeProvider 내부에 있는지 확인하고, 테마 객체 구조가 올바른지 검증하세요"
        },
        {
          error: "localStorage 접근 오류",
          solution: "SSR 환경에서는 window 객체가 없을 수 있으니 try-catch로 감싸거나 typeof window 체크를 사용하세요"
        },
        {
          error: "시스템 테마 감지가 동작하지 않음",
          solution: "matchMedia API를 지원하는 브라우저인지 확인하고, 이벤트 리스너 등록/해제를 올바르게 처리하세요"
        },
        {
          error: "테마 전환 시 깜빡임 현상",
          solution: "CSS transition을 추가하고, 테마 변경을 최소화하여 성능을 최적화하세요"
        }
       ]
     },
     '3-1': {
       title: "TypingTextDisplay 컴포넌트 초기 설정 및 기본 텍스트 렌더링",
       description: "TypingTextDisplay 컴포넌트를 생성하고, props로 받은 문자열을 개별 문자로 분리하여 화면에 표시합니다.",
       objectives: [
         "React 컴포넌트 기본 구조 이해하기",
         "문자열 분리 및 배열 매핑",
         "JSX에서 동적 렌더링",
         "고유 key prop 할당",
         "기본 스타일링 적용",
         "컴포넌트 props 타입 정의"
       ],
       prerequisites: [
         "React 기본 지식",
         "JavaScript ES6+ 문법",
         "Styled-components 사용법"
       ],
       steps: [
         {
           title: "1. TypingTextDisplay 컴포넌트 생성",
           content: "새로운 React 컴포넌트를 생성하고 기본 구조를 설정합니다.",
           code: `// src/components/TypingTextDisplay.jsx
import React from 'react';
import styled from 'styled-components';

const TypingTextDisplay = ({ text }) => {
  return (
    <TextContainer>
      <p>{text}</p>
    </TextContainer>
  );
};

export default TypingTextDisplay;`,
           explanation: "기본적인 React 함수형 컴포넌트를 생성합니다. props로 text를 받아 화면에 표시합니다."
         },
         {
           title: "2. 텍스트를 개별 문자로 분리",
           content: "받은 텍스트를 split() 메소드를 사용하여 개별 문자 배열로 변환합니다.",
           code: `const TypingTextDisplay = ({ text }) => {
  const characters = text.split('');
  
  return (
    <TextContainer>
      {characters.map((char, index) => (
        <span key={index}>{char}</span>
      ))}
    </TextContainer>
  );
};`,
           explanation: "text.split('')로 각 문자를 분리하고, map()으로 각 문자에 대해 span 요소를 생성합니다."
         },
         {
           title: "3. 스타일드 컴포넌트로 스타일링",
           content: "Styled-components를 사용하여 텍스트 표시 영역의 스타일을 정의합니다.",
           code: `const TextContainer = styled.div\`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 1.5rem;
  background: \${props => props.theme.colors.surface};
  border-radius: 8px;
  border: 2px solid \${props => props.theme.colors.border};
  margin: 1rem 0;
\`;

const CharacterSpan = styled.span\`
  display: inline-block;
  margin: 0 1px;
\`;`,
           explanation: "TextContainer는 전체 텍스트 영역의 스타일을, CharacterSpan은 각 문자의 스타일을 정의합니다."
         },
         {
           title: "4. 컴포넌트에 스타일 적용",
           content: "생성한 스타일드 컴포넌트를 JSX에 적용합니다.",
           code: `const TypingTextDisplay = ({ text }) => {
  const characters = text.split('');
  
  return (
    <TextContainer>
      {characters.map((char, index) => (
        <CharacterSpan key={index}>
          {char}
        </CharacterSpan>
      ))}
    </TextContainer>
  );
};`,
           explanation: "각 문자를 CharacterSpan으로 감싸서 개별 스타일링이 가능하도록 합니다."
         }
       ],
       codeExamples: [
         {
           title: "완성된 TypingTextDisplay 컴포넌트",
           code: `import React from 'react';
import styled from 'styled-components';

const TextContainer = styled.div\`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 1.5rem;
  background: \${props => props.theme.colors.surface};
  border-radius: 8px;
  border: 2px solid \${props => props.theme.colors.border};
  margin: 1rem 0;
\`;

const CharacterSpan = styled.span\`
  display: inline-block;
  margin: 0 1px;
\`;

const TypingTextDisplay = ({ text }) => {
  if (!text) return null;
  
  const characters = text.split('');
  
  return (
    <TextContainer>
      {characters.map((char, index) => (
        <CharacterSpan key={index}>
          {char}
        </CharacterSpan>
      ))}
    </TextContainer>
  );
};

export default TypingTextDisplay;`,
           explanation: "기본적인 텍스트 표시 컴포넌트가 완성되었습니다. 각 문자가 개별 span 요소로 렌더링됩니다."
         },
         {
           title: "컴포넌트 사용 예시",
           code: `import TypingTextDisplay from './components/TypingTextDisplay';

const PracticePage = () => {
  const sampleText = "안녕하세요. 타이핑 연습을 시작합니다.";
  
  return (
    <div>
      <h1>타이핑 연습</h1>
      <TypingTextDisplay text={sampleText} />
    </div>
  );
};`,
           explanation: "TypingTextDisplay 컴포넌트를 다른 컴포넌트에서 사용하는 방법을 보여줍니다."
         }
       ],
       tips: [
         "React에서 map()을 사용할 때는 항상 key prop을 제공하세요",
         "빈 텍스트나 null 값에 대한 처리를 추가하세요",
         "한글 폰트(Noto Sans KR)를 사용하여 가독성을 높이세요",
         "반응형 디자인을 고려하여 폰트 크기를 조정하세요"
       ],
       commonErrors: [
         {
           error: "Warning: Each child in a list should have a unique 'key' prop",
           solution: "map() 함수에서 각 요소에 고유한 key prop을 추가하세요"
         },
         {
           error: "Cannot read property 'split' of undefined",
           solution: "text prop이 undefined일 수 있으니 기본값을 설정하거나 조건부 렌더링을 사용하세요"
         }
       ]
     },
     '3-2': {
       title: "입력 진행 상태 및 오류 추적을 위한 상태 관리 구현",
       description: "Redux Toolkit을 사용하여 타이핑 진행 상태, 문자별 상태, 오류 위치를 추적하는 상태 관리 시스템을 구현합니다.",
       objectives: [
         "Redux Toolkit 슬라이스 확장",
         "문자 단위 상태 추적",
         "배열 상태 관리 패턴",
         "액션 및 리듀서 설계",
         "상태 초기화 로직",
         "선택자(Selector) 활용"
       ],
       prerequisites: [
         "Redux Toolkit 기본 지식",
         "React Hooks 사용법",
         "JavaScript 배열 메소드"
       ],
       steps: [
         {
           title: "1. 타이핑 슬라이스 확장",
           content: "기존 typingSlice에 문자별 상태 추적을 위한 필드를 추가합니다.",
           code: `const initialState = {
  currentText: '',
  userInput: '',
  isTyping: false,
  startTime: null,
  endTime: null,
  wpm: 0,
  accuracy: 0,
  errors: [],
  // 새로 추가되는 필드들
  charStates: [], // 각 문자의 상태: 'correct', 'incorrect', 'current', 'untyped'
  currentIndex: 0, // 현재 타이핑 위치
};`,
           explanation: "타이핑 상태를 더 세밀하게 추적하기 위한 필드들을 추가합니다."
         },
         {
           title: "2. 텍스트 설정 액션",
           content: "새로운 연습 텍스트를 설정할 때 상태를 초기화하는 액션을 추가합니다.",
           code: `reducers: {
  setCurrentText: (state, action) => {
    state.currentText = action.payload;
    state.userInput = '';
    state.currentIndex = 0;
    state.errors = [];
    state.charStates = new Array(action.payload.length).fill('untyped');
    if (state.charStates.length > 0) {
      state.charStates[0] = 'current';
    }
  },
  // ... 기존 reducers
},`,
           explanation: "새 텍스트가 설정될 때 모든 관련 상태를 초기화합니다."
         },
         {
           title: "3. 입력 업데이트 로직",
           content: "사용자 입력에 따라 문자 상태를 업데이트하는 로직을 구현합니다.",
           code: `updateTypedText: (state, action) => {
  const newInput = action.payload;
  state.userInput = newInput;
  state.currentIndex = newInput.length;

  // 각 문자 상태 업데이트
  const textLength = state.currentText.length;
  state.charStates = [];
  state.errors = [];

  for (let i = 0; i < textLength; i++) {
    if (i < newInput.length) {
      const isCorrect = newInput[i] === state.currentText[i];
      state.charStates.push(isCorrect ? 'correct' : 'incorrect');
      if (!isCorrect) {
        state.errors.push(i);
      }
    } else if (i === newInput.length) {
      state.charStates.push('current');
    } else {
      state.charStates.push('untyped');
    }
  }
},`,
           explanation: "입력된 텍스트와 원본 텍스트를 비교하여 각 문자의 상태를 결정합니다."
         },
         {
           title: "4. 선택자 생성",
           content: "컴포넌트에서 상태를 쉽게 가져올 수 있도록 선택자를 생성합니다.",
           code: `export const selectCharStates = (state) => state.typing.charStates;
export const selectErrors = (state) => state.typing.errors;
export const selectCurrentIndex = (state) => state.typing.currentIndex;
export const selectTypingProgress = createSelector(
  [selectCharStates],
  (charStates) => {
    const total = charStates.length;
    const typed = charStates.filter(state => state === 'correct' || state === 'incorrect').length;
    return {
      total,
      typed,
      progress: total > 0 ? Math.round((typed / total) * 100) : 0
    };
  }
);`,
           explanation: "선택자를 사용하여 계산된 값을 메모이제이션합니다."
         }
       ],
       codeExamples: [
         {
           title: "확장된 typingSlice",
           code: `import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  currentText: '',
  userInput: '',
  isTyping: false,
  startTime: null,
  endTime: null,
  wpm: 0,
  accuracy: 0,
  errors: [],
  charStates: [],
  currentIndex: 0,
};

const typingSlice = createSlice({
  name: 'typing',
  initialState,
  reducers: {
    setCurrentText: (state, action) => {
      state.currentText = action.payload;
      state.userInput = '';
      state.currentIndex = 0;
      state.errors = [];
      state.charStates = new Array(action.payload.length).fill('untyped');
      if (state.charStates.length > 0) {
        state.charStates[0] = 'current';
      }
    },
    updateTypedText: (state, action) => {
      const newInput = action.payload;
      state.userInput = newInput;
      state.currentIndex = newInput.length;

      const textLength = state.currentText.length;
      state.charStates = [];
      state.errors = [];

      for (let i = 0; i < textLength; i++) {
        if (i < newInput.length) {
          const isCorrect = newInput[i] === state.currentText[i];
          state.charStates.push(isCorrect ? 'correct' : 'incorrect');
          if (!isCorrect) {
            state.errors.push(i);
          }
        } else if (i === newInput.length) {
          state.charStates.push('current');
        } else {
          state.charStates.push('untyped');
        }
      }
    },
    startTyping: (state) => {
      state.isTyping = true;
      state.startTime = Date.now();
    },
    finishTyping: (state) => {
      state.isTyping = false;
      state.endTime = Date.now();
    },
  },
});

export const {
  setCurrentText,
  updateTypedText,
  startTyping,
  finishTyping
} = typingSlice.actions;

export const selectCharStates = (state) => state.typing.charStates;
export const selectErrors = (state) => state.typing.errors;
export const selectCurrentIndex = (state) => state.typing.currentIndex;

export default typingSlice.reducer;`,
           explanation: "타이핑 상태 관리를 위한 완전한 Redux 슬라이스가 구현되었습니다."
         },
         {
           title: "컴포넌트에서 상태 사용",
           code: `import { useSelector } from 'react-redux';
import { selectCharStates, selectErrors, selectCurrentIndex } from '../store/slices/typingSlice';

const TypingTextDisplay = ({ text }) => {
  const charStates = useSelector(selectCharStates);
  const errors = useSelector(selectErrors);
  const currentIndex = useSelector(selectCurrentIndex);

  const renderCharacters = () => {
    if (!text) return null;

    return text.split('').map((char, index) => {
      const state = charStates[index] || 'untyped';
      const hasError = errors.includes(index);

      return (
        <CharacterSpan
          key={index}
          state={state}
          hasError={hasError}
        >
          {char}
        </CharacterSpan>
      );
    });
  };

  return (
    <TextContainer>
      {renderCharacters()}
    </TextContainer>
  );
};`,
           explanation: "컴포넌트에서 Redux 상태를 사용하여 각 문자의 상태를 반영합니다."
         }
       ],
       tips: [
         "상태 구조를 최대한 평평하게 유지하세요",
         "불필요한 리렌더링을 방지하기 위해 선택자를 사용하세요",
         "배열 상태 업데이트 시 Immer의 이점을 활용하세요",
         "상태 변경 로직을 테스트하기 쉽게 분리하세요"
       ],
       commonErrors: [
         {
           error: "charStates array length mismatch",
           solution: "텍스트 길이와 charStates 배열 길이가 일치하는지 확인하세요"
         },
         {
           error: "Maximum call stack size exceeded",
           solution: "상태 업데이트 로직에서 무한 루프를 발생시키는 코드를 확인하세요"
         }
       ]
     },
     '3-3': {
       title: "입력 상태에 따른 문자별 동적 스타일링 로직 구현",
       description: "문자 상태(correct, incorrect, current, untyped)에 따라 동적인 CSS 스타일과 애니메이션을 적용하는 시스템을 구현합니다.",
       objectives: [
         "동적 스타일링 패턴",
         "CSS-in-JS 조건부 스타일",
         "애니메이션 키프레임 정의",
         "테마 기반 색상 시스템",
         "반응형 타이포그래피",
         "시각적 피드백 디자인"
       ],
       prerequisites: [
         "Styled-components 고급 사용법",
         "CSS 애니메이션",
         "JavaScript 객체와 함수"
       ],
       steps: [
         {
           title: "1. 상태별 스타일 함수 생성",
           content: "각 문자 상태에 따라 다른 스타일을 반환하는 유틸리티 함수를 생성합니다.",
           code: `// src/styles/TypingStyles.js
export const getCharacterStyles = (theme, state, hasError = false) => {
  const baseStyles = {
    display: 'inline-block',
    margin: '0 1px',
    padding: '2px 1px',
    borderRadius: '2px',
    transition: 'all 0.2s ease',
    position: 'relative',
  };

  const stateStyles = {
    correct: {
      color: theme.colors.success,
      backgroundColor: \`\${theme.colors.success}15\`,
    },
    incorrect: {
      color: theme.colors.error,
      backgroundColor: \`\${theme.colors.error}20\`,
      animation: 'shake 0.3s ease-in-out',
    },
    current: {
      backgroundColor: \`\${theme.colors.primary}20\`,
      borderBottom: \`3px solid \${theme.colors.primary}\`,
      animation: 'blink 1s infinite',
    },
    untyped: {
      color: theme.colors.textSecondary,
      opacity: 0.7,
    },
  };

  const errorStyles = hasError ? {
    boxShadow: \`0 0 0 1px \${theme.colors.error}\`,
  } : {};

  return {
    ...baseStyles,
    ...stateStyles[state],
    ...errorStyles,
  };
};`,
           explanation: "상태에 따른 스타일을 동적으로 생성하는 함수를 정의합니다."
         },
         {
           title: "2. 애니메이션 정의",
           content: "CSS 키프레임을 사용하여 애니메이션 효과를 정의합니다.",
           code: `import { keyframes } from 'styled-components';

export const shakeAnimation = keyframes\`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
\`;

export const blinkAnimation = keyframes\`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0.3; }
\`;`,
           explanation: "오류 시 흔들림 효과와 현재 위치 표시를 위한 깜빡임 애니메이션을 정의합니다."
         },
         {
           title: "3. 스타일드 컴포넌트에 동적 스타일 적용",
           content: "CharacterSpan 컴포넌트에 동적 스타일링 로직을 적용합니다.",
           code: `import styled from 'styled-components';
import { getCharacterStyles } from './TypingStyles';

export const CharacterSpan = styled.span\`
  \${props => getCharacterStyles(props.theme, props.state, props.hasError)}
  
  /* 호버 효과 */
  &:hover {
    transform: translateY(-1px);
  }
\`;`,
           explanation: "props를 기반으로 동적으로 스타일을 적용하는 스타일드 컴포넌트를 생성합니다."
         },
         {
           title: "4. TypingTextDisplay 컴포넌트 업데이트",
           content: "컴포넌트에서 상태에 따라 적절한 props를 CharacterSpan에 전달합니다.",
           code: `const TypingTextDisplay = ({ text }) => {
  const charStates = useSelector(selectCharStates);
  const errors = useSelector(selectErrors);

  const renderCharacters = () => {
    if (!text) return null;

    return text.split('').map((char, index) => {
      const state = charStates[index] || 'untyped';
      const hasError = errors.includes(index);

      return (
        <CharacterSpan
          key={index}
          state={state}
          hasError={hasError}
          data-index={index}
        >
          {char}
        </CharacterSpan>
      );
    });
  };

  return (
    <TextContainer>
      {renderCharacters()}
    </TextContainer>
  );
};`,
           explanation: "각 문자의 상태를 기반으로 적절한 스타일을 적용합니다."
         }
       ],
       codeExamples: [
         {
           title: "완성된 스타일링 시스템",
           code: `// src/styles/TypingStyles.js
import { keyframes } from 'styled-components';

export const shakeAnimation = keyframes\`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
\`;

export const blinkAnimation = keyframes\`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0.3; }
\`;

export const getCharacterStyles = (theme, state, hasError = false) => {
  const baseStyles = {
    display: 'inline-block',
    margin: '0 1px',
    padding: '2px 1px',
    borderRadius: '2px',
    transition: 'all 0.2s ease',
    position: 'relative',
  };

  const stateStyles = {
    correct: {
      color: theme.colors.success,
      backgroundColor: \`\${theme.colors.success}15\`,
    },
    incorrect: {
      color: theme.colors.error,
      backgroundColor: \`\${theme.colors.error}20\`,
      animation: \`\${shakeAnimation} 0.3s ease-in-out\`,
    },
    current: {
      backgroundColor: \`\${theme.colors.primary}20\`,
      borderBottom: \`3px solid \${theme.colors.primary}\`,
      animation: \`\${blinkAnimation} 1s infinite\`,
    },
    untyped: {
      color: theme.colors.textSecondary,
      opacity: 0.7,
    },
  };

  const errorStyles = hasError ? {
    boxShadow: \`0 0 0 1px \${theme.colors.error}\`,
  } : {};

  return {
    ...baseStyles,
    ...stateStyles[state],
    ...errorStyles,
  };
};

// src/components/TypingTextDisplay.jsx
import styled from 'styled-components';
import { getCharacterStyles } from '../styles/TypingStyles';

export const CharacterSpan = styled.span\`
  \${props => getCharacterStyles(props.theme, props.state, props.hasError)}
\`;`,
           explanation: "동적 스타일링을 위한 완전한 시스템이 구현되었습니다."
         },
         {
           title: "반응형 스타일링",
           code: `export const TextContainer = styled.div\`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 1.5rem;
  background: \${props => props.theme.colors.surface};
  border-radius: 8px;
  border: 2px solid \${props => props.theme.colors.border};
  margin: 1rem 0;

  /* 반응형 디자인 */
  @media (max-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    line-height: 1.5rem;
    padding: 0.75rem;
  }
\`;`,
           explanation: "화면 크기에 따라 폰트 크기와 패딩을 조정하는 반응형 스타일을 적용합니다."
         }
       ],
       tips: [
         "애니메이션은 과도하게 사용하지 말고 중요한 피드백에만 적용하세요",
         "색각 이상이 있는 사용자를 고려하여 색상만으로 정보를 전달하지 마세요",
         "CSS transition을 사용하여 상태 변화 시 부드러운 전환 효과를 주세요",
         "성능을 위해 transform 속성을 사용한 애니메이션을 선호하세요"
       ],
       commonErrors: [
         {
           error: "Animation not working",
           solution: "keyframes를 올바르게 import했고, 애니메이션 이름을 올바르게 참조했는지 확인하세요"
         },
         {
           error: "Styles not updating",
           solution: "컴포넌트 props가 올바르게 전달되고 있는지 확인하세요"
         }
       ]
     },
     '3-4': {
       title: "외부 입력 이벤트 처리 및 useTypingInput 훅 구현",
       description: "키보드 입력, 한국어 IME 처리, 붙여넣기 방지 등 외부 입력 이벤트를 처리하는 커스텀 훅을 구현합니다.",
       objectives: [
         "커스텀 훅 설계 원칙",
         "키보드 이벤트 처리",
         "한국어 IME 조합 이벤트",
         "입력 유효성 검사",
         "붙여넣기 방지 로직",
         "단축키 구현"
       ],
       prerequisites: [
         "React Hooks 고급 사용법",
         "DOM 이벤트 처리",
         "한국어 입력 방식 이해"
       ],
       steps: [
         {
           title: "1. useTypingInput 훅 기본 구조",
           content: "타이핑 입력을 처리하는 커스텀 훅의 기본 구조를 생성합니다.",
           code: `// src/hooks/useTypingInput.js
import { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTypedText, startTyping } from '../store/slices/typingSlice';

export const useTypingInput = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const { currentText, isTyping } = useSelector(state => state.typing);

  const handleCharacterInput = useCallback((character) => {
    if (!currentText) return;

    if (!isTyping) {
      dispatch(startTyping());
    }

    // 현재 입력 텍스트에 문자 추가
    const currentInput = useSelector(state => state.typing.userInput);
    const newInput = currentInput + character;
    dispatch(updateTypedText(newInput));
  }, [currentText, isTyping, dispatch]);

  return {
    inputRef,
    handleCharacterInput,
  };
};`,
           explanation: "타이핑 입력 처리를 위한 기본적인 커스텀 훅 구조를 생성합니다."
         },
         {
           title: "2. 키보드 이벤트 리스너 구현",
           content: "키보드 입력을 감지하고 처리하는 이벤트 리스너를 구현합니다.",
           code: `const handleKeyDown = useCallback((event) => {
  const { key, ctrlKey, metaKey, shiftKey } = event;

  // 특수 키 처리
  if (ctrlKey || metaKey) {
    switch (key) {
      case 'Backspace':
        event.preventDefault();
        // 전체 삭제 로직
        break;
      default:
        return; // 다른 Ctrl/Cmd 조합은 무시
    }
  }

  // 일반 문자 입력
  if (key.length === 1 && !ctrlKey && !metaKey) {
    event.preventDefault();
    handleCharacterInput(key);
  }

  // Backspace 처리
  if (key === 'Backspace' && !ctrlKey && !metaKey) {
    event.preventDefault();
    const currentInput = useSelector(state => state.typing.userInput);
    const newInput = currentInput.slice(0, -1);
    dispatch(updateTypedText(newInput));
  }
}, [handleCharacterInput, dispatch]);`,
           explanation: "키보드 이벤트를 처리하여 타이핑 입력을 관리합니다."
         },
         {
           title: "3. 한국어 IME 처리",
           content: "한국어 입력 시 조합 중인 상태를 올바르게 처리합니다.",
           code: `const [isComposing, setIsComposing] = useState(false);

const handleCompositionStart = useCallback(() => {
  setIsComposing(true);
}, []);

const handleCompositionEnd = useCallback((event) => {
  setIsComposing(false);
  const finalChar = event.data;
  if (finalChar) {
    handleCharacterInput(finalChar);
  }
}, [handleCharacterInput]);

// 이벤트 리스너 설정
useEffect(() => {
  const inputElement = inputRef.current;
  if (!inputElement) return;

  inputElement.addEventListener('keydown', handleKeyDown);
  inputElement.addEventListener('compositionstart', handleCompositionStart);
  inputElement.addEventListener('compositionend', handleCompositionEnd);

  return () => {
    inputElement.removeEventListener('keydown', handleKeyDown);
    inputElement.removeEventListener('compositionstart', handleCompositionStart);
    inputElement.removeEventListener('compositionend', handleCompositionEnd);
  };
}, [handleKeyDown, handleCompositionStart, handleCompositionEnd]);`,
           explanation: "IME 조합 이벤트를 처리하여 한국어 입력을 올바르게 지원합니다."
         },
         {
           title: "4. 입력 필드 컴포넌트 생성",
           content: "실제 입력을 받는 hidden input 필드를 생성합니다.",
           code: `// src/components/TypingInput.jsx
import React from 'react';
import styled from 'styled-components';
import { useTypingInput } from '../hooks/useTypingInput';

const HiddenInput = styled.input\`
  position: absolute;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
\`;

const TypingInput = () => {
  const { inputRef } = useTypingInput();

  return (
    <HiddenInput
      ref={inputRef}
      autoFocus
      spellCheck={false}
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
    />
  );
};

export default TypingInput;`,
           explanation: "화면에 보이지 않는 입력 필드를 생성하여 키보드 입력을 캡처합니다."
         }
       ],
       codeExamples: [
         {
           title: "완성된 useTypingInput 훅",
           code: `import { useEffect, useRef, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTypedText, startTyping } from '../store/slices/typingSlice';

export const useTypingInput = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const { currentText, isTyping, userInput } = useSelector(state => state.typing);
  const [isComposing, setIsComposing] = useState(false);

  const handleCharacterInput = useCallback((character) => {
    if (!currentText || isComposing) return;

    if (!isTyping) {
      dispatch(startTyping());
    }

    const newInput = userInput + character;
    dispatch(updateTypedText(newInput));
  }, [currentText, isTyping, userInput, isComposing, dispatch]);

  const handleKeyDown = useCallback((event) => {
    if (isComposing) return;

    const { key, ctrlKey, metaKey } = event;

    if (key.length === 1 && !ctrlKey && !metaKey) {
      event.preventDefault();
      handleCharacterInput(key);
    } else if (key === 'Backspace' && !ctrlKey && !metaKey) {
      event.preventDefault();
      const newInput = userInput.slice(0, -1);
      dispatch(updateTypedText(newInput));
    }
  }, [handleCharacterInput, userInput, isComposing, dispatch]);

  const handleCompositionStart = useCallback(() => {
    setIsComposing(true);
  }, []);

  const handleCompositionEnd = useCallback((event) => {
    setIsComposing(false);
    const finalChar = event.data;
    if (finalChar) {
      handleCharacterInput(finalChar);
    }
  }, [handleCharacterInput]);

  useEffect(() => {
    const inputElement = inputRef.current;
    if (!inputElement) return;

    inputElement.addEventListener('keydown', handleKeyDown);
    inputElement.addEventListener('compositionstart', handleCompositionStart);
    inputElement.addEventListener('compositionend', handleCompositionEnd);

    return () => {
      inputElement.removeEventListener('keydown', handleKeyDown);
      inputElement.removeEventListener('compositionstart', handleCompositionStart);
      inputElement.removeEventListener('compositionend', handleCompositionEnd);
    };
  }, [handleKeyDown, handleCompositionStart, handleCompositionEnd]);

  return {
    inputRef,
  };
};`,
           explanation: "한국어 IME를 지원하는 완전한 타이핑 입력 처리 훅이 구현되었습니다."
         },
         {
           title: "연습 페이지 통합",
           code: `// src/pages/PracticePage.jsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TypingTextDisplay from '../components/TypingTextDisplay';
import TypingInput from '../components/TypingInput';
import { setCurrentText } from '../store/slices/typingSlice';

const PracticePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // 초기 텍스트 설정
    const sampleText = "안녕하세요. 타이핑 연습을 시작합니다.";
    dispatch(setCurrentText(sampleText));
  }, [dispatch]);

  return (
    <div>
      <h1>타이핑 연습</h1>
      <TypingTextDisplay />
      <TypingInput />
    </div>
  );
};

export default PracticePage;`,
           explanation: "TypingTextDisplay와 TypingInput 컴포넌트를 통합한 연습 페이지입니다."
         }
       ],
       tips: [
         "IME 처리 시 composition 이벤트만 신뢰하고 keydown 이벤트는 보조적으로 사용하세요",
         "입력 필드는 화면에서 숨기고 포커스만 유지하세요",
         "preventDefault()를 적절히 사용하여 브라우저 기본 동작을 제어하세요",
         "접근성을 위해 input 요소에 적절한 속성을 추가하세요"
       ],
       commonErrors: [
         {
           error: "Korean characters not registering",
           solution: "compositionend 이벤트에서 최종 문자를 처리하도록 하세요"
         },
         {
           error: "Input focus lost",
           solution: "autoFocus 속성을 사용하고 포커스 관리를 신경쓰세요"
         }
       ]
     },
     '3-5': {
       title: "컴포넌트 접근성 및 성능 최적화",
       description: "스크린 리더 지원, 키보드 내비게이션, 성능 최적화를 통해 접근성과 사용자 경험을 개선합니다.",
       objectives: [
         "ARIA 속성 활용",
         "스크린 리더 announcements",
         "React.memo 최적화",
         "useMemo 훅 활용",
         "키보드 내비게이션",
         "성능 모니터링"
       ],
       prerequisites: [
         "웹 접근성 기본 지식",
         "React 성능 최적화",
         "ARIA 속성 이해"
       ],
       steps: [
         {
           title: "1. ARIA 속성 추가",
           content: "스크린 리더 사용자를 위한 접근성 속성을 컴포넌트에 추가합니다.",
           code: `const TypingTextDisplay = () => {
  return (
    <TextContainer
      role="textbox"
      aria-label="타이핑 연습 텍스트"
      aria-live="polite"
      aria-atomic="true"
    >
      {renderCharacters()}
    </TextContainer>
  );
};`,
           explanation: "ARIA 속성을 사용하여 스크린 리더가 컴포넌트를 올바르게 이해할 수 있도록 합니다."
         },
         {
           title: "2. 문자별 접근성 속성",
           content: "각 문자 요소에 접근성 정보를 추가합니다.",
           code: `const renderCharacters = () => {
  return text.split('').map((char, index) => {
    const state = charStates[index] || 'untyped';
    const hasError = errors.includes(index);
    
    return (
      <CharacterSpan
        key={index}
        state={state}
        hasError={hasError}
        role="text"
        aria-label={\`문자 \${index + 1}: \${char} (\${state})\`}
        data-index={index}
      >
        {char}
      </CharacterSpan>
    );
  });
};`,
           explanation: "각 문자에 대한 자세한 정보를 스크린 리더에 제공합니다."
         },
         {
           title: "3. 성능 최적화 - useMemo",
           content: "문자 렌더링 로직을 메모이제이션하여 불필요한 리렌더링을 방지합니다.",
           code: `const renderCharacters = useMemo(() => {
  if (!text) return null;

  return text.split('').map((char, index) => {
    const state = charStates[index] || 'untyped';
    const hasError = errors.includes(index);
    
    return (
      <CharacterSpan
        key={index}
        state={state}
        hasError={hasError}
        role="text"
        aria-label={\`문자 \${index + 1}: \${char} (\${state})\`}
      >
        {char}
      </CharacterSpan>
    );
  });
}, [text, charStates, errors]);`,
           explanation: "의존성이 변경될 때만 문자 배열을 다시 계산합니다."
         },
         {
           title: "4. React.memo 적용",
           content: "컴포넌트에 React.memo를 적용하여 props 변경 시에만 리렌더링합니다.",
           code: `const TypingTextDisplay = React.memo(() => {
  // 컴포넌트 로직...
  
  return (
    <TextContainer>
      {renderCharacters}
    </TextContainer>
  );
});`,
           explanation: "React.memo로 컴포넌트 리렌더링을 최적화합니다."
         },
         {
           title: "5. 통계 계산 최적화",
           content: "통계 계산 로직을 useMemo로 최적화합니다.",
           code: `const stats = useMemo(() => {
  const total = text.length;
  const typed = charStates.filter(state => 
    state === 'correct' || state === 'incorrect'
  ).length;
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
}, [text.length, charStates]);`,
           explanation: "통계 계산을 메모이제이션하여 성능을 향상시킵니다."
         }
       ],
       codeExamples: [
         {
           title: "접근성 및 성능 최적화된 컴포넌트",
           code: `import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectCharStates, selectErrors } from '../store/slices/typingSlice';

const TextContainer = styled.div\`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 1.5rem;
  background: \${props => props.theme.colors.surface};
  border-radius: 8px;
  border: 2px solid \${props => props.theme.colors.border};
  margin: 1rem 0;
\`;

const CharacterSpan = styled.span\`
  display: inline-block;
  margin: 0 1px;
  padding: 2px 1px;
  border-radius: 2px;
  transition: all 0.2s ease;
  
  \${props => {
    const baseStyles = {
      position: 'relative',
    };
    
    const stateStyles = {
      correct: {
        color: props.theme.colors.success,
        backgroundColor: \`\${props.theme.colors.success}15\`,
      },
      incorrect: {
        color: props.theme.colors.error,
        backgroundColor: \`\${props.theme.colors.error}20\`,
      },
      current: {
        backgroundColor: \`\${props.theme.colors.primary}20\`,
        borderBottom: \`3px solid \${props.theme.colors.primary}\`,
      },
      untyped: {
        color: props.theme.colors.textSecondary,
        opacity: 0.7,
      },
    };
    
    return {
      ...baseStyles,
      ...stateStyles[props.state],
    };
  }}
\`;

const TypingTextDisplay = React.memo(() => {
  const text = useSelector(state => state.typing.currentText);
  const charStates = useSelector(selectCharStates);
  const errors = useSelector(selectErrors);

  const renderCharacters = useMemo(() => {
    if (!text) return null;

    return text.split('').map((char, index) => {
      const state = charStates[index] || 'untyped';
      const hasError = errors.includes(index);
      
      return (
        <CharacterSpan
          key={index}
          state={state}
          hasError={hasError}
          role="text"
          aria-label={\`문자 \${index + 1}: \${char} (\${state})\`}
          data-index={index}
        >
          {char}
        </CharacterSpan>
      );
    });
  }, [text, charStates, errors]);

  const stats = useMemo(() => {
    const total = text.length;
    const typed = charStates.filter(state => 
      state === 'correct' || state === 'incorrect'
    ).length;
    const correct = charStates.filter(state => state === 'correct').length;
    
    return {
      total,
      typed,
      correct,
      progress: total > 0 ? Math.round((typed / total) * 100) : 0,
      accuracy: typed > 0 ? Math.round((correct / typed) * 100) : 0,
    };
  }, [text.length, charStates]);

  return (
    <TextContainer
      role="textbox"
      aria-label="타이핑 연습 텍스트"
      aria-live="polite"
      aria-atomic="true"
    >
      <div style={{ marginBottom: '1rem', fontSize: '0.9rem', color: '#666' }}>
        진행률: {stats.progress}% | 정확도: {stats.accuracy}%
      </div>
      {renderCharacters}
    </TextContainer>
  );
});

export default TypingTextDisplay;`,
           explanation: "접근성과 성능이 최적화된 완전한 TypingTextDisplay 컴포넌트입니다."
         },
         {
           title: "성능 모니터링",
           code: `// src/utils/performance.js
export const measureRenderTime = (componentName) => {
  const startTime = performance.now();
  
  return () => {
    const endTime = performance.now();
    console.log(\`\${componentName} render time: \${endTime - startTime}ms\`);
  };
};

// 컴포넌트에서 사용
const TypingTextDisplay = React.memo(() => {
  const endMeasure = measureRenderTime('TypingTextDisplay');
  
  useEffect(() => {
    endMeasure();
  });
  
  // 컴포넌트 로직...
});`,
           explanation: "컴포넌트 렌더링 시간을 측정하여 성능을 모니터링합니다."
         }
       ],
       tips: [
         "React.memo는 props가 복잡한 객체나 함수일 때 특히 효과적입니다",
         "useMemo는 무거운 계산이나 큰 배열 처리 시 사용하세요",
         "접근성 테스트를 위해 실제 스크린 리더로 테스트하세요",
         "성능 최적화는 실제 병목이 발생할 때만 적용하세요"
       ],
       commonErrors: [
         {
           error: "React.memo not working",
           solution: "props가 매번 새로 생성되는지 확인하고, 필요시 useCallback을 사용하세요"
         },
         {
           error: "Screen reader not announcing changes",
           solution: "aria-live 속성을 올바르게 설정했는지 확인하세요"
         }
       ]
     }
   };

  const subtask = subtaskData[subtaskId];
  
  if (!subtask) {
    return (
      <Container>
        <Title>서브태스크를 찾을 수 없습니다</Title>
        <Button onClick={onBack}>뒤로 가기</Button>
      </Container>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#007bff', marginBottom: '1rem' }}>학습 목표</h3>
              <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                {subtask.objectives.map((objective, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>{objective}</li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#007bff', marginBottom: '1rem' }}>사전 지식</h3>
              <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                {subtask.prerequisites.map((prereq, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>{prereq}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 style={{ color: '#007bff', marginBottom: '1rem' }}>단계별 가이드</h3>
              {subtask.steps.map((step, index) => (
                <Card key={index} style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#343a40', marginBottom: '1rem' }}>{step.title}</h4>
                  <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>{step.content}</p>
                  
                  {step.command && (
                    <div style={{ 
                      backgroundColor: '#f8f9fa', 
                      padding: '1rem', 
                      borderRadius: '0.5rem',
                      fontFamily: 'monospace',
                      marginBottom: '1rem'
                    }}>
                      {step.command}
                    </div>
                  )}

                  {step.commands && (
                    <div style={{ marginBottom: '1rem' }}>
                      {step.commands.map((cmd, cmdIndex) => (
                        <div key={cmdIndex} style={{ 
                          backgroundColor: '#f8f9fa', 
                          padding: '1rem', 
                          borderRadius: '0.5rem',
                          fontFamily: 'monospace',
                          marginBottom: '0.5rem'
                        }}>
                          {cmd}
                        </div>
                      ))}
                    </div>
                  )}

                  {step.code && (
                    <pre style={{ 
                      backgroundColor: '#f8f9fa', 
                      padding: '1rem', 
                      borderRadius: '0.5rem',
                      overflow: 'auto',
                      marginBottom: '1rem'
                    }}>
                      <code>{step.code}</code>
                    </pre>
                  )}

                  {step.explanation && (
                    <div style={{ 
                      backgroundColor: '#e7f3ff', 
                      padding: '1rem', 
                      borderRadius: '0.5rem',
                      borderLeft: '4px solid #007bff'
                    }}>
                      <strong>설명:</strong> {step.explanation}
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        );

      case 'examples':
        return (
          <div>
            <h3 style={{ color: '#007bff', marginBottom: '1.5rem' }}>코드 예제</h3>
            {subtask.codeExamples.map((example, index) => (
              <Card key={index} style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#343a40', marginBottom: '1rem' }}>{example.title}</h4>
                <pre style={{ 
                  backgroundColor: '#f8f9fa', 
                  padding: '1.5rem', 
                  borderRadius: '0.5rem',
                  overflow: 'auto',
                  marginBottom: '1rem',
                  fontSize: '0.9rem'
                }}>
                  <code>{example.code}</code>
                </pre>
                {example.explanation && (
                  <div style={{ 
                    backgroundColor: '#e7f3ff', 
                    padding: '1rem', 
                    borderRadius: '0.5rem',
                    borderLeft: '4px solid #007bff'
                  }}>
                    <strong>설명:</strong> {example.explanation}
                  </div>
                )}
              </Card>
            ))}
          </div>
        );

      case 'tips':
        return (
          <div>
            <h3 style={{ color: '#007bff', marginBottom: '1.5rem' }}>학습 팁</h3>
            <Card style={{ backgroundColor: '#fff3cd', border: '1px solid #ffeaa7' }}>
              <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                {subtask.tips.map((tip, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>💡 {tip}</li>
                ))}
              </ul>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
        <Button onClick={onBack} style={{ marginRight: '1rem' }}>
          ← 뒤로 가기
        </Button>
        <Title size="2xl" style={{ margin: 0 }}>
          {subtask.title}
        </Title>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#495057' }}>
          {subtask.description}
        </p>
      </div>

      {/* 탭 네비게이션 */}
      <div style={{ 
        display: 'flex', 
        borderBottom: '2px solid #e9ecef',
        marginBottom: '2rem'
      }}>
        {['overview', 'examples', 'tips'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '1rem 1.5rem',
              border: 'none',
              backgroundColor: activeTab === tab ? '#007bff' : 'transparent',
              color: activeTab === tab ? 'white' : '#6c757d',
              cursor: 'pointer',
              borderBottom: activeTab === tab ? '2px solid #007bff' : '2px solid transparent',
              marginBottom: '-2px',
              transition: 'all 0.3s ease'
            }}
          >
            {tab === 'overview' && '개요'}
            {tab === 'examples' && '코드 예제'}
            {tab === 'tips' && '학습 팁'}
          </button>
        ))}
      </div>

      {/* 탭 내용 */}
      {renderContent()}

      {/* 일반적인 오류 */}
      {subtask.commonErrors && (
        <Card style={{ marginTop: '2rem', backgroundColor: '#f8d7da', border: '1px solid #f5c6cb' }}>
          <h3 style={{ color: '#721c24', marginBottom: '1rem' }}>⚠️ 일반적인 오류 및 해결책</h3>
          {subtask.commonErrors.map((error, index) => (
            <div key={index} style={{ marginBottom: '1rem' }}>
              <strong style={{ color: '#721c24' }}>오류:</strong> {error.error}
              <br />
              <strong style={{ color: '#721c24' }}>해결책:</strong> {error.solution}
            </div>
          ))}
        </Card>
      )}

      {/* 진행 상황 저장 */}
      {isLoggedIn && (
        <Card style={{ 
          marginTop: '2rem', 
          backgroundColor: '#d4edda', 
          border: '1px solid #c3e6cb',
          textAlign: 'center'
        }}>
          <h4 style={{ color: '#155724', marginBottom: '1rem' }}>📚 학습 진행 상황</h4>
          <p style={{ color: '#155724', marginBottom: '1rem' }}>
            이 서브태스크의 학습을 완료하셨나요?
          </p>
          <Button style={{ backgroundColor: '#28a745' }}>
            학습 완료로 표시
          </Button>
        </Card>
      )}
    </Container>
  );
};

export default SubtaskDetailPage;
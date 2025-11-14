import React from 'react';
import { Container, Title, Card } from '../components/common/UI';
import {
  TypingContainer,
  StatsContainer,
  StatCard,
  StatLabel,
  StatValue,
} from '../components/typing/TypingStyles';
import TypingTextDisplay from '../components/typing/TypingTextDisplay';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import {
  fetchTypingTexts,
  resetTyping,
  selectTypingStats,
  startTyping,
  updateTypedText,
  setCurrentText,
} from '../store/slices/typingSlice';

const PracticePage = () => {
  const dispatch = useAppDispatch();
  const {
    currentText,
    typedText,
    currentIndex,
    isActive,
    isCompleted,
    loading,
    error,
  } = useAppSelector(state => state.typing);

  const typingStats = useAppSelector(selectTypingStats);

  // Input ref for focus management
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    // Set initial text directly for immediate display
    const initialText = '안녕하세요! 한글 타이핑 연습을 시작해보세요.';
    dispatch(setCurrentText(initialText));

    // Also fetch additional texts in background
    dispatch(fetchTypingTexts('medium'));
  }, [dispatch]);

  const handleReset = () => {
    dispatch(resetTyping());
    // Focus input after reset
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);
  };

  const handleNewText = () => {
    // Set a new text directly
    const newTexts = [
      '오늘 하루도 즐겁고 행복한 시간이 되기를 바랍니다.',
      '꾸준한 연습은 실력 향상의 가장 좋은 방법입니다.',
      '프로그래밍은 논리적 사고와 창의력을 요구하는 흥미로운 분야입니다.',
    ];
    const randomText = newTexts[Math.floor(Math.random() * newTexts.length)];
    dispatch(setCurrentText(randomText));
    dispatch(resetTyping());
  };

  const handleFocusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  if (loading) {
    return (
      <Container>
        <Title>로딩 중...</Title>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Title>오류 발생</Title>
        <p>{error}</p>
      </Container>
    );
  }

  return (
    <Container>
      <Title size="3xl">타이핑 연습</Title>

      <TypingContainer>
        {/* Use the advanced TypingTextDisplay component */}
        <TypingTextDisplay
          text={currentText}
          typedText={typedText}
          currentIndex={currentIndex}
          errorIndices={useAppSelector(state => state.typing.errors)}
        />

        {/* Simple input field for basic typing practice */}
        <input
          ref={inputRef}
          type="text"
          value={typedText}
          onChange={(e) => {
            // Basic input handling - let Redux handle the logic
            const value = e.target.value;
            if (!isActive && value.length > 0) {
              dispatch(startTyping());
            }
            dispatch(updateTypedText(value));
          }}
          placeholder={currentText ? "여기에 타이핑하세요..." : "텍스트 로딩 중..."}
          disabled={!currentText || isCompleted}
          style={{
            width: '100%',
            padding: '1rem',
            fontSize: '1.1rem',
            border: '2px solid #ddd',
            borderRadius: '8px',
            outline: 'none',
            fontFamily: 'monospace',
          }}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />

        <StatsContainer>
          <StatCard>
            <StatLabel>속도 (WPM)</StatLabel>
            <StatValue>{typingStats.wpm || 0}</StatValue>
          </StatCard>
          <StatCard>
            <StatLabel>정확성</StatLabel>
            <StatValue>{typingStats.accuracy}%</StatValue>
          </StatCard>
          <StatCard>
            <StatLabel>진행률</StatLabel>
            <StatValue>{typingStats.progress}%</StatValue>
          </StatCard>
          <StatCard>
            <StatLabel>오류</StatLabel>
            <StatValue>{typingStats.errors}</StatValue>
          </StatCard>
        </StatsContainer>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button
            onClick={handleNewText}
            style={{
              background: '#007bff',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              cursor: 'pointer',
            }}
          >
            새 텍스트
          </button>
          <button
            onClick={handleReset}
            style={{
              background: '#6c757d',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              cursor: 'pointer',
            }}
          >
            초기화
          </button>
          <button
            onClick={handleFocusInput}
            style={{
              background: '#28a745',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              cursor: 'pointer',
            }}
          >
            입력창 포커스
          </button>
        </div>
      </TypingContainer>
    </Container>
  );
};

export default PracticePage;

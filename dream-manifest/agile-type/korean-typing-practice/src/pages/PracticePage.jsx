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
import TypingInputField from '../components/typing/TypingInput';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import {
  fetchTypingTexts,
  resetTyping,
  selectTypingStats,
} from '../store/slices/typingSlice';
import { useTypingInput } from '../hooks/useTypingInput';

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

  // Use the typing input hook for advanced input handling
  const {
    inputRef,
    handleReset,
    focusInput,
    getTypingStats,
  } = useTypingInput();

  React.useEffect(() => {
    // Fetch initial texts
    dispatch(fetchTypingTexts('medium'));
  }, [dispatch]);

  const handleNewText = () => {
    dispatch(fetchTypingTexts('medium'));
  };

  // Get real-time stats from the hook
  const stats = getTypingStats();

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

        {/* Use the advanced TypingInputField component */}
        <TypingInputField
          ref={inputRef}
          disabled={!currentText || isCompleted}
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
            onClick={focusInput}
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

import React, { useEffect } from 'react';
import { Container, Title, Button } from '../components/common/UI';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { setCurrentText } from '../store/slices/typingSlice';
import TypingTextDisplay from '../components/typing/TypingTextDisplay';
import TypingInputField from '../components/typing/TypingInput';
import useTypingInput from '../hooks/useTypingInput';
import { Controls, DifficultySelector, TextNavigation, RetryButton } from '../components/typing/TypingStyles';
import { SAMPLE_TEXTS, getTextByIndex, getTextCount } from '../data/sampleTexts';

const PracticePage = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(state => state.theme);
  const { currentText, isCompleted } = useAppSelector(state => state.typing);

  const [difficulty, setDifficulty] = React.useState('medium');
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);

  // Initialize with a sample text
  useEffect(() => {
    if (!currentText) {
      const initialText = getTextByIndex(difficulty, currentTextIndex);
      dispatch(setCurrentText(initialText));
    }
  }, [currentText, difficulty, currentTextIndex, dispatch]);

  // Use the custom typing input hook
  const {
    inputRef,
    handleReset,
    focusInput,
  } = useTypingInput();

  const handleDifficultyChange = (newDifficulty) => {
    setDifficulty(newDifficulty);
    setCurrentTextIndex(0);
    const newText = getTextByIndex(newDifficulty, 0);
    dispatch(setCurrentText(newText));
  };

  const handleNextText = () => {
    const textCount = getTextCount(difficulty);
    const nextIndex = (currentTextIndex + 1) % textCount;
    setCurrentTextIndex(nextIndex);
    const nextText = getTextByIndex(difficulty, nextIndex);
    dispatch(setCurrentText(nextText));
  };

  const handlePrevText = () => {
    const textCount = getTextCount(difficulty);
    const prevIndex = currentTextIndex === 0 ? textCount - 1 : currentTextIndex - 1;
    setCurrentTextIndex(prevIndex);
    const prevText = getTextByIndex(difficulty, prevIndex);
    dispatch(setCurrentText(prevText));
  };

  const handleRetry = () => {
    handleReset();
    focusInput();
  };

  return (
    <Container>
      <Title size="3xl">타이핑 연습</Title>

      <Controls theme={theme}>
        <DifficultySelector theme={theme}>
          <label htmlFor="difficulty-select">난이도:</label>
          <select
            id="difficulty-select"
            value={difficulty}
            onChange={(e) => handleDifficultyChange(e.target.value)}
          >
            <option value="easy">쉬움</option>
            <option value="medium">보통</option>
            <option value="hard">어려움</option>
          </select>
        </DifficultySelector>

        <TextNavigation theme={theme}>
          <button
            onClick={handlePrevText}
            disabled={SAMPLE_TEXTS[difficulty].length <= 1}
            aria-label="이전 텍스트"
          >
            ‹ 이전
          </button>
          <span className="text-counter">
            {currentTextIndex + 1} / {getTextCount(difficulty)}
          </span>
          <button
            onClick={handleNextText}
            disabled={SAMPLE_TEXTS[difficulty].length <= 1}
            aria-label="다음 텍스트"
          >
            다음 ›
          </button>
        </TextNavigation>

        <RetryButton
          theme={theme}
          onClick={handleRetry}
          aria-label="연습 다시 시작"
        >
          다시 시작
        </RetryButton>
      </Controls>

      <TypingTextDisplay />

      <TypingInputField
        ref={inputRef}
        onFocus={focusInput}
        disabled={isCompleted}
      />

      {/* Completion message */}
      {isCompleted && (
        <div style={{
          textAlign: 'center',
          marginTop: '2rem',
          padding: '2rem',
          background: theme.colors.success + '10',
          borderRadius: '8px',
          border: `1px solid ${theme.colors.success}30`
        }}>
          <h3 style={{ color: theme.colors.success, marginBottom: '1rem' }}>
            🎉 축하합니다!
          </h3>
          <p style={{ color: theme.colors.text, marginBottom: '1rem' }}>
            타이핑 연습을 완료했습니다.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Button onClick={handleNextText}>
              다음 텍스트
            </Button>
            <Button variant="secondary" onClick={handleRetry}>
              다시 연습
            </Button>
          </div>
        </div>
      )}
    </Container>
  );
};

export default PracticePage;

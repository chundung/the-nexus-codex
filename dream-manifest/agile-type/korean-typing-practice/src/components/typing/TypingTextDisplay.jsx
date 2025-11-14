import React, { useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
  TextDisplayContainer,
  CharacterSpan,
  StatsBar,
  TextContainer,
  ProgressBar,
  ProgressFill,
} from './TypingStyles';

const TypingTextDisplay = ({
  text,
  typedText,
  currentIndex,
  errorIndices
}) => {
  const { theme } = useSelector(state => state.theme);

  // Memoize character rendering for performance
  const renderCharacters = useMemo(() => {
    if (!text) return null;

    return text.split('').map((char, index) => {
      // Calculate character state from props
      let charState = 'untyped';

      if (index < typedText.length) {
        charState = typedText[index] === char ? 'correct' : 'incorrect';
      } else if (index === typedText.length) {
        charState = 'current';
      }

      const hasError = errorIndices.includes(index);
      const isCurrent = index === currentIndex;
      
      // Enhanced state determination with additional context
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
          aria-label={`Character ${index + 1}: ${char} (${enhancedState})`}
          role="text"
        >
          {char}
        </CharacterSpan>
      );
    });
  }, [text, typedText, currentIndex, errorIndices, theme]);

  // Memoize stats calculation for performance
  const enhancedStats = useMemo(() => {
    const total = text.length;
    const typed = typedText.length;
    let correct = 0;
    let incorrect = 0;

    // Calculate correct/incorrect from typed text
    for (let i = 0; i < typed; i++) {
      if (i < text.length) {
        if (typedText[i] === text[i]) {
          correct++;
        } else {
          incorrect++;
        }
      }
    }

    const progress = total > 0 ? Math.round((typed / total) * 100) : 0;
    const accuracy = typed > 0 ? Math.round((correct / typed) * 100) : 0;

    return {
      total,
      typed,
      correct,
      incorrect,
      untyped: Math.max(0, total - typed),
      current: typed === currentIndex ? 1 : 0,
      progress,
      accuracy,
      wpm: 0, // Will be calculated from Redux state
    };
  }, [text, typedText, currentIndex]);

  // Accessibility announcement for screen readers
  const getAccessibilityAnnouncement = useCallback(() => {
    if (!text) return 'No text loaded';

    const progress = enhancedStats.progress;
    const accuracy = enhancedStats.accuracy;
    const errors = enhancedStats.incorrect;

    if (enhancedStats.total === enhancedStats.typed) {
      return `Typing completed. Accuracy: ${accuracy}%. Errors: ${errors}.`;
    }

    return `Progress: ${progress}%. Accuracy: ${accuracy}%. Errors: ${errors}. Current position: character ${currentIndex + 1} of ${text.length}.`;
  }, [text, enhancedStats, currentIndex]);

  return (
    <TextDisplayContainer theme={theme}>
      {/* Screen reader announcements */}
      <div 
        aria-live="polite" 
        aria-atomic="true" 
        className="sr-only"
        style={{ position: 'absolute', left: '-10000px' }}
      >
        {getAccessibilityAnnouncement()}
      </div>

      {/* Stats bar with accessibility */}
      <StatsBar 
        theme={theme}
        role="status"
        aria-label="Typing statistics"
      >
        <div className="stat">
          <span className="label">Progress:</span>
          <span className="value" aria-label={`Progress: ${enhancedStats.progress} percent`}>
            {enhancedStats.progress}%
          </span>
        </div>
        <div className="stat">
          <span className="label">Accuracy:</span>
          <span 
            className="value correct" 
            aria-label={`Accuracy: ${enhancedStats.accuracy} percent`}
          >
            {enhancedStats.accuracy}%
          </span>
        </div>
        <div className="stat">
          <span className="label">Correct:</span>
          <span 
            className="value correct" 
            aria-label={`${enhancedStats.correct} correct characters`}
          >
            {enhancedStats.correct}
          </span>
        </div>
        <div className="stat">
          <span className="label">Errors:</span>
          <span 
            className="value incorrect" 
            aria-label={`${enhancedStats.incorrect} errors`}
          >
            {enhancedStats.incorrect}
          </span>
        </div>
      </StatsBar>
      
      {/* Main text display with enhanced accessibility */}
      <TextContainer 
        theme={theme}
        role="textbox"
        aria-multiline="true"
        aria-label="Typing practice text"
        tabIndex={0}
      >
        {renderCharacters}
      </TextContainer>
      
      {/* Progress bar with accessibility */}
      <ProgressBar 
        theme={theme}
        role="progressbar"
        aria-valuenow={enhancedStats.progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Typing progress: ${enhancedStats.progress} percent`}
      >
        <ProgressFill 
          theme={theme} 
          progress={enhancedStats.progress}
        />
      </ProgressBar>
    </TextDisplayContainer>
  );
};

export default TypingTextDisplay;
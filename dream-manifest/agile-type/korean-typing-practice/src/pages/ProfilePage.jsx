import React from 'react';
import { Container, Title, Card, Button, Input } from '../components/common/UI';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { login, logout, updatePreferences } from '../store/slices/userSlice';

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const {
    username,
    email,
    level,
    experience,
    averageWPM,
    bestWPM,
    totalSessions,
    totalPracticeTime,
    preferences,
    isLoggedIn,
  } = useAppSelector(state => state.user);

  const [loginForm, setLoginForm] = React.useState({
    username: '',
    email: '',
  });

  const handleLogin = e => {
    e.preventDefault();
    dispatch(login(loginForm));
    setLoginForm({ username: '', email: '' });
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handlePreferenceChange = (key, value) => {
    dispatch(updatePreferences({ [key]: value }));
  };

  const getExperienceProgress = () => {
    const expNeeded = level * 1000;
    return (experience / expNeeded) * 100;
  };

  const getNextLevelExp = () => {
    return level * 1000;
  };

  // Achievement definitions
  const achievements = [
    {
      id: 'first_session',
      title: '첫 걸음',
      description: '첫 번째 타이핑 세션을 완료했습니다',
      icon: '🎯',
      earned: totalSessions >= 1,
    },
    {
      id: 'speed_demon',
      title: '속도 마스터',
      description: 'WPM 60 이상 기록',
      icon: '⚡',
      earned: bestWPM >= 60,
    },
    {
      id: 'accuracy_king',
      title: '정확성의 왕',
      description: '정확도 95% 이상 기록',
      icon: '🎯',
      earned: false, // Would need session-level accuracy tracking
    },
    {
      id: 'persistent',
      title: '꾸준함의 승리',
      description: '총 10시간 연습',
      icon: '🏆',
      earned: totalPracticeTime >= 36000, // 10 hours in seconds
    },
    {
      id: 'level_up',
      title: '성장 중',
      description: `레벨 ${level} 달성`,
      icon: '⬆️',
      earned: level >= 2,
    },
  ];

  if (!isLoggedIn) {
    return (
      <Container>
        <Title size="3xl">로그인</Title>

        <Card style={{ maxWidth: '400px', margin: '0 auto' }}>
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '1rem' }}>
              <label>사용자 이름:</label>
              <Input
                type="text"
                value={loginForm.username}
                onChange={e =>
                  setLoginForm({ ...loginForm, username: e.target.value })
                }
                required
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label>이메일:</label>
              <Input
                type="email"
                value={loginForm.email}
                onChange={e =>
                  setLoginForm({ ...loginForm, email: e.target.value })
                }
                required
              />
            </div>

            <Button type="submit" variant="primary" style={{ width: '100%' }}>
              로그인
            </Button>
          </form>
        </Card>
      </Container>
    );
  }

  return (
    <Container>
      <Title size="3xl">프로필</Title>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
        }}
      >
        <Card>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            👤 사용자 정보
          </h3>
          <div style={{ marginBottom: '1rem' }}>
            <p><strong>사용자 이름:</strong> {username}</p>
            <p><strong>이메일:</strong> {email}</p>
            <p><strong>레벨:</strong> {level}</p>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
              <span>경험치</span>
              <span>{experience}/{getNextLevelExp()}</span>
            </div>
            <div
              style={{
                width: '100%',
                height: '24px',
                backgroundColor: '#e0e0e0',
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <div
                style={{
                  width: `${getExperienceProgress()}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #007bff, #0056b3)',
                  transition: 'width 0.5s ease',
                  borderRadius: '12px',
                }}
              />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)',
              }}>
                {Math.round(getExperienceProgress())}%
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            📊 타이핑 통계
          </h3>
          <div style={{ display: 'grid', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>평균 WPM:</span>
              <strong style={{ color: '#007bff', fontSize: '1.2rem' }}>{averageWPM}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>최고 WPM:</span>
              <strong style={{ color: '#28a745', fontSize: '1.2rem' }}>{bestWPM}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>총 세션 수:</span>
              <strong>{totalSessions}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>총 연습 시간:</span>
              <strong>{Math.round(totalPracticeTime / 3600 * 10) / 10}시간</strong>
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <h3>설정</h3>

        <div style={{ marginBottom: '1rem' }}>
          <label>
            <input
              type="checkbox"
              checked={preferences.soundEnabled}
              onChange={e =>
                handlePreferenceChange('soundEnabled', e.target.checked)
              }
              style={{ marginRight: '0.5rem' }}
            />
            효과음 사용
          </label>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>난이도:</label>
          <select
            value={preferences.difficulty}
            onChange={e => handlePreferenceChange('difficulty', e.target.value)}
            style={{
              marginLeft: '0.5rem',
              padding: '0.25rem 0.5rem',
              border: '1px solid #ccc',
              borderRadius: '0.25rem',
            }}
          >
            <option value="easy">쉬움</option>
            <option value="medium">보통</option>
            <option value="hard">어려움</option>
          </select>
        </div>

        <Button variant="secondary" onClick={handleLogout}>
          로그아웃
        </Button>
      </Card>

      {/* Achievements Section */}
      <Card>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          🏆 업적
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem'
        }}>
          {achievements.map(achievement => (
            <div
              key={achievement.id}
              style={{
                padding: '1rem',
                border: `2px solid ${achievement.earned ? '#28a745' : '#e0e0e0'}`,
                borderRadius: '8px',
                backgroundColor: achievement.earned ? '#f8fff8' : '#f8f9fa',
                opacity: achievement.earned ? 1 : 0.6,
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem', textAlign: 'center' }}>
                {achievement.earned ? achievement.icon : '🔒'}
              </div>
              <h4 style={{
                margin: '0 0 0.5rem 0',
                color: achievement.earned ? '#28a745' : '#6c757d',
                fontSize: '1rem'
              }}>
                {achievement.title}
              </h4>
              <p style={{
                margin: 0,
                fontSize: '0.9rem',
                color: achievement.earned ? '#495057' : '#adb5bd'
              }}>
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </Container>
  );
};

export default ProfilePage;

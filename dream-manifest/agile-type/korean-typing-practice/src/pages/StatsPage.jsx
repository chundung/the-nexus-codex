import React, { useMemo } from 'react';
import { Container, Title, Card } from '../components/common/UI';
import { useAppSelector } from '../store/hooks';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const StatsPage = () => {
  const { sessions, dailyStats } = useAppSelector(state => state.stats);
  const { averageWPM, bestWPM, totalSessions, totalPracticeTime } =
    useAppSelector(state => state.user);

  const formatTime = seconds => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}시간 ${minutes}분`;
    } else if (minutes > 0) {
      return `${minutes}분 ${secs}초`;
    } else {
      return `${secs}초`;
    }
  };

  const today = new Date().toISOString().split('T')[0];
  const todayStats = dailyStats[today] || {
    sessions: 0,
    totalTime: 0,
    averageWPM: 0,
    bestWPM: 0,
    averageAccuracy: 0,
  };

  // Prepare chart data
  const chartData = useMemo(() => {
    // Get last 14 days of data
    const last14Days = Array.from({ length: 14 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (13 - i));
      return date.toISOString().split('T')[0];
    });

    return last14Days.map(date => {
      const dayStats = dailyStats[date] || {
        sessions: 0,
        totalTime: 0,
        averageWPM: 0,
        bestWPM: 0,
        averageAccuracy: 0,
      };

      return {
        date: new Date(date).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' }),
        wpm: dayStats.averageWPM,
        accuracy: dayStats.averageAccuracy,
        sessions: dayStats.sessions,
        time: Math.round(dayStats.totalTime / 60), // minutes
      };
    });
  }, [dailyStats]);

  // Performance distribution data
  const performanceData = useMemo(() => {
    if (sessions.length === 0) return [];

    const wpmRanges = [
      { range: '0-20', min: 0, max: 20, color: '#dc3545' },
      { range: '21-40', min: 21, max: 40, color: '#fd7e14' },
      { range: '41-60', min: 41, max: 60, color: '#ffc107' },
      { range: '61-80', min: 61, max: 80, color: '#28a745' },
      { range: '81+', min: 81, max: Infinity, color: '#007bff' },
    ];

    return wpmRanges.map(range => ({
      range: range.range,
      count: sessions.filter(s => s.wpm >= range.min && s.wpm <= range.max).length,
      color: range.color,
    })).filter(item => item.count > 0);
  }, [sessions]);

  // Recent sessions for detailed view
  const recentSessions = sessions.slice(-20).reverse();

  return (
    <Container>
      <Title size="3xl">통계 및 분석</Title>

      {/* Overview Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
        }}
      >
        <Card>
          <h3>전체 통계</h3>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>총 세션 수:</span>
              <strong>{totalSessions}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>평균 WPM:</span>
              <strong style={{ color: '#007bff' }}>{averageWPM}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>최고 WPM:</span>
              <strong style={{ color: '#28a745' }}>{bestWPM}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>총 연습 시간:</span>
              <strong>{formatTime(totalPracticeTime)}</strong>
            </div>
          </div>
        </Card>

        <Card>
          <h3>오늘의 통계</h3>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>세션 수:</span>
              <strong>{todayStats.sessions}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>평균 WPM:</span>
              <strong style={{ color: '#007bff' }}>{todayStats.averageWPM}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>최고 WPM:</span>
              <strong style={{ color: '#28a745' }}>{todayStats.bestWPM}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>정확성:</span>
              <strong style={{ color: todayStats.averageAccuracy >= 90 ? '#28a745' : todayStats.averageAccuracy >= 70 ? '#ffc107' : '#dc3545' }}>
                {todayStats.averageAccuracy}%
              </strong>
            </div>
          </div>
        </Card>
      </div>

      {/* Performance Charts */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
        {/* WPM and Accuracy Trend */}
        <Card>
          <h3>WPM 및 정확성 추이 (최근 14일)</h3>
          <div style={{ height: '300px', width: '100%' }}>
            <ResponsiveContainer>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis yAxisId="wpm" orientation="left" />
                <YAxis yAxisId="accuracy" orientation="right" />
                <Tooltip />
                <Legend />
                <Line
                  yAxisId="wpm"
                  type="monotone"
                  dataKey="wpm"
                  stroke="#007bff"
                  strokeWidth={2}
                  name="WPM"
                />
                <Line
                  yAxisId="accuracy"
                  type="monotone"
                  dataKey="accuracy"
                  stroke="#28a745"
                  strokeWidth={2}
                  name="정확성 (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Performance Distribution */}
        <Card>
          <h3>WPM 분포</h3>
          <div style={{ height: '300px', width: '100%' }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={performanceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ range, count }) => `${range}: ${count}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {performanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Daily Activity Chart */}
      <Card style={{ marginBottom: '2rem' }}>
        <h3>일일 활동량 (최근 14일)</h3>
        <div style={{ height: '250px', width: '100%' }}>
          <ResponsiveContainer>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sessions" fill="#007bff" name="세션 수" />
              <Bar dataKey="time" fill="#28a745" name="연습 시간 (분)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Recent Sessions Table */}
      <Card>
        <h3>최근 세션 기록</h3>
        {recentSessions.length > 0 ? (
          <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
              gap: '1rem',
              padding: '1rem',
              fontWeight: 'bold',
              borderBottom: '2px solid #dee2e6',
              backgroundColor: '#f8f9fa'
            }}>
              <div>날짜/시간</div>
              <div>WPM</div>
              <div>정확성</div>
              <div>소요 시간</div>
              <div>난이도</div>
            </div>
            {recentSessions.map(session => (
              <div
                key={session.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                  gap: '1rem',
                  padding: '1rem',
                  borderBottom: '1px solid #dee2e6',
                  alignItems: 'center'
                }}
              >
                <div style={{ fontSize: '0.9rem' }}>
                  {new Date(session.timestamp).toLocaleString('ko-KR', {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </div>
                <div style={{
                  fontWeight: 'bold',
                  color: session.wpm >= 60 ? '#28a745' : session.wpm >= 40 ? '#ffc107' : '#dc3545'
                }}>
                  {session.wpm}
                </div>
                <div style={{
                  color: session.accuracy >= 90 ? '#28a745' : session.accuracy >= 70 ? '#ffc107' : '#dc3545'
                }}>
                  {session.accuracy}%
                </div>
                <div>{formatTime(session.timeSpent)}</div>
                <div style={{ textTransform: 'capitalize' }}>
                  {session.difficulty || 'medium'}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem', color: '#6c757d' }}>
            <p>아직 세션 기록이 없습니다.</p>
            <p>연습을 시작하여 첫 번째 기록을 만들어보세요!</p>
          </div>
        )}
      </Card>
    </Container>
  );
};

export default StatsPage;

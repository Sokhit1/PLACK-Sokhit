import React, { useState } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts';

// Global navigation helper to switch pages in parent LMS
declare global {
  interface Window {
    showPage?: (id: string, el?: HTMLElement | null) => void;
    openPage?: (id: string) => void;
  }
}

// Module Progress Data
const MODULE_PROGRESS_DATA = [
  { module: 'CL01', name: 'Intro & Systems', completed: 100, target: 100, hours: 4.8 },
  { module: 'CL02', name: 'Demand & Forecast', completed: 75, target: 100, hours: 3.5 },
  { module: 'CL03', name: 'Airport Planning', completed: 45, target: 100, hours: 2.2 },
  { module: 'CL04', name: 'Capacity & LOS', completed: 20, target: 100, hours: 1.0 },
  { module: 'CL05', name: 'Airline Strategy', completed: 0, target: 100, hours: 0 },
  { module: 'CL06', name: 'Economics', completed: 0, target: 100, hours: 0 },
  { module: 'CL07', name: 'Safety & Security', completed: 0, target: 100, hours: 0 },
  { module: 'CL08', name: 'Sustainability', completed: 0, target: 100, hours: 0 },
];

// Activity Streak Data
const ACTIVITY_STREAK_14D = [
  { day: 'Day 1', date: 'Oct 01', minutes: 45, quizzes: 1, streak: 1 },
  { day: 'Day 2', date: 'Oct 02', minutes: 60, quizzes: 0, streak: 2 },
  { day: 'Day 3', date: 'Oct 03', minutes: 35, quizzes: 0, streak: 3 },
  { day: 'Day 4', date: 'Oct 04', minutes: 80, quizzes: 2, streak: 4 },
  { day: 'Day 5', date: 'Oct 05', minutes: 55, quizzes: 0, streak: 5 },
  { day: 'Day 6', date: 'Oct 06', minutes: 70, quizzes: 1, streak: 6 },
  { day: 'Day 7', date: 'Oct 07', minutes: 90, quizzes: 0, streak: 7 },
  { day: 'Day 8', date: 'Oct 08', minutes: 40, quizzes: 0, streak: 8 },
  { day: 'Day 9', date: 'Oct 09', minutes: 65, quizzes: 1, streak: 9 },
  { day: 'Day 10', date: 'Oct 10', minutes: 110, quizzes: 2, streak: 10 },
  { day: 'Day 11', date: 'Oct 11', minutes: 85, quizzes: 1, streak: 11 },
  { day: 'Day 12', date: 'Oct 12', minutes: 75, quizzes: 0, streak: 12 },
  { day: 'Day 13', date: 'Oct 13', minutes: 120, quizzes: 3, streak: 13 },
  { day: 'Day 14', date: 'Today', minutes: 65, quizzes: 1, streak: 14 },
];

const DOMAIN_DISTRIBUTION = [
  { name: 'Airport Planning & Design', value: 32, color: '#0056d2' },
  { name: 'Airline Fleet & Operations', value: 28, color: '#2563eb' },
  { name: 'Air Transport Systems & KPIs', value: 22, color: '#0284c7' },
  { name: 'ICAO Standards & Air Law', value: 10, color: '#10b981' },
  { name: 'Sustainability & SAF', value: 8, color: '#f59e0b' },
];

const DEADLINES = [
  {
    id: 'd1',
    module: 'CL02',
    title: 'Econometric Passenger Demand Forecasting Exercise',
    dueDate: 'Oct 16, 2026',
    daysLeft: 4,
    urgent: true,
    targetPage: 'cl02',
    type: 'Assignment',
  },
  {
    id: 'd2',
    module: 'CL03',
    title: 'Runway Wind Rose & Apron Stand Capacity Draft',
    dueDate: 'Oct 24, 2026',
    daysLeft: 12,
    urgent: false,
    targetPage: 'cl03',
    type: 'Design Exercise',
  },
  {
    id: 'd3',
    module: 'CL05',
    title: 'Regional Fleet Selection & Route Economics Proposal',
    dueDate: 'Nov 06, 2026',
    daysLeft: 25,
    urgent: false,
    targetPage: 'cl05',
    type: 'Case Study',
  },
  {
    id: 'd4',
    module: 'CAPSTONE',
    title: 'Cambodia National Air Transport Master Plan (Techo KTI)',
    dueDate: 'Dec 04, 2026',
    daysLeft: 54,
    urgent: false,
    targetPage: 'project',
    type: 'Final Report',
  },
];

export const StudentDashboard: React.FC = () => {
  const [streakRange, setStreakRange] = useState<'7d' | '14d'>('14d');

  const streakData =
    streakRange === '7d' ? ACTIVITY_STREAK_14D.slice(-7) : ACTIVITY_STREAK_14D;

  const totalMinutes = streakData.reduce((acc, curr) => acc + curr.minutes, 0);
  const avgMinutes = Math.round(totalMinutes / streakData.length);

  const handleNavigate = (pageId: string) => {
    if (window.openPage) {
      window.openPage(pageId);
    } else if (window.showPage) {
      window.showPage(pageId);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Top Banner KPI Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
          gap: '16px',
        }}
      >
        {/* KPI 1 */}
        <div
          style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '14px',
            padding: '20px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
              Course Progress
            </span>
            <span style={{ fontSize: '11px', fontWeight: 800, padding: '2px 8px', borderRadius: '6px', background: '#eff6ff', color: '#0056d2' }}>
              CL01–CL08
            </span>
          </div>
          <div style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>
            30%
          </div>
          <div style={{ fontSize: '12.5px', color: '#16a34a', fontWeight: 600, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span>↑ Ahead of Schedule</span>
            <span style={{ color: '#94a3b8' }}>· CL01 Complete</span>
          </div>
        </div>

        {/* KPI 2 */}
        <div
          style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '14px',
            padding: '20px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
              Learning Streak
            </span>
            <span style={{ fontSize: '11px', fontWeight: 800, padding: '2px 8px', borderRadius: '6px', background: '#fffbeb', color: '#b45309' }}>
              🔥 All-Time Best
            </span>
          </div>
          <div style={{ fontSize: '32px', fontWeight: 800, color: '#d97706', letterSpacing: '-0.02em' }}>
            14 Days
          </div>
          <div style={{ fontSize: '12.5px', color: '#64748b', fontWeight: 600, marginTop: '4px' }}>
            Logged daily activity since Oct 1
          </div>
        </div>

        {/* KPI 3 */}
        <div
          style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '14px',
            padding: '20px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
              Study Time Logged
            </span>
            <span style={{ fontSize: '11px', fontWeight: 800, padding: '2px 8px', borderRadius: '6px', background: '#f0fdf4', color: '#15803d' }}>
              16.5 Hrs Total
            </span>
          </div>
          <div style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>
            {avgMinutes} <span style={{ fontSize: '18px', fontWeight: 600, color: '#64748b' }}>min/day</span>
          </div>
          <div style={{ fontSize: '12.5px', color: '#64748b', fontWeight: 600, marginTop: '4px' }}>
            Target: 45 min/day benchmark
          </div>
        </div>

        {/* KPI 4 */}
        <div
          style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '14px',
            padding: '20px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
              Next Critical Deadline
            </span>
            <span style={{ fontSize: '11px', fontWeight: 800, padding: '2px 8px', borderRadius: '6px', background: '#fef2f2', color: '#b91c1c' }}>
              4 Days Left
            </span>
          </div>
          <div style={{ fontSize: '20px', fontWeight: 800, color: '#b91c1c', letterSpacing: '-0.01em', marginTop: '6px' }}>
            CL02 Forecasting
          </div>
          <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, marginTop: '4px' }}>
            Due: Friday, Oct 16, 2026
          </div>
        </div>
      </div>

      {/* Row 1: Module Completion BarChart & Domain Donut */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '20px' }}>
        
        {/* Chart 1: Module Completion Progress */}
        <div
          style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 4px 20px -2px rgba(15,23,42,0.03)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: '17px', fontWeight: 800, color: '#0f172a' }}>
                Curriculum Module Progress (%)
              </h3>
              <p style={{ margin: '4px 0 0', fontSize: '12.5px', color: '#64748b' }}>
                Completed lessons & quizzes vs. 100% mastery threshold
              </p>
            </div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#0056d2', background: '#eff6ff', padding: '4px 10px', borderRadius: '6px' }}>
              Recharts Bar
            </div>
          </div>

          <div style={{ height: '280px', width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MODULE_PROGRESS_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="module" tick={{ fontSize: 12, fill: '#64748b' }} axisLine={{ stroke: '#e2e8f0' }} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 12, fill: '#64748b' }} unit="%" axisLine={{ stroke: '#e2e8f0' }} />
                <Tooltip
                  formatter={(value: any, name: any) => [`${value}%`, name === 'completed' ? 'Your Completion' : 'Benchmark Target']}
                  labelFormatter={(label) => `Module ${label}`}
                  contentStyle={{ backgroundColor: '#0f172a', borderRadius: '8px', border: 'none', color: '#fff', fontSize: '12px' }}
                />
                <Bar dataKey="completed" fill="#0056d2" radius={[6, 6, 0, 0]} name="completed" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Domain Allocation Donut */}
        <div
          style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 4px 20px -2px rgba(15,23,42,0.03)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: '17px', fontWeight: 800, color: '#0f172a' }}>
                Study Allocation by Aviation Domain
              </h3>
              <p style={{ margin: '4px 0 0', fontSize: '12.5px', color: '#64748b' }}>
                Distribution of study hours across course disciplines
              </p>
            </div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#2563eb', background: '#eff6ff', padding: '4px 10px', borderRadius: '6px' }}>
              Recharts Donut
            </div>
          </div>

          <div style={{ height: '280px', width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={DOMAIN_DISTRIBUTION}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={95}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {DOMAIN_DISTRIBUTION.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: any) => [`${value}% of total study hours`, 'Share']}
                  contentStyle={{ backgroundColor: '#0f172a', borderRadius: '8px', border: 'none', color: '#fff', fontSize: '12px' }}
                />
                <Legend
                  formatter={(value) => <span style={{ fontSize: '12px', color: '#334155' }}>{value}</span>}
                  layout="horizontal"
                  verticalAlign="bottom"
                  align="center"
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* Row 2: 14-Day Activity Streak AreaChart */}
      <div
        style={{
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0 4px 20px -2px rgba(15,23,42,0.03)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h3 style={{ margin: 0, fontSize: '17px', fontWeight: 800, color: '#0f172a' }}>
                Recent Daily Activity & Study Streak
              </h3>
              <span style={{ fontSize: '12px', background: '#fef3c7', color: '#b45309', padding: '2px 8px', borderRadius: '6px', fontWeight: 800 }}>
                🔥 14-Day Active Streak
              </span>
            </div>
            <p style={{ margin: '4px 0 0', fontSize: '12.5px', color: '#64748b' }}>
              Daily active study time (minutes) and interactive quiz submissions
            </p>
          </div>

          <div style={{ display: 'flex', gap: '6px', background: '#f1f5f9', padding: '3px', borderRadius: '8px' }}>
            <button
              onClick={() => setStreakRange('7d')}
              style={{
                border: 'none',
                background: streakRange === '7d' ? '#ffffff' : 'transparent',
                color: streakRange === '7d' ? '#0056d2' : '#64748b',
                fontWeight: streakRange === '7d' ? 700 : 500,
                fontSize: '12px',
                padding: '6px 12px',
                borderRadius: '6px',
                cursor: 'pointer',
                boxShadow: streakRange === '7d' ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
              }}
            >
              Last 7 Days
            </button>
            <button
              onClick={() => setStreakRange('14d')}
              style={{
                border: 'none',
                background: streakRange === '14d' ? '#ffffff' : 'transparent',
                color: streakRange === '14d' ? '#0056d2' : '#64748b',
                fontWeight: streakRange === '14d' ? 700 : 500,
                fontSize: '12px',
                padding: '6px 12px',
                borderRadius: '6px',
                cursor: 'pointer',
                boxShadow: streakRange === '14d' ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
              }}
            >
              14-Day View
            </button>
          </div>
        </div>

        <div style={{ height: '260px', width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={streakData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorMinutes" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0056d2" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#0056d2" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="date" tick={{ fontSize: 12, fill: '#64748b' }} axisLine={{ stroke: '#e2e8f0' }} />
              <YAxis tick={{ fontSize: 12, fill: '#64748b' }} unit="m" axisLine={{ stroke: '#e2e8f0' }} />
              <Tooltip
                formatter={(value: any, name: any) => [`${value} Minutes`, 'Active Study Time']}
                labelFormatter={(label) => `${label} (Study Session)`}
                contentStyle={{ backgroundColor: '#0f172a', borderRadius: '8px', border: 'none', color: '#fff', fontSize: '12px' }}
              />
              <Area type="monotone" dataKey="minutes" stroke="#0056d2" strokeWidth={2.5} fillOpacity={1} fill="url(#colorMinutes)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Row 3: Upcoming Module Deadlines & Quick Action */}
      <div
        style={{
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0 4px 20px -2px rgba(15,23,42,0.03)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '17px', fontWeight: 800, color: '#0f172a' }}>
              Upcoming Course Deadlines & Deliverables
            </h3>
            <p style={{ margin: '4px 0 0', fontSize: '12.5px', color: '#64748b' }}>
              Academic milestones for Air Transport Planning and Management
            </p>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button
              onClick={() => handleNavigate('cl01slides')}
              style={{
                background: '#eff6ff',
                color: '#0056d2',
                border: '1px solid #bfdbfe',
                borderRadius: '8px',
                padding: '9px 16px',
                fontSize: '12.5px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span>View CL01 Slides (14)</span>
            </button>
            <button
              onClick={() => handleNavigate('cl02')}
              style={{
                background: '#0056d2',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '9px 16px',
                fontSize: '12.5px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span>Resume CL02 Study →</span>
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '12px' }}>
          {DEADLINES.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                background: item.urgent ? '#fffcfc' : '#f8fafc',
                borderColor: item.urgent ? '#fecaca' : '#e2e8f0',
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: '240px' }}>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    padding: '4px 8px',
                    borderRadius: '6px',
                    background: item.urgent ? '#ef4444' : '#0056d2',
                    color: '#ffffff',
                  }}
                >
                  {item.module}
                </span>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                    {item.type} · Due {item.dueDate}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: item.urgent ? '#b91c1c' : '#475569',
                    background: item.urgent ? '#fee2e2' : '#e2e8f0',
                    padding: '4px 10px',
                    borderRadius: '6px',
                  }}
                >
                  {item.daysLeft} days remaining
                </span>

                <button
                  onClick={() => handleNavigate(item.targetPage)}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #cbd5e1',
                    color: '#0056d2',
                    padding: '7px 14px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  Open Module →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

'use client'

import { useState, useEffect } from 'react'

export default function Dashboard() {
  const [stats, setStats] = useState({
    steps: 8547,
    calories: 2340,
    distance: 6.2,
    activeMinutes: 87
  })

  const weeklyGoals = [
    { name: 'Steps Goal', current: 45230, target: 70000 },
    { name: 'Calories Burned', current: 12840, target: 15000 },
    { name: 'Workout Days', current: 4, target: 5 },
    { name: 'Active Hours', current: 28, target: 35 }
  ]

  const recentActivities = [
    { icon: '🏃', name: 'Morning Run', time: '7:00 AM', value: '5.2 km' },
    { icon: '💪', name: 'Strength Training', time: '6:00 PM', value: '45 min' },
    { icon: '🚴', name: 'Evening Cycling', time: '5:30 PM', value: '12.3 km' },
    { icon: '🧘', name: 'Yoga Session', time: '8:00 AM', value: '30 min' }
  ]

  return (
    <div className="container">
      <header className="header">
        <h1>Fitness Dashboard</h1>
        <p>Today's Overview - {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-label">Steps</span>
            <span className="stat-icon">👟</span>
          </div>
          <div className="stat-value">{stats.steps.toLocaleString()}</div>
          <div className="stat-change positive">
            ↑ 12% from yesterday
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-label">Calories</span>
            <span className="stat-icon">🔥</span>
          </div>
          <div className="stat-value">{stats.calories.toLocaleString()}</div>
          <div className="stat-change positive">
            ↑ 8% from yesterday
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-label">Distance</span>
            <span className="stat-icon">📍</span>
          </div>
          <div className="stat-value">{stats.distance} km</div>
          <div className="stat-change positive">
            ↑ 15% from yesterday
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-label">Active Minutes</span>
            <span className="stat-icon">⏱️</span>
          </div>
          <div className="stat-value">{stats.activeMinutes}</div>
          <div className="stat-change negative">
            ↓ 3% from yesterday
          </div>
        </div>
      </div>

      <div className="chart-section">
        <div className="chart-card">
          <h2>Weekly Goals Progress</h2>
          {weeklyGoals.map((goal, index) => (
            <div key={index} className="progress-bar-container">
              <div className="progress-label">
                <span>{goal.name}</span>
                <span>{goal.current.toLocaleString()} / {goal.target.toLocaleString()}</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${(goal.current / goal.target) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="chart-card">
          <h2>Recent Activities</h2>
          <ul className="activity-list">
            {recentActivities.map((activity, index) => (
              <li key={index} className="activity-item">
                <div className="activity-info">
                  <div className="activity-icon">{activity.icon}</div>
                  <div className="activity-details">
                    <h3>{activity.name}</h3>
                    <p>{activity.time}</p>
                  </div>
                </div>
                <div className="activity-value">{activity.value}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

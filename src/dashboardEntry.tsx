import React from 'react';
import { createRoot } from 'react-dom/client';
import { StudentDashboard } from './StudentDashboard';
import { initCL01SlideDeck } from './cl01Slides';

const container = document.getElementById('student-dashboard-root');
if (container) {
  const root = createRoot(container);
  root.render(<StudentDashboard />);
}

// Initialize CL01 Lecture Slide Deck Player
initCL01SlideDeck();

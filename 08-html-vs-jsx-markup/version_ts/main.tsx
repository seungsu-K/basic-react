import './styles/globals.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Learn from './learn/index';

const container = document.getElementById('react-app');

// if (!container) {
//   throw new Error();
// }

createRoot(container as HTMLElement).render(
  <StrictMode>
    <Learn />
  </StrictMode>
);

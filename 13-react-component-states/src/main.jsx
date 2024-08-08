import '@/styles/main.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import Playground from './playground';
import NoteApp from './NoteApp/App';

const container = document.getElementById('react-app');

if (container) {
  createRoot(container).render(
    <StrictMode>
      {/* <Playground /> */}
      <NoteApp />
    </StrictMode>
  );
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}

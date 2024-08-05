import '@/styles/main.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import Playground from './playground';
// import AvatarListPage from '@/pages/AvatarListPage';
import Counter from './components/Counter';
// import Playground from './playground';

const container = document.getElementById('react-app');

if (container) {
  createRoot(container).render(
    <StrictMode>
      {/* <Playground />
      <AvatarListPage /> */}
      <Counter />
    </StrictMode>
  );
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}

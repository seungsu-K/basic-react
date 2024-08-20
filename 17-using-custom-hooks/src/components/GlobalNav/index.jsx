import { NavLink } from 'react-router-dom';
import S from './style.module.css';
import { useState } from 'react';

function GlobalNav() {
  const [navigationList] = useState([
    { path: '/SyncDocumentTitle', text: 'SyncDocumentTitle' },
    { path: '/EffectSyncAndCleanup', text: 'EffectSyncAndCleanup' },
    { path: '/ScrollTriggerEffect', text: 'ScrollTriggerEffect' },
    { path: '/SyncBackend', text: 'SyncBackend' },
    { path: '/SyncWebStorage', text: 'SyncWebStorage' },
    { path: '/CheckOnOffline', text: 'CheckOnOffline' },
    { path: '/DataFetching', text: 'DataFetching' },
    { path: '/CounterApp', text: 'CounterApp' },
  ]);

  return (
    <nav className={S.component}>
      <h2>학습 주제</h2>
      <ul>
        {navigationList.map(({ path, text }) => (
          <li key={path}>
            <NavLink
              to={path}
              className={({ isActive }) => {
                return isActive ? S.active : undefined;
              }}
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default GlobalNav;

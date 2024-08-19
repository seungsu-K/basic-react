import { createBrowserRouter } from 'react-router-dom';
import EffectSyncAndCleanup from './effect-sync-and-cleanup';
import ScrollTriggerEffect from './scroll-trigger-effect';
import SyncBackend from './sync-backend';
import SyncDocumentTitle from './sync-document-title';
import SyncWebStorage from './sync-web-storage';
import RootLayout from '@/components/RootLayout';
import ErrorPage from '@/pages/Error';
import CheckOnOffline from './check-on-offline';

const routes = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <SyncDocumentTitle />,
      },
      {
        path: '/SyncDocumentTitle',
        element: <SyncDocumentTitle />,
      },
      {
        path: '/EffectSyncAndCleanup',
        element: <EffectSyncAndCleanup />,
      },
      {
        path: '/ScrollTriggerEffect',
        element: <ScrollTriggerEffect />,
      },
      {
        path: '/SyncBackend',
        element: <SyncBackend />,
      },
      {
        path: '/SyncWebStorage',
        element: <SyncWebStorage />,
      },
      {
        path: '/CheckOnOffline',
        element: <CheckOnOffline />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;

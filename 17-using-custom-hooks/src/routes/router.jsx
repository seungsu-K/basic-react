import { createBrowserRouter } from 'react-router-dom';
import EffectSyncAndCleanup from './effect-sync-and-cleanup';
import ScrollTriggerEffect from './scroll-trigger-effect';
import SyncBackend from './sync-backend';
import SyncDocumentTitle from './sync-document-title';
import SyncWebStorage from './sync-web-storage';
import RootLayout from '@/components/RootLayout';
import ErrorPage from '@/pages/Error';
import CheckOnOffline from './check-on-offline';
import UselessCheckbox from './effect-sync-and-cleanup/components/UselessCheckbox';
import PrintMousePosition from './effect-sync-and-cleanup/components/PrintMousePosition';
import ClockOnOffWrapper from './effect-sync-and-cleanup/components/ClockOnOffWrapper';
import DataFetchUsingUseFetchHook from './data-fetch-using-use-fetch-hook';
import CounterApp from './counter-app-use-counter';

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
        children: [
          {
            path: '/EffectSyncAndCleanup/',
            element: <PrintMousePosition />,
          },
          {
            path: '/EffectSyncAndCleanup/mouse-position',
            element: <PrintMousePosition />,
          },
          {
            path: '/EffectSyncAndCleanup/clock',
            element: <ClockOnOffWrapper />,
          },
          {
            path: '/EffectSyncAndCleanup/useless-checkbox',
            element: <UselessCheckbox />,
          },
        ],
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
      {
        path: '/DataFetching',
        element: <DataFetchUsingUseFetchHook />,
      },
      {
        path: '/CounterApp',
        element: <CounterApp />,
      },
    ],
  },
];

// const _routes = createRoutesFromElements(
//   <Route path="/" element={<RootLayout />}>
//     <Route index element={<SyncDocumentTitle />} />
//     <Route path="sync-web-storage" element={<SyncWebStorage />} />
//     {/* [중첩된 루트 설정] */}
//     <Route path="effect-sync-and-cleanup" element={<EffectSyncAndCleanup />}>
//       {/* /effect-sync-and-cleanup  →  마우스 위치 추적 */}
//       <Route index element={<PrintMousePosition />} />
//       {/* /effect-sync-and-cleanup/clock  →  시계 ON/OFF */}
//       <Route path="clock" element={<ClockOnOffWrapper />} />
//       {/* /effect-sync-and-cleanup/useless-checkbox  →  쓸모없는 체크박스 */}
//       <Route path="useless-checkbox" element={<UselessCheckbox />} />
//     </Route>
//     <Route path="scroll-trigger-effect" element={<ScrollTriggerEffect />} />
//     <Route path="sync-backend" element={<SyncBackend />} />
//     <Route path="check-on-offline" element={<heckOnOffline />} />
//   </Route>
// );

const router = createBrowserRouter(routes);

export default router;

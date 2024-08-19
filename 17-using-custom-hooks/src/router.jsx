import Home from '@/pages/Home';
import NewNote from '@/pages/NewNote';
import NoteDetail from '@/pages/NoteDetail';
import NoteList from '@/pages/NoteList';
import RootLayout from './pages/layout/RootLayout';
import ErrorPage from './pages/Error';
import { createBrowserRouter } from 'react-router-dom';

// const routes = [
//   {
//     path: '/',
//     element: <Home />,
//   },
//   {
//     path: '/notes',
//     element: <NoteList />,
//   },
//   {
//     path: '/notes/new',
//     element: <NewNote />,
//   },
//   {
//     path: '/notes/detail',
//     element: <NoteDetail />,
//   },
// ];

const routes = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/notes',
        element: <NoteList />,
      },
      {
        path: '/notes/new',
        element: <NewNote />,
      },
      {
        path: '/notes/detail',
        element: <NoteDetail />,
      },
    ],
  },
];

// const _routes = createRoutesFromElements(
//   <>
//     <Route path="/" element={<Home />} />
//     <Route path="/notes" element={<NoteList />} />
//     <Route path="/notes/new" element={<NewNote />} />
//     <Route path="/notes/detail" element={<NoteDetail />} />
//   </>
// );

const router = createBrowserRouter(routes);

export default router;

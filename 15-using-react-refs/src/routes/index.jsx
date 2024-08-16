import RememberWithoutReRender from './remember-without-re-render';
import DOMNodeAccessAndManipulation from './dom-node-access-and-manipulation';
import MotionOneAnimate from './motion-one-animate';
import MotionOneTimeline from './motion-one-timeline';
import MotionOneInView from './motion-one-in-view';
import MotionOneScroll from './motion-one-in-scroll';
import MotionOneStagger from './motion-one-stagger';
import Home from './home/home';
import UsingImperativeHandle from './using-imperative-handle';

const routes = [
  {
    title: '리액트로 만드는 싱글 페이지 어플리케이션',
    path: '/',
    element: <Home />,
  },
  {
    title: '리-렌더 없이 기억',
    path: '/remember-without-re-render',
    element: <RememberWithoutReRender />,
  },
  {
    title: 'DOM 노드 접근/조작',
    path: '/dom-node-access-and-manipulation',
    element: <DOMNodeAccessAndManipulation />,
  },
  {
    title: '모션원 animate()',
    path: '/motion-one-animate',
    element: <MotionOneAnimate />,
  },
  {
    title: '모션원 timeline()',
    path: '/motion-one-timeline',
    element: <MotionOneTimeline />,
  },
  {
    title: '모션원 inView()',
    path: '/motion-one-in-view',
    element: <MotionOneInView />,
  },
  {
    title: '모션원 scroll()',
    path: '/motion-one-scroll',
    element: <MotionOneScroll />,
  },
  {
    title: '모션원 stagger()',
    path: '/motion-one-stagger',
    element: <MotionOneStagger />,
  },
  {
    title: '명령형 핸들 노출',
    path: '/using-imperative-handle',
    element: <UsingImperativeHandle />,
  },
];

export default routes;

import S from './PrintMousePosition.module.css';

import useMousePosition from '@/hooks/useMousePosition';

function PrintMousePosition() {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const { x, y } = mousePosition;

  const mousePosition = useMousePosition();

  // const onMouseTracking = useCallback(({ pageX: x, pageY: y }) => {
  //   setMousePosition({ x, y });
  // }, []);

  // useEventListener(document, 'mousemove', onMouseTracking);

  // useEffect(() => {
  //   const handleMove = ({ pageX: x, pageY: y }) => {
  //     setMousePosition({ x, y });
  //   };

  //   document.addEventListener('mousemove', handleMove);

  //   return () => {
  //     document.removeEventListener('mousemove', handleMove);
  //   };
  // }, []);

  return (
    <div className={S.component}>
      <output>
        {mousePosition.x} <span>/</span> {mousePosition.y}
      </output>
    </div>
  );
}

export default PrintMousePosition;

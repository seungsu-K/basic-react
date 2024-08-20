import Switcher from '../sync-web-storage/components/Switcher';
import { useEffect, useRef } from 'react';
import useStateWithCallback from '@/hooks/useStateWithCallback';
import useToggle from '@/hooks/useToggle';

function CheckOnOffline() {
  // const isOnline = useOnline();
  const [isToggle, setIsToggle] = useToggle(false, (nextIsToggle) => {
    document.body.style.backgroundColor = nextIsToggle ? '#2f2f2f' : 'white';
  });

  // const [message, setMessage] = useState('hello');

  const [message, setMessage] = useStateWithCallback('hello', (nextMessage) => {
    pRef.current.textContent = nextMessage;
  });

  const handleChangeMessage = () => {
    setMessage((m) => `${m} ~hi`);
  };

  useEffect(() => {
    pRef.current.textContent = message;
  }, [message]);

  const pRef = useRef(null);

  return (
    <>
      <div style={{ display: 'flex', flexFlow: 'column' }}>
        <h1>Check On/Offline</h1>
        <Switcher value={isToggle} onToggle={() => setIsToggle((t) => !t)} />

        <button type="button" onClick={handleChangeMessage}>
          add message
        </button>
        <output>{message}</output>

        <p ref={pRef}></p>
      </div>
    </>
  );
}

export default CheckOnOffline;

import { bool, func } from 'prop-types';
import S from './ClockOnOff.module.css';
import useClock from '@/hooks/useClock';

ClockOnOff.propTypes = {
  isOn: bool,
  onToggle: func,
};

function ClockOnOff({ isOn = false, onToggle }) {
  const buttonLabel = isOn ? 'OFF' : 'ON';

  const time = useClock();

  // const [time, setTime] = useState(new Date());

  // useEffect(() => {
  //   const clearId = setInterval(() => {
  //     const nextTime = new Date();
  //     setTime(nextTime);
  //   }, 1000);

  //   return () => {
  //     clearInterval(clearId);
  //   };
  // }, []);

  return (
    <div className={S.component}>
      <button type="button" lang="en" onClick={onToggle}>
        CLOCK {buttonLabel}
      </button>
      <output hidden={!isOn}>{time.toLocaleTimeString()}</output>
    </div>
  );
}

export default ClockOnOff;

import { object } from 'prop-types';
import S from './style.module.css';
import { usePageContext } from '../context';

GrandChild.propTypes = {
  data: object,
};

function GrandChild() {
  const { message, color } = usePageContext();

  return (
    <div className={S.box} style={{ backgroundColor: color }}>
      <strong className={S.label}>Grand Child</strong>
      {/* {data.message && <p>{data.message}</p>} */}

      <p>{message}</p>
    </div>
  );
}

export default GrandChild;

// import { NavLink } from 'react-router-dom';
import NavLink from '../NavLink';
import S from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={S.component}>
      <ul>
        <li>
          <NavLink to="/">홈</NavLink>
        </li>
        <li>
          <NavLink to="/notes" end>
            노트 리스트
          </NavLink>
        </li>
        <li>
          <NavLink to="/notes/new">새 노트</NavLink>
        </li>
        <li>
          <NavLink to="/notes/detail">노트 상세</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

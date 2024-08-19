import { NavLink as _NavLink } from 'react-router-dom';

function NavLink(props) {
  return (
    <_NavLink
      className={({ isActive }) => {
        return isActive ? 'nav-active' : '';
      }}
      {...props}
    />
  );
}

export default NavLink;

import { string } from 'prop-types';
import { NavLink as _NavLink } from 'react-router-dom';
import S from '../style.module.css';

NavLink.propTypes = {
  className: string,
};

function NavLink({ className = '', ...restProps }) {
  return (
    <_NavLink
      aria-current="location"
      className={({ isActive }) => {
        const classNames = `${isActive ? S.active : ''} ${className}`.trim();
        return classNames;
      }}
      {...restProps}
    />
  );
}

export default NavLink;

import { NavLink } from 'react-router-dom';

import './index.css';

const navBar = () => <div>
  <ul className="Navbar Navbar-layout">
    <li>
      <NavLink exact to="/">Домой</NavLink>
    </li>
    <li>
      <NavLink exact to="/login">Войти</NavLink>
    </li>
  </ul>
  <div className="navbar-placeholder" />
</div>;

export default navBar;
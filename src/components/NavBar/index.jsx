import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { BsGearFill } from 'react-icons/bs';

import './index.css';
import { logout } from '../../store/auth';

const NavBar = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const gearClickHandler = () => history.push('/settings');

  return <div>
    <ul className="Navbar Navbar-layout">
      <li>
        <NavLink exact to="/">Домой</NavLink>
      </li>
      {
        !state.auth.user.userName ? 
          <li>
            <NavLink exact to="/login">Войти</NavLink>
          </li> :
          <li>
            <Link to="#" onClick={() => dispatch(logout())}>Выйти</Link>
          </li>
      }
      {
        state.auth.user.type === 'admin' && 
          <BsGearFill 
            className="navbar-icon-settings" 
            size="30" 
            onClick={gearClickHandler} /> 
      }
    </ul>
    <div className="navbar-placeholder" />
  </div>
};

export default NavBar;
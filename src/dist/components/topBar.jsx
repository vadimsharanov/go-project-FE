import React, { useContext, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/currentUser';

const TopBar = () => {
  const [currentUserState] = useContext(CurrentUserContext);
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Go
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          {currentUserState.isLoggedIn === false && (
            <Fragment>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Sign in
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
              </li>
            </Fragment>
          )}
          {currentUserState.isLoggedIn && (
            <Fragment>
              <li className="nav-item">
                <NavLink to="/articles/new" className="nav-link"></NavLink>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
};
export default TopBar;

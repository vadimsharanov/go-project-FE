import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import ErrorMessage from '../../components/errorMessage';
import useFetch from '../../hooks/useFetch';
import UserArticles from './components/userArticles';

const UserProfile = () => {
  const location = useLocation();
  const slug = location.pathname.split('/profiles/').join('').split('/favorites').join('');
  const isFavorites = location.pathname.includes('favorites');
  const apiUrl = `/profiles/${slug}`;
  const [{ response, error }, doFetch] = useFetch(apiUrl);
  useEffect(() => {
    doFetch();
  }, [doFetch]);
  if (!response) {
    return <h1>hello</h1>;
  }
  return (
    <div className="profile-page">
      <div className="user-info">
        {error && <ErrorMessage></ErrorMessage>}
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img className="user-img" src={response.profile.image} alt="" />
              <h4>{response.profile.username}</h4>
              <p>{response.profile.bio}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to={`/profiles/${response.profile.username}/`}
                    exact="true"
                  >
                    My Posts
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    // exact="true"
                    to={`/profiles/${response.profile.username}/favorites/`}
                  >
                    Favorite posts
                  </NavLink>
                </li>
              </ul>
            </div>
            <UserArticles
              username={response.profile.username}
              location={location}
              isFavorites={isFavorites}
              url={location.pathname}
            ></UserArticles>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;

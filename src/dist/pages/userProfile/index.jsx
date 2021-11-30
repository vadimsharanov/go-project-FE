import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const UserProfile = () => {
  const location = useLocation();
  const slug = location.pathname.split('/profiles/').join('');
  const apiUrl = `/profiles/${slug}`;
  const [{ response }, doFetch] = useFetch(apiUrl);

  useEffect(() => {
    doFetch();
  }, [doFetch]);
  if (!response) {
    return null;
  }
  return (
    <div className="profile-page">
      <div className="user-info">
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
                    to={`/articles?author=${response.profile.username}`}
                    className="nav-link"
                  >
                    My Posts
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={`/profiles/${response.profile.username}/favorites`}
                    className="nav-link"
                  >
                    Favorite posts
                  </NavLink>
                </li>
              </ul>
            </div>
            <UserArticles username={response.profile.username} location={location}></UserArticles>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;

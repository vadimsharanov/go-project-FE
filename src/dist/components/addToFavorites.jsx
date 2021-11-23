import classNames from 'classnames';
import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';

const AddToFavorites = ({ isFavorited, favoritesCount, articleSlug }) => {
  const apiUrl = `/articles/${articleSlug}/favorite`;
  const [{ response }, doFetch] = useFetch(apiUrl);
  const favoritesCountWithResponse = response ? response.article.favoritesCount : favoritesCount;
  const [favorited, setFavorited] = useState(isFavorited);
  console.log(favorited);
  const handleLike = (event) => {
    event.preventDefault();
    doFetch({
      method: favorited ? 'delete' : 'post',
    });
    setFavorited(!favorited);
  };
  const buttonClasses = classNames({
    btn: true,
    'btn-sm': true,
    'btn-primary': isFavorited,
    'btn-outline-primary': favorited,
  });
  return (
    <button className={buttonClasses} onClick={handleLike}>
      <i className="ion-heart"></i>
      <span>&nbsp; {favoritesCountWithResponse}</span>
    </button>
  );
};
export default AddToFavorites;

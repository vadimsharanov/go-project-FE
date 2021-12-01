import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { dateFormat } from '../../utils';
import useFetch from '../hooks/useFetch';

const CommentFeed = () => {
  const location = useLocation().pathname;
  const slug = location.split('/articles/').join('');
  const apiUrl = `/articles/${slug}/comment`;
  const [{ response, error }, doFetch] = useFetch(apiUrl);
  useEffect(() => {
    doFetch();
  }, [doFetch]);
  if (!response) {
    return <h1>what</h1>;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-10 offset-md-1">
          {response.comments.map((item, index) => (
            <div key={index} className="card">
              <div className="card-block">
                <p>{item.body}</p>
              </div>
              <div className="card-footer">
                <Link className="comment-author" to={`/profiles/${item.author.image}`}>
                  <img className="comment-author-img" src={item.author.image} alt="" />
                  &nbsp; &nbsp;
                </Link>
                <Link className="comment-author " to={`/profiles/${item.author.username}`}>
                  {item.author.username}
                  &nbsp;
                </Link>
                <span className="date-posted">{dateFormat(item.createdAt)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentFeed;

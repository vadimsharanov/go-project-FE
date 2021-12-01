import React, { useState } from 'react';
import { useLocation } from 'react-router';
import useFetch from '../hooks/useFetch';

const CommentForm = () => {
  const [body, setBody] = useState('');
  const location = useLocation().pathname;
  const apiUrl = `${location}/comment`;
  const [{ response, error }, doFetch] = useFetch(apiUrl);
  const handleSumbit = (e) => {
    e.preventDefault();
    const comment = { body: body };
    doFetch({
      method: 'post',
      data: { comment },
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-10 offset-md-1">
          <form className="card comment-form" onSubmit={handleSumbit}>
            <div className="card-block">
              <textarea
                className="form-control"
                rows="8"
                placeholder="Write your comment here"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
            </div>
            <div className="card-footer">
              <img src="" alt="something" />
              <button type="submit" className="btn btn-sm btn-primary">
                Post Comment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentForm;

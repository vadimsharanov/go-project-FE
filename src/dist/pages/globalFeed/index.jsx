import React, { useEffect } from 'react';
import Feed from '../../components/feed';
import useFetch from '../../hooks/useFetch';

const GlobalFeed = () => {
  const apiUrl = '/articles';
  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);
  console.log(response);
  useEffect(() => {
    doFetch();
  }, [doFetch]);

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1>Go</h1>
          <p>Educational project</p>
        </div>
      </div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            {isLoading && <div>Loading</div>}
            {error && <div>Some error happened</div>}
            {!isLoading && response && <Feed articles={response.articles}></Feed>}
          </div>
          <div className="col-md-3">Popular tags</div>
        </div>
      </div>
    </div>
  );
};
export default GlobalFeed;

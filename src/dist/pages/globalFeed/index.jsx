import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Fragment } from 'react/cjs/react.production.min';
import Feed from '../../components/feed';
import Pagination from '../../components/pagination';
import useFetch from '../../hooks/useFetch';

const GlobalFeed = (props) => {
  let gavno = useLocation();
  console.log(gavno);
  const apiUrl = '/articles';
  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);
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
            {!isLoading && response && (
              <Fragment>
                <Feed articles={response.articles}></Feed>
                <Pagination total={50} limit={10} url="/" currentPage={1}></Pagination>
              </Fragment>
            )}
          </div>
          <div className="col-md-3">Popular tags</div>
        </div>
      </div>
    </div>
  );
};
export default GlobalFeed;

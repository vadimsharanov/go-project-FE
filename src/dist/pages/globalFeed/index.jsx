import { stringify } from 'query-string';
import React, { useEffect } from 'react';
import { useLocation, useHistory, useParams } from 'react-router';
import { Fragment } from 'react/cjs/react.production.min';
import { getPaginator, limit } from '../../../utils';
import Feed from '../../components/feed';
import Pagination from '../../components/pagination';
import useFetch from '../../hooks/useFetch';

const GlobalFeed = () => {
  const location = useLocation();

  const { offset, currentPage } = getPaginator(location.search);
  const stringifiedParams = stringify({
    limit,
    offset,
  });
  const apiUrl = `/articles?${stringifiedParams}`;
  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);
  useEffect(() => {
    doFetch();
  }, [doFetch, currentPage]);

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
                <Pagination
                  total={response.articlesCount}
                  limit={limit}
                  url={location.pathname}
                  currentPage={currentPage}
                ></Pagination>
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

import { stringify } from 'query-string';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Fragment } from 'react/cjs/react.production.min';
import { getPaginator, limit } from '../../../utils';
import ErrorMessage from '../../components/errorMessage';
import Feed from '../../components/feed';
import FeedToggler from '../../components/feedToggler';
import Loading from '../../components/loading';
import Pagination from '../../components/pagination';
import PopularTags from '../../components/popularTags';
import useFetch from '../../hooks/useFetch';

const TagFeed = () => {
  const location = useLocation();
  const tagName = location.pathname.split('/tags/').join('');
  const { offset, currentPage } = getPaginator(location.search);
  const stringifiedParams = stringify({
    limit,
    offset,
    tag: tagName,
  });
  const apiUrl = `/articles?${stringifiedParams}`;
  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);
  useEffect(() => {
    doFetch();
  }, [doFetch, currentPage, tagName]);

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
            <FeedToggler tagName={tagName}></FeedToggler>
            {isLoading && <Loading></Loading>}
            {error && <ErrorMessage></ErrorMessage>}
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
          <div className="col-md-3">
            <PopularTags></PopularTags>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TagFeed;

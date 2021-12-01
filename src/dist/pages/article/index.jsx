import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import ErrorMessage from '../../components/errorMessage';
import Loading from '../../components/loading';
import TagList from '../../components/tagList';
import useFetch from '../../hooks/useFetch';
import { CurrentUserContext } from '../../contexts/currentUser';
import CommentFeed from '../../components/commentFeed';
import CommentForm from '../../components/commentForm';

const Article = () => {
  const location = useLocation();
  const slug = location.pathname.split('/articles/').join('');
  const apiUrl = `/articles/${slug}`;
  const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false);
  const [currentUserState] = useContext(CurrentUserContext);
  console.log(currentUserState.isLoggedIn);
  const [
    { response: fetchArticleResponse, error: fetchArticleError, isLoading: fetchArticleIsLoading },
    doFetch,
  ] = useFetch(apiUrl);
  const [{ response: deteleArticleResponse }, doDeleteArticle] = useFetch(apiUrl);

  const isAuthor = () => {
    if (!fetchArticleResponse || !currentUserState.isLoggedIn) {
      return false;
    }
    return fetchArticleResponse.article.author.username === currentUserState.currentUser.username;
  };

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  const deleteArticle = () => {
    doDeleteArticle({
      method: 'delete',
    });
  };
  useEffect(() => {
    if (!deteleArticleResponse) {
      return;
    }
    setIsSuccessfullSubmit(true);
  }, [deteleArticleResponse]);

  if (isSuccessfullSubmit) {
    return <Navigate to="/" />;
  }

  return (
    <div className="article-page">
      <div className="banner">
        {!fetchArticleIsLoading && fetchArticleResponse && (
          <div className="container">
            <h1>{fetchArticleResponse.article.title}</h1>
            <div className="article-meta">
              <Link to={`/profiles/${fetchArticleResponse.article.author.username}`}>
                <img src={fetchArticleResponse.article.author.image} alt="" />
              </Link>
              <div className="info">
                <Link to={`/profiles/${fetchArticleResponse.article.author.username}/`}>
                  {fetchArticleResponse.article.author.username}
                </Link>
                <span className="date"> {fetchArticleResponse.article.createdAt}</span>
              </div>
              {isAuthor() && (
                <span>
                  <Link
                    className="btn btn-outline-secondary btn-sm"
                    to={`/articles/${fetchArticleResponse.article.slug}/edit`}
                  >
                    <i className="ion-edit"></i>
                    Edit Article
                  </Link>
                  <button className="btn btn-outline-danger btn-sm" onClick={deleteArticle}>
                    <i className="ion-trash-a"></i>
                    Delete article
                  </button>
                </span>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="container page">
        {fetchArticleIsLoading && <Loading></Loading>}
        {fetchArticleError && <ErrorMessage></ErrorMessage>}
        {!fetchArticleIsLoading && fetchArticleResponse && (
          <div className="row article-content">
            <div className="col-xs-12">
              <div>
                <p>{fetchArticleResponse.article.body}</p>
              </div>
              <TagList tags={fetchArticleResponse.article.tagList}></TagList>
            </div>
          </div>
        )}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-xs-12 ">
            {!currentUserState.isLoggedIn && (
              <div className="card-block offset-md-4">
                Sign in or sign up to add comments on this article.
              </div>
            )}
            <CommentForm></CommentForm>
            <CommentFeed></CommentFeed>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Article;

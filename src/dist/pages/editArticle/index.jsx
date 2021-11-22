import React, { useEffect, useState, useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import ArticleForm from '../../components/articleForm';
import useFetch from '../../hooks/useFetch';
import { CurrentUserContext } from '../../contexts/currentUser';

const EditArticle = () => {
  const location = useLocation();
  const slug = location.pathname.split('/articles/').join('').split('/edit').join('');
  const [currentUserState] = useContext(currentUserState);
  const apiUrl = `/articles/${slug}`;
  const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false);
  const [{ response: fetchArticleResponse }, doFetchArticle] = useFetch(apiUrl);
  const [{ response: updateArticleResponse, error: updateArticleError }, doUpdateArticle] =
    useFetch(apiUrl);
  const handleSubmit = (article) => {
    console.log(article);
    doUpdateArticle({
      method: 'put',
      data: { article },
    });
  };
  const [initialValues, setInitialValues] = useState(null);
  useEffect(() => {
    doFetchArticle();
  }, [doFetchArticle]);

  useEffect(() => {
    if (!fetchArticleResponse) {
      // console.log('hello');
      return;
    }
    console.log(fetchArticleResponse);
    setInitialValues({
      title: fetchArticleResponse.article.title,
      description: fetchArticleResponse.article.description,
      body: fetchArticleResponse.article.body,
      tagList: fetchArticleResponse.article.tagList,
    });
  }, [fetchArticleResponse]);

  useEffect(() => {
    if (!updateArticleResponse) {
      return;
    }
    setIsSuccessfullSubmit(true);
  }, [updateArticleResponse]);

  if (currentUserState.isLoggedIn === false) {
    return <Navigate to="/" />;
  }

  if (isSuccessfullSubmit) {
    return <Navigate to={`/articles/${slug}`} />;
  }
  return (
    <ArticleForm
      onSubmit={handleSubmit}
      errors={updateArticleError || {}}
      initialValues={initialValues}
    ></ArticleForm>
  );
};
export default EditArticle;

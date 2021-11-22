import React, { useState, useEffect, useContext } from 'react';
import { Navigate } from 'react-router';
import ArticleForm from '../../components/articleForm';
import useFetch from '../../hooks/useFetch';
import { CurrentUserContext } from '../../contexts/currentUser';
const CreateArticle = () => {
  const apiUrl = '/articles';
  const [{ response, error }, doFetch] = useFetch(apiUrl);
  const [currentUserState] = useContext(CurrentUserContext);
  const initialValues = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };

  const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false);

  const handleSubmit = (article) => {
    console.log('handlesumbit', article);
    doFetch({
      method: 'post',
      data: {
        article,
      },
    });
  };

  useEffect(() => {
    if (!response) {
      return;
    }
    setIsSuccessfullSubmit(true);
  }, [response]);

  if (currentUserState.isLoggedIn === false) {
    return <Navigate to="/" />;
  }

  if (isSuccessfullSubmit) {
    return <Navigate to={`/articles/${response.article.slug}`} />;
  }
  return (
    <h1>
      <ArticleForm
        errors={error || { foo: 'foo' }}
        initialValues={initialValues}
        onSumbit={handleSubmit}
      ></ArticleForm>
    </h1>
  );
};
export default CreateArticle;

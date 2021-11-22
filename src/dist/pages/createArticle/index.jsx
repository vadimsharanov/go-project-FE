import React from 'react';
import ArticleForm from '../../components/articleForm';
const CreateArticle = () => {
  const errors = {};
  const initialValues = {};
  const handleSubmit = (data) => {
    console.log('handlesumbit', data);
  };
  return (
    <h1>
      <ArticleForm
        errors={errors}
        initalValues={initialValues}
        onSumbit={handleSubmit}
      ></ArticleForm>
    </h1>
  );
};
export default CreateArticle;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalFeed from './pages/globalFeed/index.jsx';
import Article from './pages/article/index.jsx';
import Authentication from './pages/authentication/index.jsx';
import TagFeed from './pages/tagFeed/index.jsx';
import YourFeed from './pages/yourFeed/index.jsx';
import CreateArticle from './pages/createArticle/index.jsx';

const AllRoutes = (props) => {
  return (
    <Routes>
      <Route path="/" element={<GlobalFeed></GlobalFeed>} />
      <Route path="/articles/new" element={<CreateArticle></CreateArticle>} />
      <Route path="/feed" element={<YourFeed></YourFeed>} />
      <Route path="/tags/:slug" element={<TagFeed></TagFeed>} />
      <Route path="/login" element={<Authentication></Authentication>} />
      <Route path="/register" element={<Authentication></Authentication>} />
      <Route path="/articles/:slug" element={<Article></Article>} />
    </Routes>
  );
};
export default AllRoutes;

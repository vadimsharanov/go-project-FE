import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalFeed from './pages/globalFeed/index.jsx';
import Article from './pages/article/index.jsx';
import Authentication from './pages/authentication/index.jsx';
import TagFeed from './pages/tagFeed/index.jsx';
import YourFeed from './pages/yourFeed/index.jsx';
import CreateArticle from './pages/createArticle/index.jsx';
import EditArticle from './pages/editArticle/index.jsx';
import Settings from './pages/settings/index.jsx';
import UserProfile from './pages/userProfile/index.jsx';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GlobalFeed></GlobalFeed>} />
      <Route path="/settings" element={<Settings></Settings>} />
      <Route path="/profiles/:slug" element={<UserProfile></UserProfile>} />
      <Route path="/profiles/:slug/favorites" element={<UserProfile></UserProfile>} />
      <Route path="/articles/new" element={<CreateArticle></CreateArticle>} />
      <Route path="/articles/:slug/edit" element={<EditArticle></EditArticle>} />
      <Route path="/feed" element={<YourFeed></YourFeed>} />
      <Route path="/tags/:slug" element={<TagFeed></TagFeed>} />
      <Route path="/login" element={<Authentication></Authentication>} />
      <Route path="/register" element={<Authentication></Authentication>} />
      <Route path="/articles/:slug" element={<Article></Article>} />
    </Routes>
  );
};
export default AllRoutes;

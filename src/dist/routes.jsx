import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalFeed from './pages/globalFeed/index.jsx';
import Article from './pages/article/index.jsx';
import Authentication from './pages/authentication/index.jsx';
const AllRoutes = (props) => {
  return (
    <Routes>
      <Route path="/" element={<GlobalFeed></GlobalFeed>} exact />
      <Route path="/login" element={<Authentication></Authentication>} />
      <Route path="/register" element={<Authentication></Authentication>} />
      <Route path="/articles/slug" element={<Article></Article>} />
    </Routes>
  );
};
export default AllRoutes;

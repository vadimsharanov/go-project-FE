import React from 'react';
import { Link } from 'react-router-dom';
import { dateFormat } from '../../utils';
const Feed = ({ articles }) => {
  const noImage =
    'https://lh3.googleusercontent.com/proxy/AGxe1nsJs24WYUgCDGglnJzaADeHC0VaA_YxJQW76UUmAzsP_l0Y5PL4y6pVcEAa2ihchYtwlsRoiji9lRzgMxQo4lJ1Y5DvSP1vt4loHPyDuVX-y10';

  return (
    <div>
      {articles.map((article, index) => (
        <div className="article-preview" key={index}>
          <div className="article-meta">
            <Link to={`/profiles/${article.author.username}`}>
              <img src={article.author.image === '' ? noImage : article.author.image} alt="" />
            </Link>
            <div className="">
              <Link to={`/profiles/${article.author.username}`} className="author"></Link>
              <span className="date">{dateFormat(article.createdAt)}</span>
            </div>
          </div>
          <Link to={`/articles/${article.slug}`} className="preview-link">
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <span>Read more...</span>
            <ul className="tag-list">
              {article.tagList.map((tag) => (
                <li key={tag} className="tag-default tag-pill tag-outline"></li>
              ))}
            </ul>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Feed;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ArticlePage.css';

const ArticlePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://newsApp-backend.cloud-stacks.com/api/articles');
        setArticles(response.data);
      } catch (error) {
        console.error('Failed to fetch articles');
      }
    };
    fetchArticles();
  }, []);

  return (
    <div className="article-page">
      <header className="header">
        <div className="branding">NewsApp</div>
        <nav className="navigation">
          <a href="#home">Home</a>
          <a href="#world">World</a>
          <a href="#technology">Technology</a>
          <a href="#health">Health</a>
        </nav>
      </header>
      <main className="main-content">
        <div className="articles-list">
          {articles.map(article => (
            <div key={article.id} className="article">
              <a href={`/article/${article.id}`} className="headline">{article.headline}</a>
              <p className="snippet">{article.snippet}</p>
              <a href={`/article/${article.id}`} className="read-more">Read More</a>
            </div>
          ))}
        </div>
        <aside className="sidebar">
          <div className="related-news">
            <h3>Related News</h3>
          </div>
          <div className="popular-topics">
            <h3>Popular Topics</h3>
          </div>
          <div className="social-media">
            <h3>Follow Us</h3>
          </div>
        </aside>
      </main>
      <footer className="footer">
        <div className="footer-links">
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
          <a href="#subscribe">Subscribe</a>
        </div>
        <form className="subscription-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </footer>
    </div>
  );
};

export default ArticlePage;

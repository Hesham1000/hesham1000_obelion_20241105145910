import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HomePage.css';

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://newsApp-backend.cloud-stacks.com/api/articles', {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setArticles(response.data);
      } catch (err) {
        setError('Failed to load articles');
      }
    };

    fetchArticles();
  }, []);

  const handleReadMore = (content) => {
    alert(content);
  };

  return (
    <div className="homepage">
      <header className="header">
        <div className="branding">NewsApp</div>
        <nav className="navigation">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      <main className="main-content">
        <section className="articles">
          {error && <p className="error">{error}</p>}
          {articles.map(article => (
            <div key={article.id} className="article">
              <h2 className="article-title">
                <a href="#" onClick={() => handleReadMore(article.fullContent)}>{article.headline}</a>
              </h2>
              <p className="article-snippet">{article.snippet}</p>
              <button onClick={() => handleReadMore(article.fullContent)}>Read More</button>
            </div>
          ))}
        </section>
        <aside className="sidebar">
          <h3>Related News</h3>
          <ul>
            <li><a href="#">Related Topic 1</a></li>
            <li><a href="#">Related Topic 2</a></li>
          </ul>
          <h3>Popular Topics</h3>
          <ul>
            <li><a href="#">Popular Topic 1</a></li>
            <li><a href="#">Popular Topic 2</a></li>
          </ul>
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </aside>
      </main>
      <footer className="footer">
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
        <div className="contact-info">
          <p>Contact us at: info@newsapp.com</p>
        </div>
        <div className="subscription">
          <input type="email" placeholder="Subscribe for updates" />
          <button>Subscribe</button>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

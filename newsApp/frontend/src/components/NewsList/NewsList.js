import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NewsList.css';

function NewsList() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://newsApp-backend.cloud-stacks.com/api/articles')
      .then(response => {
        setNewsArticles(response.data);
      })
      .catch(() => {
        setError('Failed to retrieve articles');
      });
  }, []);

  const handleReadMore = (id) => {
    window.location.href = `/articles/${id}`;
  };

  return (
    <div className="news-list">
      <header className="header">
        <h1>NewsApp</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>World</li>
            <li>Politics</li>
            <li>Sports</li>
            <li>Entertainment</li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="articles">
          {error && <p className="error">{error}</p>}
          {newsArticles.map(article => (
            <article key={article.id}>
              <h2><a href={`/articles/${article.id}`}>{article.headline}</a></h2>
              <p>{article.snippet}</p>
              <button onClick={() => handleReadMore(article.id)}>Read More</button>
            </article>
          ))}
        </section>
        <aside className="sidebar">
          <h3>Related Links</h3>
          <ul>
            <li>Popular Topics</li>
            <li>Follow us on Social Media</li>
          </ul>
        </aside>
      </main>
      <footer>
        <ul>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Subscribe to our Newsletter</li>
        </ul>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </footer>
    </div>
  );
}

export default NewsList;

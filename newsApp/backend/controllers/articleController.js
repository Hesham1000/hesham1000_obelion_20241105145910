Here's the backend logic for the `articleController.js` file, which handles CRUD operations for articles using the Sequelize model:

// Import the Article model
const Article = require('../models/Article');

// Get all articles
exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.findAll();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve articles' });
  }
};

// Get a single article by ID
exports.getArticleById = async (req, res) => {
  try {
    const articleId = req.params.id;
    const article = await Article.findByPk(articleId);

    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }

    res.json(article);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve article' });
  }
};

// Create a new article
exports.createArticle = async (req, res) => {
  try {
    const { headline, snippet, fullContent } = req.body;

    const newArticle = await Article.create({
      headline,
      snippet,
      fullContent,
    });

    res.status(201).json(newArticle);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create article' });
  }
};

// Update an existing article by ID
exports.updateArticle = async (req, res) => {
  try {
    const articleId = req.params.id;
    const { headline, snippet, fullContent } = req.body;

    const article = await Article.findByPk(articleId);

    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }

    article.headline = headline;
    article.snippet = snippet;
    article.fullContent = fullContent;

    await article.save();

    res.json(article);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update article' });
  }
};

// Delete an article by ID
exports.deleteArticle = async (req, res) => {
  try {
    const articleId = req.params.id;

    const article = await Article.findByPk(articleId);

    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }

    await article.destroy();

    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete article' });
  }
};

This controller file defines functions to handle HTTP requests for all CRUD operations (Create, Read, Update, Delete) on the `Article` model. The functions use async/await for asynchronous database operations and provide JSON responses for the frontend. Proper error handling is included to return meaningful error messages when operations fail.
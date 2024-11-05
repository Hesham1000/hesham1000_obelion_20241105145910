const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

// GET /articles - Get all articles
router.get('/articles', articleController.getAllArticles);

// GET /articles/:id - Get a single article by ID
router.get('/articles/:id', articleController.getArticleById);

// POST /articles - Create a new article
router.post('/articles', articleController.createArticle);

// PUT /articles/:id - Update an existing article by ID
router.put('/articles/:id', articleController.updateArticle);

// DELETE /articles/:id - Delete an article by ID
router.delete('/articles/:id', articleController.deleteArticle);

module.exports = router;

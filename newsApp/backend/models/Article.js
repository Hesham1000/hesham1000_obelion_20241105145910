const { Model, Sequelize } = require('sequelize');
const sequelize = new Sequelize('news', 'root', 'root', {
  host: 'db',
  port: 3306,
  dialect: 'mysql',
  logging: false,
});

class Article extends Model {
  static init(sequelize) {
    super.init({
      headline: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      snippet: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      fullContent: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    }, {
      sequelize,
      modelName: 'Article',
      tableName: 'articles',
      timestamps: false,
    });
  }
}

Article.init(sequelize);

module.exports = Article;

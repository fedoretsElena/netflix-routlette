module.exports = process.env.NODE_ENV === 'development'
  ? require('./config/webpack/webpack.dev')
  : require('./config/webpack/webpack.prod');

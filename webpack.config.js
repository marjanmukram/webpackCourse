const path = require('path');
//A file application with multiple entry point
module.exports = {
  entry: {
    first: './src/first.js',
    second: './src/second.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  }
};

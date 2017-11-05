module.exports = {
  //define entry poin
  entry: './src/stopwatch.js',

  //define output point
  output: {
    filename: 'dist/bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
};

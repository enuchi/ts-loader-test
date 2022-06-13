const GasPlugin = require('gas-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './index.ts',
  output: {
    filename: 'code.js'
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [
      // typescript config
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new GasPlugin({
      // removes need for assigning public server functions to "global"
      autoGlobalExportsFiles: ['./index.ts']
    })
  ]
};

const path = require('path')

module.exports = {
  devServer: {
		hot: true,
		compress: true,
	},
  mode: 'development',
  context: __dirname,
  entry: {
    main: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  externals: {
    './cptable': 'var cptable',
  },
  externalsPresets: {
    node: true,
  },
  builtins: {
    presetEnv: {
      targets: ['> 1%', 'last 2 versions', 'not dead']
    },
    html: [{ template: './index.html' }],
    react: {
      development: true,
      refresh: true,
    },
    // copy: {
    //   patterns: [
    //     { from: path.resolve(__dirname, './src/static'), to: 'static' },
    //   ],
    // },
    pluginImport: [
      {
        libraryName: 'antd',
        style: 'css',
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        type: 'jsx',
      },
      {
        test: /\.ts$/,
        type: 'tsx',
      },
      {
        test: /\.css$/i,
        type: 'css',
      },
      {
        // css-modules
        test: /\.scss$/i,
        type: 'css/module',
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              prependData: '@import "styles/_theme.scss";',
            },
          },
        ],
      },
      { test: /.less$/, use: [{ loader: 'less-loader' }], type: 'css' },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        type: 'asset',
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
      components: path.resolve(__dirname, './src/components'),
      common: path.resolve(__dirname, './src/common'),
      styles: path.resolve(__dirname, './styles'),
      utils: path.resolve(__dirname, './src/utils'),
      static: path.resolve(__dirname, './src/static'),
    },
    modules: ['node_modules'],
  },
}

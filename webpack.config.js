const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, argv) => {
  const ARGS_SENTRY_ENV = JSON.stringify(env.SENTRY_ENV) || "local";
  const ARGS_SENTRY_RELEASE = JSON.stringify(env.SENTRY_RELEASE) || "local";
  const ARGS_BUILD_ENV = JSON.stringify(env.BUILD_ENV) || "local";
  const ARGS_BASE_DOMAIN = JSON.stringify(env.BASE_DOMAIN) || "hipbar-dev.com";
  const config = {
    entry: ["react-hot-loader/patch", "./src/index.js"],
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[contenthash].js",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          use: {
            loader: "file-loader",
            options: {
              name: "fonts/[name].[ext]",
            },
          },
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.svg$/,
          use: "file-loader",
        },
        {
          test: /\.png$/,
          use: [
            {
              loader: "url-loader",
              options: {
                mimetype: "image/png",
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"],
      alias: {
        "react-dom": "@hot-loader/react-dom",
      },
    },
    devServer: {
      contentBase: "./dist",
      public: "fk-local.hipbar-dev.com",
    },
    plugins: [
      new CopyPlugin({
        patterns: [{ from: "src/index.html" }],
      }),
      new HtmlWebpackPlugin({
        template: "src/index.html",
        filename: "index.html",
      }),
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin({
        ARGS_SENTRY_ENV: ARGS_SENTRY_ENV,
        ARGS_SENTRY_RELEASE: ARGS_SENTRY_RELEASE,
        ARGS_BUILD_ENV: ARGS_BUILD_ENV,
        ARGS_BASE_DOMAIN: ARGS_BASE_DOMAIN,
      }),
    ],
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    },
  };

  if (argv.hot) {
    // Cannot use 'contenthash' when hot reloading is enabled.
    config.output.filename = "[name].[hash].js";
  }

  return config;
};

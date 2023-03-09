const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: { base: ["./src/main.ts"] },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          type: "css/mini-extract",
          enforce: true, // force css in new chunks (ignores all other options)
        },
      },
    },
    minimizer: [new CssMinimizerPlugin()],
  },
  module: {
    rules: [
      {
        test: /(\.js|\.ts|\.tsx|\.jsx)/,
        exclude: /(node_modules)/,
        use: "ts-loader",
      },
      {
        test: /\.s[ca]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
};

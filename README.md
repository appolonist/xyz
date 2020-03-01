# xyz
Shop app playground

In this project I used :
 *Babel:
  @babel/core@7.1.0 its a main babel package,
  @babel/cli@7.1.0 allows to compile files from the command line,
  @babel/preset-env@7.1.0 transform ES6+ code to "traditional" JS,
  @babel/preset-react@7.0.0 transform JSX to "traditional" JS.

  All presets can be set in .babelrc file
```{"presets": ["@babel/env", "@babel/preset-react"]}```
or in webpack.config.js file but to do that we need install babel-loader first. Use command in your terminal:
``` npm install -D babel-loader ```
than in webpack.config.js Within your webpack configuration object, you'll need to add the babel-loader to the list of modules, like so:
```module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}```

 *React,
 *Redux,
 *MongoDB,
 *Node,
 *Express,
 *Webpack
 


# xyz
Shop app playground

In this project I have used :

 ## 1. Babel:

  - @babel/core@7.1.0 its a main babel package,
  - @babel/cli@7.1.0 allows to compile files from the command line,
  - @babel/preset-env@7.1.0 transform ES6+ code to "traditional" JS,
  - @babel/preset-react@7.0.0 transform JSX to "traditional" JS.

 ###### All presets can be set 
 - in .babelrc file
```javascript
{"presets": ["@babel/preset-env", "@babel/preset-react"]}
```
 - or in webpack.config.js file but to do that we need install babel-loader first. Use command in your terminal:
``` 
npm install -D babel-loader 
```
than in webpack.config.js you'll need to add the babel-loader to the list of modules, like so:
```javascript
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env','@babel/preset-react']
        }
      }
    }
  ]
}
```

 ## 2. React:
 -
 ## 3. Redux:
 -
 ## 4. MongoDB:
 -
 ## 5. Node:
 -
 ## 6. Express:
 -
 ## 7. Webpack:

 ```
 npm i -D webpack webpack-cli
 ```
 That command add webpack and webpack cli to project dependencies.

 I also used webpack-merge to divide webpack configuration file on 3 parts:
 - developpment,
 - production,
 - common

 Webpack loaders used in project:

 Webpack plugins used in project:

- CleanWebpackPlugin ```npm i -D clean-webpack-plugin``` A webpack plugin to remove/clean your build folder(s).
- HtmlWebpackPlugin ``` npm i -D html-webpack-plugin``` Plugin generates an HTML5 file. More info [here](https://webpack.js.org/plugins/html-webpack-plugin/)
 
 Webpack Tools:

 - Webpack-dev-server ```npm i -D webpack-dev-server``` Tool imitating server + has HMR. More info [here](https://webpack.js.org/configuration/dev-server/)
 


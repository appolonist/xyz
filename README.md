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
 -
 


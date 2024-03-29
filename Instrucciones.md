# Crear estructura del proyecto

- **tests**
- public
  - index.html
- src
  - App.js
  - index.js
- .babelrc
- .gitignore
- package.json
- webpack.config.js

## Iniciar nuestro archivo **_package.json_**

    $ npm init -y

## Instalar dependencias de webpack en dev

    $ npm i --save-dev webpack webpack-dev-server webpack-cli

## Instalar dependencias de babel en dev

    $ npm i --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader

## Instalar dependencias de archivos (css, img, etc)

    $ npm i --save-dev html-webpack-plugin mini-css-extract-plugin clean-webpack-plugin autoprefixer postcss-loader css-loader node-sass sass-loader file-loader style-loader url-loader

## Instalar dependencias de React (stable) 18

    $ npm i --save react react-dom

## Agregar en el archivo .babelrc

    {
        "presets": [
            "@babel/preset-env",
            "@babel/preset-react"
        ]
    }

## Agregar al archivo .gitignore

    ### react ###
    .DS_*
    *.log
    logs
    **/*.backup.*
    **/*.back.*

    node_modules
    bower_components
    build

    *.sublime*

    psd
    thumb
    sketch

## Aregar al archivo index.html

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" href="#">
        <title>Document</title>
    </head>
    <body>
        <div id="root"></div>
    </body>
    </html>

## Agregar al archivo webpack.config.js

Agregar los import de las dependencias en el **_webpack.config.js_**:

```javascript
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');
```

Export modulo en el **_webpack.config.js_**:

```javascript
module.exports = {};
```

Definir "entry" en el **_webpack.config.js_**

```javascript
    module.exports = {
        ...
        entry: path.resolve(__dirname, './src/index.js'),
        ...
    }
```

Definir "output" en el **_webpack.config.js_**

```javascript
    module.exports = {
        ...
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].bundle.js',
            publicPath: '/'
        },
        ...
    }
```

Definir "rules" en el **_webpack.config.js_**

- Agregar Regla para babel

```javascript
    module.exports = {
        ...
        module: {
            rules: [
                ...
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                ...
            ]
        }
        ...
    }
```

- Agregar Regla para imagenes

```javascript
    module.exports = {
        ...
        module: {
            rules: [
                ...
                {
                    test: /\.(jpe?g|png|gif|svg)$/,
                    use: {
                        loader: 'url-loader'
                    }
                },
                ...
            ]
        }
        ...
    }
```

- Agregar Regla para archivos css o sass

```javascript
    module.exports = {
        ...
        module: {
            rules: [
                ...
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                ...
            ]
        }
        ...
    }
```

Definir "resolve" en el **_webpack.config.js_**

```javascript
    module.exports = {
        ...
        resolve: {
            extensions: ['*', '.js', '.jsx']
        }
        ...
    }
```

Definir "devServer" en el **_webpack.config.js_**

```javascript
    module.exports = {
        ...
        devServer: {
            allowedHosts: 'all',
            historyApiFallback: true,
            compress: true,
            port: 3000,
            open: true,
            hot: true
        }
        ...
    }
```

Definir "plugins" en el **_webpack.config.js_**

```javascript
    module.exports = {
        ...
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, './public/index.html'),
                filename: 'index.html'
            }),
            new MiniCssExtractPlugin({
                filename: 'style.css'
            }),
            new CleanWebpackPlugin(),
            new Dotenv()
        ]
        ...
    }
```

Configurar "scripts" en el **_package.json_**

```json
    {
        ...
        "scripts": {
            ...
            "start": "webpack serve --config ./webpack.config.js --mode development",
            "build": "webpack --mode production",
            ...
        }
        ....
    }

```

## Incluir codigo en el **_./src/index.js_**

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as data from './data/info';
import 'bootstrap';
import './styles/App.css';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App {...data} />);
```

## Incluir en el **_./src/App.js_**

```javascript
import React from 'react';

const App = () => {
	return <></>;
};

export default App;
```

## Instalar "Jest" para pruebas unitarias (opcional)

    $ npm i --save-dev jest

Configurar "scripts" en el **_package.json_**

```json
    {
        ...
        "scripts": {
            ...
            "test": "jest --watchAll"
            ...
        }
        ....
    }
```

## Instalar "Bootstrap" (opcional)

    $ npm i --save bootstrap

Configurar bootstrap en el **_index.js_**

```javascript
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
```

## Instalar Prop-Types (opcional)

    $ npm i --save prop-types

## Instalar Dotenv para leer variables de entorno

    $ npm install dotenv-webpack --save-dev

## Configurar Dotenv en el webpack.config.js

```javascript
const Dotenv = require('dotenv-webpack');

module.exports = {
  ...
  plugins: [
    new Dotenv()
  ]
  ...
};

```

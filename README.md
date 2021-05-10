# React-valency

[![npm version][npmv-image]][npmv-url]
[![build status][build-image]][build-url]
[![coverage status][codecov-image]][codecov-url]
[![npm downloads][npmd-image]][npmd-url]

# 🤔 What is Valency?

Valency is a tool to manage and serve design assets.

- Design assets managed with Valency are served for use over a CDN.

## 📦 Install

```bash
$ npm install @valencyhq/vanilla @valencyhq/react --save
```

## 🪄 Basic Usage

```jsx
import React, { useEffect } from 'react'
import { render } from 'react-dom'
import Valency from '@valencyhq/vanilla'
import { ValencyContext, Image, Object, Icon } from '@valencyhq/react'

const valent = new Valency({
      uid: 'Your user ID',
      project: 'Your default project ID',
      library: 'Your default library ID',
})

const App = () => {
      return (
            <ValencyContext.Provider value={valent}>
                  {/* Your other components wrapped */}
                  <ExampleBasicUsage />
            </ValencyContext.Provider>
      )
}

const ExampleBasicUsage = () => {
      return (
            <>
                  <Image name="cat-dog" />
                  <Object name="cat-dog" />
                  <Icon library="Lib_icons" name="like" />
            </>
      )
}

render(<App />, document.getElementById('root'))
```

## ▶️ Live Examples

- [Basic Usage](https://codesandbox.io/s/react-valency-uqrdi?file=/src/App.js)

## API

**Props**

- `foo` - Something something.
- `bar` - _Optional_ Something something. Defaults to `null`.

**Example**

```jsx
```

## 🧾 License

Valency is licensed under the [MIT License](https://github.com/ValencyHQ/react/blob/master/LICENSE).

[build-image]: https://img.shields.io/github/workflow/status/ValencyHQ/react/CI?style=flat-square
[build-url]: https://github.com/ValencyHQ/react/actions?query=workflow%3ACI
[codecov-image]: https://img.shields.io/codecov/c/github/ValencyHQ/react.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/ValencyHQ/react
[npmv-image]: https://img.shields.io/npm/v/ValencyHQ/react.svg?style=flat-square
[npmv-url]: https://www.npmjs.com/package/ValencyHQ/react
[npmd-image]: https://img.shields.io/npm/dm/ValencyHQ/react.svg?style=flat-square
[npmd-url]: https://www.npmjs.com/package/ValencyHQ/react

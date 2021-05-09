# React-valency

[![npm version][npmv-image]][npmv-url]
[![build status][build-image]][build-url]
[![coverage status][codecov-image]][codecov-url]
[![npm downloads][npmd-image]][npmd-url]

> About

## Basic Usage

```jsx
import React, { useEffect } from 'react'
import { render } from 'react-dom'
import Valency from '@valencyhq/vanilla'
import {
      ValencyContext,
      Image,
      Object,
      Icon,
      useValency,
} from '@valencyhq/react'

const App = () => {
      const valent = new Valency({
            uid: 'Your user ID',
            project: 'Your default project ID',
            library: 'Your default library ID',
      })

      return (
            <ValencyContext.Provider value={valent}>
                  {/* Your other components wrapped */}
                  <ExampleBasicUsage />
                  <ExampleHooksUsage />
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

const ExampleHooksUsage = () => {
      const { get, asset } = useValency()

      useEffect(() => {
            console.log('Print cat-dig asset URL', get('cat-dog'))
      })

      return (
            <>
                  <button
                        type="button"
                        onClick={() => {
                              window.open(asset['cat-dog'].url, '_blank')
                        }}
                  >
                        View Asset
                  </button>
            </>
      )
}

render(<App />, document.getElementById('root'))
```

## Live Examples

- [Basic Usage](https://codesandbox.io/)
- [API Example](https://codesandbox.io/)
- [UMD Build (Development)](https://codesandbox.io/)
- [UMD Build (Production)](https://codesandbox.io/)

## API

**Props**

- `foo` - Something something.
- `bar` - _Optional_ Something something. Defaults to `null`.

**Example**

```jsx
```

## Installation

```
$ npm install @valencyhq/vanilla @valencyhq/react --save
```

There are also UMD builds available via [unpkg](https://unpkg.com/):

- https://unpkg.com/@valencyhq/react/dist/react.umd.development.js
- https://unpkg.com/@valencyhq/react/dist/react.umd.production.js

For the non-minified development version, make sure you have already included:

- [`React`](https://unpkg.com/react/umd/react.development.js)
- [`ReactDOM`](https://unpkg.com/react-dom/umd/react-dom.development.js)

For the minified production version, make sure you have already included:

- [`React`](https://unpkg.com/react/umd/react.production.min.js)
- [`ReactDOM`](https://unpkg.com/react-dom/umd/react-dom.production.min.js)

## License

MIT

[build-image]: https://img.shields.io/github/workflow/status/ahkohd/react/CI?style=flat-square
[build-url]: https://github.com/ahkohd/react/actions?query=workflow%3ACI
[codecov-image]: https://img.shields.io/codecov/c/github/ahkohd/react.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/ahkohd/react
[npmv-image]: https://img.shields.io/npm/v/react.svg?style=flat-square
[npmv-url]: https://www.npmjs.com/package/react
[npmd-image]: https://img.shields.io/npm/dm/react.svg?style=flat-square
[npmd-url]: https://www.npmjs.com/package/react

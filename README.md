# React-valency

[![npm version][npmv-image]][npmv-url]
[![.github/workflows/publish.yml](https://github.com/ValencyHQ/react/actions/workflows/publish.yml/badge.svg)](https://github.com/ValencyHQ/react/actions/workflows/publish.yml)
[![coverage status][codecov-image]][codecov-url]
[![npm downloads][npmd-image]][npmd-url]

# 🤔 What is Valency?

Valency is a tool to manage and serve design assets.

- Design assets managed with Valency are served for use over a CDN.

## 📦 Install

```bash
$ npm install @valencyhq/valency @valencyhq/react --save
```

## Table of Contents

- [Basic Usage](#basic-usage)

     - [Component Usage](#components-usage)

- [Live Examples](#live-examples)
- [API Reference](#api-reference)
     - [Components](#components)
     - [ValencyProvider](#valencyprovider)
     - [Hooks](#hooks)
          - [useValency()](#usevalency)
- [Contributing](#contributing)
- [License](#license)

## <span id="basic-usage">🪄 Basic Usage</span>

### <span id="components-usage">1. 🧱 Components Usage</span>

```jsx
import React, { useEffect } from 'react'
import { render } from 'react-dom'
import Valency from '@valencyhq/valency'
import { ValencyProvider, Image, Object, Icon } from '@valencyhq/react'

const valent = new Valency({
      uid: 'Your user ID',
      project: 'Your default project ID',
      library: 'Your default library ID',
})

const App = () => {
      return (
            <ValencyProvider value={valent}>
                  {/* Your other components wrapped */}
                  <ExampleBasicUsage />
            </ValencyProvider>
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

### <span id="hooks-usage">2. 🪝 Hooks Usage</span>

```jsx
import React, { useEffect } from 'react'
import { render } from 'react-dom'
import Valency from '@valencyhq/valency'
import { ValencyProvider, Image, Object, Icon } from '@valencyhq/react'

const valent = new Valency({
      uid: 'Your user ID',
      project: 'Your default project ID',
      library: 'Your default library ID',
})

const App = () => {
      return (
            <ValencyProvider value={valent}>
                  {/* Your other components wrapped */}
                  <ExampleHooksUsage />
            </ValencyProvider>
      )
}

const ExampleHooksUsage = () => {
      const { get, asset, getConfig, setConfig } = useValency()

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

## <span id="live-examples">▶️ Live Examples</span>

- [Basic Usage](https://codesandbox.io/s/react-valency-uqrdi?file=/src/App.js)

## <span id="api-reference">📖 API Reference</span>

### Components

Valency provides some components:

- `Image` - An `<img/>`element

```jsx
<Image name="cat-dog" width={200} height={200} />
```

- `Object` - An `<object/>` element

```jsx
<Object name="cat-dog" width={200} height={200} />
```

- `Icon` - Renders `<svg/>` as an icon

```jsx
<Icon name="like" width="40px" height="40px" color="red" stokeWidth="2px" />
```

The components above accepts the following **props** and all other valid props of the type of `HTML` element rendered by the component:

- `name` - Name of asset
- `library?` - (Optional) ID of the library to get the asset
- `project?` - (Optional) ID of the project to get the asset
- `uid?` - (Optional) ID of the user that the asset belongs to

> If an optional prop is not provided, the corresponding default value set at the instance of [`Valency`](https://github.com/ValencyHQ/vanilla) class which is asssigned the the [ValencyProvider](#valencyprovider) will be used.

### `ValencyProvider`

A provider that will pass the provided instance of [`Valency`](https://github.com/ValencyHQ/vanilla) through the component tree without having to pass props down manually at every level.

```jsx
import { ValencyProvider } from '@valencyhq/react'

const valent = new Valency({
      uid: 'Your user ID',
      project: 'Your default project ID',
      library: 'Your default library ID',
})

// ...
<ValencyProvider value={valent}>
      {/* Place components that will use valency here */}
</ValencyProvider>
//..
```

### Hooks

### <span id="usevalency">`useValency()`</span>

<span id="usevalency">`useValency`</span> hook provides a set of APIs.

```jsx
import { useValency } from '@valencyhq/react'

// ...
const { get, getConfig, setConfig, asset } = useValency()
//..
```

The following are functions and properties exposed by the [`useValency()`](#usevalency) hook:

- [`get()`](https://github.com/ValencyHQ/vanilla#valencygetfn): Returns a URL to the provided `assetName`. [(See documentation)](https://github.com/ValencyHQ/vanilla#valencygetfn)
- [`getConfig()`](https://github.com/ValencyHQ/vanilla#valencygetconfigotherconfig): Returns configuration object. [(See documentation)](https://github.com/ValencyHQ/vanilla#valencygetfn)
- [`setConfig()`](https://github.com/ValencyHQ/vanilla#valencysetconfigotherconfig): Use to globally update configuration. [(See documentation)](https://github.com/ValencyHQ/vanilla#valencysetfn)
- [`asset`](https://github.com/ValencyHQ/vanilla#valencyget-shorthand-properties): Valency provides convenient shorthand properties to Valency.get() which provides an intuitive way to get an asset's URL. [(See documentation)](https://github.com/ValencyHQ/vanilla#valencygetfn)

## <span id="contributing">👨‍🔧 Contributing</span>

For more info on how to contribute please see the [contribution guidelines](./CONTRIBUTING.md).
Caught a mistake or want to contribute to the documentation? [Edit this page on Github](./README.md)

## <span id="license">🧾 License</span>

React-valency is licensed under the [MIT License](https://github.com/ValencyHQ/react/blob/master/LICENSE).

[build-image]: https://img.shields.io/github/workflow/status/ValencyHQ/react/CI?style=flat-square
[codecov-image]: https://img.shields.io/codecov/c/github/ValencyHQ/react.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/ValencyHQ/react
[npmv-image]: https://img.shields.io/npm/v/@valencyhq/react.svg?style=flat-square
[npmv-url]: https://www.npmjs.com/package/@valencyhq/react
[npmd-image]: https://img.shields.io/npm/dm/@valencyhq/react.svg?style=flat-square
[npmd-url]: https://www.npmjs.com/package/@valencyhq/react

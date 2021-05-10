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
$ npm install @valencyhq/vanilla @valencyhq/react --save
```

## Table of Contents

- [Basic Usage](#basic-usage)
     - [Component Usage](#components-usage)
     - [Hooks Usage](#hooks-usage)
- [Live Examples](#live-examples)
- [API Reference](#api-reference)
     - [`valency.get()`](#valencygetfn)
     - [`valency.get() shorthand properties`](#valencygetshorthandpropsfn)
     - [`valency.replace()`](#valencyreplacefn)
     - [`valency.getConfig()`](#valencygetconfigfn)
- [Contributing](#contributing)
- [License](#license)

## <span id="basic-usage">🪄 Basic Usage</span>

### <span id="components-usage">1. 🧱 Components Usage</span>

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

### <span id="hooks-usage">2. 🪝 Hooks Usage</span>

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
                  <ExampleHooksUsage />
            </ValencyContext.Provider>
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

**Props**

- `foo` - Something something.
- `bar` - _Optional_ Something something. Defaults to `null`.

**Example**

```jsx
```

## <span id="contributing">👨‍🔧 Contributing</span>

For more info on how to contribute please see the [contribution guidelines](./CONTRIBUTING.md).

## <span id="license">🧾 License</span>

React-valency is licensed under the [MIT License](https://github.com/ValencyHQ/react/blob/master/LICENSE).

[build-image]: https://img.shields.io/github/workflow/status/ValencyHQ/react/CI?style=flat-square
[codecov-image]: https://img.shields.io/codecov/c/github/ValencyHQ/react.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/ValencyHQ/react
[npmv-image]: https://img.shields.io/npm/v/ValencyHQ/react.svg?style=flat-square
[npmv-url]: https://www.npmjs.com/package/ValencyHQ/react
[npmd-image]: https://img.shields.io/npm/dm/ValencyHQ/react.svg?style=flat-square
[npmd-url]: https://www.npmjs.com/package/ValencyHQ/react

# `@sequencemedia/eslint-config-typescript`

TypeScript style Flat Config for ESLint `v9`

Based on [Love](https://github.com/mightyiam/eslint-config-love)

## Install

```shell
npm i -D @sequencemedia/eslint-config-typescript
```

## Use

In your `eslint.config.*` either:

```javascript
export { default } from '@sequencemedia/eslint-config-typescript'
```

Or:

```javascript
import { configs } from '@sequencemedia/eslint-config-typescript'

export default [
  configs.recommended
]
```

You can merge _changes_ in the default configuration using the `merge` utility:

```javascript
import merge from '@sequencemedia/eslint-config-typescript/merge'

export default merge({
  files: [
    '**/*.{mjs,cjs}'
  ],
  ignores: [
    'lib'
  ]
})
```

Which is _equivalent to_:

```javascript
import { configs } from '@sequencemedia/eslint-config-typescript'

export default [
  {
    ...configs.recommended,
    files: [
      '**/*.{mts,cts}'
    ],
    ignores: [
      'lib'
    ]
  }
]
```

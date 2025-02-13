import { antfu } from '@antfu/eslint-config'

export default antfu({
  rules: {
    'ts/no-empty-object-type': 'off',
    'no-alert': 'off',
  },
})

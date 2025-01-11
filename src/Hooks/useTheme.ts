import useLocalStorageState from 'use-local-storage-state'
import usePrefersColorScheme from 'use-prefers-color-scheme'

export enum Theme {
  'dark',
  'light',
}

export const useTheme = () => {
  const prefersColorScheme = usePrefersColorScheme()

  return useLocalStorageState<Theme>('theme', {
    defaultValue: prefersColorScheme === 'light' ? Theme.light : Theme.dark,
  })
}

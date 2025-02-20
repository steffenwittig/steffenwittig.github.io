import { useLocalStorage } from '@uidotdev/usehooks'
import usePrefersColorScheme from 'use-prefers-color-scheme'

export enum Theme {
  'dark',
  'light',
}

export const useTheme = () => {
  const prefersColorScheme = usePrefersColorScheme()

  return useLocalStorage<Theme>('theme', prefersColorScheme === 'light' ? Theme.light : Theme.dark)
}

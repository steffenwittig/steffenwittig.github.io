import { useLocation } from 'react-router-dom'

export const useArtmode = () => {
  const location = useLocation()
  return location.pathname.startsWith('/art')
}

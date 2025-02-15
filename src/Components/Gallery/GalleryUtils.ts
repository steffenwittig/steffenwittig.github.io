import { GalleryEntry, GalleryImageProps } from './Gallery'

// TODO: move hostname to env var
const baseUrl = 'https://p.steffenwittig.com/comics/'

export type ComicEntry = {
  title: string
  description?: string | React.JSX.Element
  year: number
  month: number
  day: number
  folderFileName: string
  panels?: number
  fileSuffix?: string
}

function buildUrl(comic: ComicEntry, filename: string) {
  const dateString = `${comic.year}-${comic.month.toString().padStart(2, '0')}-${comic.day.toString().padStart(2, '0')}`
  const folder = `${comic.year}/${dateString}-${comic.folderFileName}`

  return new URL(`${baseUrl}${folder}/${comic.folderFileName}-${filename}`)
}

export const comicToPortfolioEntry = (comic: ComicEntry): GalleryEntry => {
  const suffix = comic.fileSuffix || 'jpg'

  const files: GalleryImageProps[] = [
    { url: buildUrl(comic, `full.${suffix}`), caption: `${comic.title} Full Page Composition` },
  ]

  if (comic.panels) {
    files.unshift(
      ...Array.from({ length: comic.panels }, (_, i) => {
        return {
          url: buildUrl(comic, `p${i + 1}.${suffix}`),
          caption: `${comic.title} Panel #${i + 1}`,
        }
      })
    )
  }

  return {
    id: comic.folderFileName,
    title: comic.title,
    description: comic.description,
    images: files,
    thumbnail: buildUrl(comic, `thumb.webp`),
  }
}

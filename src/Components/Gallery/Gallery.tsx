import { GridAlt } from '@styled-icons/boxicons-regular'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { TitleTag } from 'types'
import styles from './Gallery.module.scss'

export type GalleryImageProps = {
  url: URL
  caption: string
}

export type GalleryEntry = {
  id: string
  title: string
  description?: string | React.JSX.Element
  images: GalleryImageProps[]
  thumbnail: URL
}

type GalleryEntryProps = GalleryEntry & {
  titleTag?: TitleTag
}

const BackButton = ({ isVisible }: { isVisible: boolean }) => {
  const navigate = useNavigate()

  return (
    <button className={styles.closeButton} onClick={() => navigate('')} tabIndex={isVisible ? 0 : -1}>
      <div className={styles.icon}>
        <GridAlt />
      </div>
      <div>Show all</div>
    </button>
  )
}

const GalleryImage = ({ caption, url }: GalleryImageProps) => {
  return (
    <div>
      <img src={url.toString()} alt={caption} />
      <p>{caption}</p>
    </div>
  )
}

const EntryButton = ({ id, title, thumbnail, isVisible }: GalleryEntry & { isVisible: boolean }) => {
  const { hash } = useLocation()

  return (
    <Link
      className={styles.entry}
      to={`#${id}`}
      aria-expanded={hash === id}
      aria-controls={`${id}_detailView`}
      tabIndex={isVisible ? 0 : -1}
    >
      <img className={styles.thumb} src={thumbnail.toString()} alt={title} />
      <div className={styles.title}>{title}</div>
    </Link>
  )
}

const EntryDetail = ({ id, title, description, images: imageUrls, titleTag: Title = 'h3' }: GalleryEntryProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [renderMedia, setRenderMedia] = useState<boolean>(false)
  const { hash } = useLocation()

  useEffect(() => {
    const hashIsId = hash === `#${id}`

    setIsVisible(hashIsId)
    if (hashIsId && !renderMedia) {
      // media is placed in DOM after EntryDetail became visible once and stays in the DOM afterwards
      setRenderMedia(true)
    }
  }, [id, renderMedia, hash, setIsVisible])

  return (
    <div className={styles.toggleWrapper} data-visible={isVisible}>
      <div className={styles.toggleInner}>
        <div className={styles.detailView}>
          <BackButton isVisible={isVisible} />
          <div className={styles.content}>
            <Title>{title}</Title>
            <div>{description}</div>
            <div className={styles.media}>
              {renderMedia && imageUrls.map((image) => <GalleryImage url={image.url} caption={image.caption} />)}
            </div>
          </div>
          <BackButton isVisible={isVisible} />
        </div>
      </div>
    </div>
  )
}

export const Gallery = ({ entries }: { entries: GalleryEntry[] }) => {
  const { hash } = useLocation()

  return (
    <div className={styles.toggleWrapper} data-visible={!hash}>
      <div className={styles.toggleInner}>
        <div className={styles.grid}>
          {entries.map((entry) => (
            <EntryButton {...entry} key={entry.id} isVisible={!hash} />
          ))}
        </div>
      </div>
      <div className={styles.detailPanel}>
        {entries.map((entry) => (
          <EntryDetail {...entry} key={entry.id} />
        ))}
      </div>
    </div>
  )
}

import { FAQ } from 'Components/FAQ/FAQ'
import { ImageButton } from 'Components/ImageButton/ImageButton'

import instaBackground from 'Assets/Portfolio/Thumbnails/Art/insta_thumb_bg.gif'
import emofaniBackground from 'Assets/Portfolio/Thumbnails/Tech/emofani_preview.jpg'
import { Page } from 'Components/Page'
import styles from './Homepage.module.scss'

import items from './HomepageFaq'

export const HomePage = () => {
  return (
    <Page>
      <h1>Welcome to our portfolios!</h1>
      <hr />
      <p>Which Steffen Wittig are you interested in?</p>
      <div className={styles.grid}>
        <ImageButton to="tech" title="Steffen Wittig" subtitle="The software engineer" image={emofaniBackground} />
        <ImageButton to="art" title="NotSteffenWittig" subtitle="The artist" image={instaBackground} />
      </div>
      <hr />
      <h2>Frequently asked questions</h2>
      <FAQ questionTag="h3" items={items} />
    </Page>
  )
}

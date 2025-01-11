import { FAQ } from 'Components/FAQ/FAQ'
import { ImageButton } from 'Components/ImageButton/ImageButton'

import notsteffenwittig from 'Assets/Home/notsteffenwittig.webp'
import steffenwittig from 'Assets/Home/steffenwittig.webp'
import { ReactComponent as ArtLogo } from 'Assets/logo_notsteffenwittig.svg'
import { Page } from 'Components/Page'
import styles from './Homepage.module.scss'

import items from './HomepageFaq'

export const HomePage = () => {
  return (
    <Page>
      <h2>Welcome to our portfolios!</h2>
      <hr />
      <p>Which Steffen Wittig are you interested in?</p>
      <div className={styles.grid}>
        <ImageButton to="tech" title="Steffen Wittig" subtitle="The software engineer" image={steffenwittig} />
        <ImageButton
          to="art"
          title={<ArtLogo className={styles.logo} title="NotSteffenWittig" />}
          subtitle="The artist"
          image={notsteffenwittig}
        />
      </div>
      <hr />
      <h2>Frequently asked questions</h2>
      <FAQ questionTag="h3" items={items} />
    </Page>
  )
}

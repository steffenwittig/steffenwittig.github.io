import { Portfolio, PortfolioCardProps } from 'Components/Portfolio/Portfolio'

import { Instagram, Youtube } from '@styled-icons/boxicons-logos'
import instaBackground from 'Assets/Portfolio/Thumbnails/Art/insta_thumb_bg.gif'
import ytBackground from 'Assets/Portfolio/Thumbnails/Art/yt_thumb_bg.gif'
import { Page } from 'Components/Page'

const links: PortfolioCardProps[] = [
  {
    title: 'NotSteffenWittig on Cara',
    description: 'My Portfolio on Cara',
    linkTitle: 'Take me to Cara',
    linkUrl: 'https://cara.app/steffenwittig',
  },
  {
    title: 'NotSteffenWittig on Instagram',
    description: 'Fresh art and other random posts.',
    linkTitle: 'Take me to Instagram',
    linkUrl: 'https://instagram.com/NotSteffenWittig',
    icon: <Instagram />,
    backgroundImage: instaBackground,
  },
  {
    title: 'NotSteffenWittig on YouTube',
    description: 'Short animations and art showcases.',
    linkTitle: 'Watch videos on YouTube',
    linkUrl: 'https://www.youtube.com/@NotSteffenWittig',
    icon: <Youtube />,
    backgroundImage: ytBackground,
  },
]

export const ArtPortfolioPage = () => {
  return (
    <Page>
      <h2>Steffen Wittig the Artist</h2>
      <hr />
      <p>
        Welcome to my portfolio! It is currently under construction but you can browse my work on the following
        platforms:
      </p>
      <Portfolio items={links} />
    </Page>
  )
}

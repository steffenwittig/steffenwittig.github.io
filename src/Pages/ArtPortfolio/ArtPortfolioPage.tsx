import { PortfolioCard, PortfolioCardProps } from 'Components/PortfolioCard/PortfolioCard'

import { Instagram, Youtube } from '@styled-icons/boxicons-logos'
import instaBackground from 'Assets/Portfolio/Thumbnails/Art/insta_thumb_bg.gif'
import ytBackground from 'Assets/Portfolio/Thumbnails/Art/yt_thumb_bg.gif'
import { Page } from 'Components/Page'

const links: PortfolioCardProps[] = [
  {
    title: 'NotSteffenWittig on Instagram',
    description: 'This is currently the main channel for my art until this portfolio app is finished.',
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
      <h1>Steffen Wittig the Artist</h1>
      <p>
        Welcome to my portfolio! It is currently under construction but you can browse my work on the following
        platforms:
      </p>
      {links.map((link) => (
        <PortfolioCard {...link} key={link.title} />
      ))}
    </Page>
  )
}

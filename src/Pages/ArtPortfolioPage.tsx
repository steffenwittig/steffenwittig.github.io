import { Link } from 'react-router-dom'
import { PortfolioCard, PortfolioCardProps } from '../Components/PortfolioCard/PortfolioCard'

import { ReactComponent as InstaThumb } from './../Assets/Icons/Brands/insta.svg'
import { ReactComponent as YtThumb } from './../Assets/Icons/Brands/yt.svg'

import instaBackground from './../Assets/Thumbnails/insta_thumb_bg.gif'
import ytBackground from './../Assets/Thumbnails/yt_thumb_bg.gif'

const links: PortfolioCardProps[] = [
  {
    title: 'NotSteffenWittig on Instagram',
    description: 'This is currently the main channel for my art until this portfolio app is finished.',
    linkTitle: 'Take me to Instagram',
    linkUrl: 'https://instagram.com/NotSteffenWittig',
    icon: <InstaThumb />,
    backgroundImage: instaBackground,
  },
  {
    title: 'NotSteffenWittig on YouTube',
    description: 'Short animations and art showcases.',
    linkTitle: 'Watch videos on YouTube',
    linkUrl: 'https://www.youtube.com/@NotSteffenWittig',
    icon: <YtThumb />,
    backgroundImage: ytBackground,
  },
]

export const ArtPortfolioPage = () => {
  return (
    <>
      <p>
        <Link to="/">back</Link>
      </p>
      <h1>Steffen Wittig the Artist</h1>
      <p>
        Welcome to my portfolio! It is currently under construction but you can browse my work on the following
        platforms:
      </p>
      {links.map((link) => (
        <PortfolioCard {...link} />
      ))}
    </>
  )
}

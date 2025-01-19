import { Youtube } from '@styled-icons/boxicons-logos'
import ytBackground from 'Assets/Portfolio/Thumbnails/Art/yt_thumb_bg.gif'
import { Page } from 'Components/Page'
import { Portfolio, PortfolioCardProps } from 'Components/Portfolio/Portfolio'
import { comics2024 } from './Comics/2024/comics2024'

const galleries: PortfolioCardProps[] = [
  {
    title: 'NotSteffenWittig Comics 2024',
    description: 'All Comics released in 2024',
    linkTitle: 'View Comics 2024',
    linkPath: '/art/comics/2024',
    backgroundImage: comics2024[1].thumbnail.toString(),
  },
]

const links: PortfolioCardProps[] = [
  {
    title: 'NotSteffenWittig on YouTube',
    description: 'Short animations and art showcases.',
    linkTitle: 'Watch videos on YouTube',
    linkUrl: 'https://www.youtube.com/@NotSteffenWittig',
    icon: <Youtube />,
    backgroundImage: ytBackground,
  },
  {
    title: 'NotSteffenWittig on Cara',
    description:
      "My portfolio on Cara. It's very incomplete because I only started posting there in 2024, and uploading older works isn't super fun, to be honest...",
    linkTitle: 'Visit Cara',
    linkUrl: 'https://cara.app/steffenwittig',
  },
  {
    title: 'NotSteffenWittig on Instagram',
    description:
      'I used Instagram extensively from 2020-2024 to publish my comics and art. Unfortunately, browsing Instagram requires an Instagram account.',
    linkTitle: 'Visit Instagram',
    linkUrl: 'https://instagram.com/NotSteffenWittig',
  },
]

export const ArtPortfolioPage = () => {
  return (
    <Page>
      <h2>Steffen Wittig the Artist</h2>
      <p>
        Welcome to my portfolio! It's not quite finished yet, but I have already prepared a gallery of my comic work
        from 2024.
      </p>
      <h3>Galleries</h3>
      <Portfolio items={galleries} />
      <hr />
      <p>
        I am still working on getting older comics, illustrations, and 3D artworks uploaded here, as well as new ones.
        Preparing the material for optimal display in these custom-made galleries takes time.
      </p>
      <p>In the meantime, please follow these external links for more material.</p>
      <h3>External Links</h3>
      <Portfolio items={links} />
    </Page>
  )
}

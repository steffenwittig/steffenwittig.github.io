import { PortfolioCard, IPortfolioCardProps } from 'Components/PortfolioCard/PortfolioCard'

import emofaniBackground from 'Assets/Portfolio/Thumbnails/Tech/emofani_thumb.jpg'

const links: IPortfolioCardProps[] = [
  {
    title: 'Emofani',
    description: (
      <>
        <p>Emotion Model based Face Animation</p>
        <p>A project I've worked on as part of my Bachelor's Thesis</p>
      </>
    ),
    linkTitle: 'View on GitHub',
    linkUrl: 'https://github.com/steffenwittig/emofani',
    backgroundImage: emofaniBackground,
  },
]

export const TechPortfolioPage = () => {
  return (
    <>
      <h1>Steffen Wittig the Software Engineer</h1>
      <p>Let me introduce you to some public software projects that I've worked on over the years.</p>
      {links.map((link) => (
        <PortfolioCard {...link} key={link.title} />
      ))}
    </>
  )
}

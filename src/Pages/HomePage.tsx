import { PortfolioCard, PortfolioCardProps } from '../Components/PortfolioCard'

const links: PortfolioCardProps[] = [
  {
    title: 'NotSteffenWittig on Instagram',
    description:
      'This is currently the main channel for my art until this portfolio app is finished.',
    linkTitle: 'Take me to Instagram',
    linkUrl: 'https://instagram.com/NotSteffenWittig',
    imageUrl: 'https://placehold.jp/000000/ffffff/150x150.jpg?text=Placeholder',
  },
  {
    title: 'NotSteffenWittig on YouTube',
    description: 'Short animations and art showcases.',
    linkTitle: 'Watch videos on YouTube',
    linkUrl: 'https://www.youtube.com/@NotSteffenWittig',
    imageUrl: 'https://placehold.jp/000000/ffffff/150x150.jpg?text=Placeholder',
  },
]

export const HomePage = () => {
  return (
    <>
      <h1>Steffen Wittig's Portfolio</h1>
      <p>
        Welcome to my portfolio! It is currently under construction. Check out
        my work on the following platforms for now.
      </p>
      {links.map((link) => (
        <PortfolioCard {...link} />
      ))}
    </>
  )
}

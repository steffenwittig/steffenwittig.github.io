import { Portfolio, PortfolioCardProps } from 'Components/Portfolio/Portfolio'

import emofaniPreview from 'Assets/Portfolio/Thumbnails/Tech/emofani_preview.jpg'
import portfolioPreview from 'Assets/Portfolio/Thumbnails/Tech/portfolio_preview.webp'
import { Page } from 'Components/Page'

const links: PortfolioCardProps[] = [
  {
    title: 'Emofani',
    description: (
      <>
        <p>Emofani stands for "Emotion Model based Face Animation"</p>
        <p>
          It was a project that I've worked on as part of my Bachelor's Thesis around 2016. If you want to learn more,
          please have a look at the GitHub project.
        </p>
        <p>
          I stopped updating the project in 2020 however, so it can only be built using an ancient version of the Unity
          engine.
        </p>
      </>
    ),
    linkTitle: 'View Code on GitHub',
    linkUrl: 'https://github.com/steffenwittig/emofani',
    backgroundImage: emofaniPreview,
  },
  {
    title: 'My Portfolio',
    description: (
      <>
        <p>
          Some time ago I decided I needed a portfolio that does exactly what I need. Not more, not less. So I started
          working on the little single page application that you are currently viewing.
        </p>
      </>
    ),
    linkTitle: 'View Code on GitHub',
    linkUrl: 'https://github.com/steffenwittig/steffenwittig.github.io',
    backgroundImage: portfolioPreview,
  },
  {
    title: 'Depri-Horst for Android and iOS',
    description: (
      <>
        <p>
          Cult-Classic video game based on a comic by NotSteffenWittig about a German mailman that has to deliver
          letters to mailboxes, skateboarding kids and deranged rats while collecting deposit bottles and avoiding
          mental breakdowns.
        </p>
        <p>
          At the moment the game is not available in any app stores, because I had to abandon it. It was created with
          the Unity Game Engine in 2014 and all textures, 3D models, animations and sound effects (and of course all
          components of the game's logic) were self-made over the course of over a year as a self-imposed challenge to
          not use any external assets (beyond some Google Play Store plugins).
        </p>
      </>
    ),
    linkTitle: 'View Trailer on YouTube',
    linkUrl: 'https://www.youtube.com/watch?v=6wG_ZKciCEc',
  },
  {
    title: 'ResearchGate Profile',
    description: (
      <>
        During my Bachelor's studies I published some interesting articles about human-computer interaction. Have a
        look!
      </>
    ),
    linkTitle: 'Visit ResearchGate',
    linkUrl: 'https://www.researchgate.net/profile/Steffen-Wittig',
  },
]

export const TechPortfolioPage = () => {
  return (
    <Page>
      <h2>Steffen Wittig the Software Engineer</h2>
      <p>Let me introduce you to some public software projects that I've worked on over the years.</p>
      <p>
        There's of course many more secret non-public projects... you can ask me about them privately by chatting with
        my 100% self-implemented{' '}
        <a href="javascript:void(0)" onClick={() => alert('Not ready, yet.')}>
          chat bot
        </a>
        .{' '}
        <small>
          <small>
            <small>(TODO: 100% self-implement chat bot)</small>
          </small>
        </small>
      </p>
      <Portfolio items={links} />
    </Page>
  )
}

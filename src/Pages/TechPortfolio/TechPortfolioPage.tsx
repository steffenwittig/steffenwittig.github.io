import emofaniPreview from 'Assets/Portfolio/Thumbnails/Tech/emofani_preview.jpg'
import portfolioPreview from 'Assets/Portfolio/Thumbnails/Tech/portfolio_preview.webp'
import { Button } from 'Components/Button/Button'
import { Page } from 'Components/Page'
import { Portfolio, PortfolioCardProps } from 'Components/Portfolio/Portfolio'

const links: PortfolioCardProps[] = [
  {
    title: 'Emofani',
    description: (
      <>
        <p>
          Emofani stands for "<strong>E</strong>motion <strong>Mo</strong>del based <strong>F</strong>acial{' '}
          <strong>Ani</strong>mation"
        </p>
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
        <p>Cool Features:</p>
        <ul>
          <li>
            In the top right corner, there is a little face. You can click it to toggle the light/dark theme of the
            website. By default it will use the theme, that your system/browser is using. Why is it a face and not the
            usual full or half-filled brightness-icons? Well, it is simple. You see: I wanted you to click it to see how
            amazing both themes look.
          </li>
          <li>
            I wanted to implement all components myself and use as little external dependencies as possible as a
            contract to the work I do on a daily basis for my employer. You see, re-inventing the wheel isn't very
            economical, so doing this kind of (fun) stuff is really rare for me otherwise. But this is my own project
            and I can be as wasteful with my free time, as I want!
          </li>
        </ul>
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
        <Button title="Start the chat bot" variant="link" onClick={() => alert('Not ready, yet.')}>
          chat bot
        </Button>
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

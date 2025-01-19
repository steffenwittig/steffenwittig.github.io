import { ComicEntry, comicToPortfolioEntry } from 'Components/Gallery/GalleryUtils'

const comics: ComicEntry[] = [
  {
    title: 'A.I. World',
    description: <p>What do you mean, "dystopian"?</p>,
    year: 2024,
    month: 1,
    day: 31,
    folderFileName: 'ai-world',
    panels: 6,
  },
  {
    title: 'Tinned Food',
    description: <p>It's tasty!</p>,
    year: 2024,
    month: 3,
    day: 10,
    folderFileName: 'tinned-food',
    panels: 4,
  },
  {
    title: 'Balding',
    description: <p>Where does the hair go?</p>,
    year: 2024,
    month: 6,
    day: 4,
    folderFileName: 'balding',
    panels: 4,
  },
  {
    title: 'Pants Assassin',
    description: <p>Where do the pants go?</p>,
    year: 2024,
    month: 7,
    day: 19,
    folderFileName: 'pants-assassin',
    panels: 4,
  },
  {
    title: 'Famous Mom',
    description: <p>Totally not autobiographical.</p>,
    year: 2024,
    month: 7,
    day: 30,
    folderFileName: 'famous-mom',
    panels: 3,
  },
  {
    title: "What's Wrong?",
    description: <p>More anti-AI propaganda</p>,
    year: 2024,
    month: 8,
    day: 4,
    folderFileName: 'whats-wrong',
    panels: 4,
  },
  {
    title: 'Stardew Valley 4k',
    description: <p>A little joke for the Stardew Valley community</p>,
    year: 2024,
    month: 8,
    day: 12,
    folderFileName: 'stardew-4k',
    fileSuffix: 'webp',
    panels: 4,
  },
  {
    title: 'Shocking News',
    description: <p>Cool beans.</p>,
    year: 2024,
    month: 9,
    day: 22,
    folderFileName: 'shocking-news',
    fileSuffix: 'webp',
    panels: 4,
  },
  {
    title: 'Relatable Comic',
    description: <p>Anti-pants propaganda.</p>,
    year: 2024,
    month: 10,
    day: 13,
    folderFileName: 'relatable-comic',
    panels: 4,
  },
  {
    title: 'What Do People Think?',
    description: <p>People come and people go, but mostly go.</p>,
    year: 2024,
    month: 10,
    day: 16,
    folderFileName: 'what-do-people-think',
    panels: 4,
  },
  {
    title: 'Geman Language',
    description: <p>Sprechen Sie Deutsch?</p>,
    year: 2024,
    month: 10,
    day: 24,
    folderFileName: 'german-language',
    panels: 5,
  },
  {
    title: 'POV: You Are You',
    description: <p>Why are you like that?</p>,
    year: 2024,
    month: 10,
    day: 29,
    folderFileName: 'pov-you-are-you',
    panels: 2,
  },
  {
    title: 'Stolen Idea',
    description: <p>There is nothing left to invent.</p>,
    year: 2024,
    month: 11,
    day: 19,
    folderFileName: 'stolen-idea',
    panels: 6,
  },
  {
    title: 'Monetize',
    description: <p>FÜN</p>,
    year: 2024,
    month: 11,
    day: 21,
    folderFileName: 'monetize',
    panels: 2,
  },
  {
    title: 'Sicko',
    description: <p>How dare he?</p>,
    year: 2024,
    month: 11,
    day: 23,
    folderFileName: 'sicko',
    panels: 2,
  },
  {
    title: 'What Style?',
    description: <p>Let me know what you think in the comments... oh wait, there's no comment functionality here.</p>,
    year: 2024,
    month: 11,
    day: 30,
    folderFileName: 'what-style',
    panels: 4,
  },
  {
    title: 'Doing the dishes',
    description: <p>In German we say "tja" to situations like these.</p>,
    year: 2024,
    month: 12,
    day: 17,
    folderFileName: 'doing-the-dishes',
    panels: 4,
  },
]

export const comics2024 = comics.map(comicToPortfolioEntry)

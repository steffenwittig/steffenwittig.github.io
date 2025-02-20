import { Emotion } from './EMoCFace'

type Reaction = {
  text: string
  options: Option[]
}

export type Option = {
  action?: () => void
  condition?: () => boolean
  emotionChange?: Emotion
  reactionId: string
  text: string
}

type DialogueTree = {
  [key: string]: Reaction
}

const defaultOptions: Option[] = [
  {
    text: "I don't need help from anybody!",
    reactionId: 'happyEnd',
  },
  {
    action: () => {
      localStorage.setItem('cookieState', '1')
      setTimeout(() => {
        document.querySelector('[data-cookie-notice]')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    },
    condition: () => localStorage.getItem('cookieState') === '0',
    text: 'Can you please show the cookie notification again?',
    reactionId: 'showCookies',
  },
  {
    text: 'Eat my shorts!',
    reactionId: 'sadEnd',
  },
]

export const tree: DialogueTree = {
  intro: {
    text: "Hello, my name is EmoCBot. I am the amalgamation of the two Steffen Wittigs' brains. How can I help you?",
    options: defaultOptions,
  },
  anythingElse: {
    text: 'Anything else?',
    options: defaultOptions,
  },
  showCookies: {
    text: 'There you go. It should be visible at the bottom again.',
    options: [
      {
        text: 'Cool! Thanks.',
        reactionId: 'anythingElse',
      },
    ],
  },
  happyEnd: {
    text: 'Sure buddy.',
    options: [
      {
        text: 'Can we pretend this talk never happened?',
        reactionId: 'intro',
      },
    ],
  },
  sadEnd: {
    text: "I... I didn't expect it to end like this...",
    options: [
      {
        text: 'I am ready for a new beginning, though.',
        reactionId: 'intro',
      },
    ],
  },
}

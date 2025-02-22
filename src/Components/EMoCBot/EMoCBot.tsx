import { MinusCircle } from '@styled-icons/boxicons-regular'
import { useLocalStorage } from '@uidotdev/usehooks'
import { Button } from 'Components/Button/Button'
import { useEffect, useRef, useState } from 'react'
import styles from './EMoCBot.module.scss'
import { Option, tree } from './EMoCBotDialogue'
import { EmoCBotMessage, EmoCBotMessageProps, EmoCBotMessageSender } from './EMoCBotMessage'
import { EMoCFace, EmoCFaceProps } from './EMoCFace'

const DEFAULT_TREE_ID = 'intro'
const MAX_LOG_LENGTH = 8

function getValidOptions(options: Option[]) {
  return options.filter((option) => !option.condition || option.condition())
}

export const EMoCBot = () => {
  const [messages, setMessages] = useLocalStorage<EmoCBotMessageProps[]>('bot.messages', [
    { id: DEFAULT_TREE_ID, sender: EmoCBotMessageSender.Bot, text: tree[DEFAULT_TREE_ID].text },
  ])
  const [dialogueId, setDialogueId] = useLocalStorage<string>('bot.dialogueId', DEFAULT_TREE_ID)
  const [isExpanded, setIsExpanded] = useLocalStorage<boolean>('bot.isExpanded', false)
  const [options, setOptions] = useState<Option[]>(getValidOptions(tree[dialogueId].options))
  const headerArea = useRef<HTMLDivElement>(null)
  const [bottomSpace, setBottomSpace] = useState<number>(0)

  const onOptionSelect = (option: Option) => {
    setOptions([])

    const newMessageUser = {
      id: 'user' + Date.now().toString(),
      sender: EmoCBotMessageSender.User,
      text: option.text,
    }
    const nextId = option.reactionId
    const next = tree[nextId]

    if (option.action) {
      option.action()
    }

    const delay = 1000 + Math.random() * 2000

    const newMessageBot: EmoCBotMessageProps = {
      id: 'bot' + Date.now().toString(),
      sender: EmoCBotMessageSender.Bot,
      text: next.text,
      delay,
    }

    setMessages((prevMessages) => {
      const newMessages = [
        ...prevMessages.map((message) => {
          return { ...message, delay: 0 }
        }),
        newMessageUser,
        newMessageBot,
      ]
      while (newMessages.length > MAX_LOG_LENGTH) {
        newMessages.shift()
      }
      return newMessages
    })

    setDialogueId(nextId)

    setTimeout(() => {
      setOptions(getValidOptions(next.options))
    }, delay)
  }

  useEffect(() => {
    if (headerArea.current && headerArea.current.clientHeight) {
      setBottomSpace(headerArea.current?.clientHeight)
    }
  }, [headerArea])

  const faceProps: EmoCFaceProps = {
    arousal: 0,
    valence: 0,
    gazeX: 0,
    gazeY: 0,
  }

  return (
    <>
      <div className={styles.outer} data-is-expanded={isExpanded}>
        <div className={styles.headerArea} ref={headerArea}>
          <EMoCFace {...faceProps} />
          <div className={styles.title}>EmoCBot</div>
          <Button variant="link" title={'Close'} onClick={() => setIsExpanded(!isExpanded)} aria-expanded={isExpanded}>
            <MinusCircle className={styles.toggle} />
          </Button>
        </div>
        <div className={styles.messageArea}>
          {messages.map((m) => (
            <EmoCBotMessage {...m} key={m.id} />
          ))}
        </div>
        <div className={styles.inputArea}>
          {options.map((o) => (
            <Button title={o.text} onClick={() => onOptionSelect(o)} variant="border" key={o.text + o.reactionId} />
          ))}
        </div>
      </div>
      <div className={styles.bottomSpace} style={{ height: bottomSpace }}></div>
    </>
  )
}

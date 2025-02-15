import { useEffect, useRef, useState } from 'react'
import styles from './EMoCBot.module.scss'

export enum EmoCBotMessageSender {
  User,
  Bot,
}

export type EmoCBotMessageProps = {
  id: string
  sender: EmoCBotMessageSender
  text: string
}

export const EmoCBotMessage = ({ sender, text, id }: EmoCBotMessageProps) => {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false)
  const elem = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!hasScrolled) {
      if (elem.current) {
        elem.current.scrollIntoView({ behavior: 'smooth' })
      }
      setHasScrolled(true)
    }
  }, [hasScrolled, setHasScrolled])

  return (
    <div
      className={sender === EmoCBotMessageSender.User ? styles.messageFromUser : styles.messageFromBot}
      data-message-id={id}
      ref={elem}
    >
      {hasScrolled}
      {text}
    </div>
  )
}

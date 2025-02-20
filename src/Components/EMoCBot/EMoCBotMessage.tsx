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
  delay?: number
}

export const EmoCBotMessage = ({ sender, text, id, delay }: EmoCBotMessageProps) => {
  const [hasInitialized, setHasInitialized] = useState<boolean>(false)
  const [isThinking, setIsThinking] = useState<boolean>(delay !== undefined && delay > 0)
  const elem = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!hasInitialized && !isThinking) {
      if (elem.current) {
        elem.current.scrollIntoView({ behavior: 'smooth' })
      }
      setHasInitialized(true)
    }
  }, [isThinking, hasInitialized, setHasInitialized])

  useEffect(() => {
    if (delay) {
      const timer = setTimeout(() => {
        setIsThinking(false)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <div
      className={sender === EmoCBotMessageSender.User ? styles.messageFromUser : styles.messageFromBot}
      data-message-id={id}
      ref={elem}
    >
      {isThinking ? <span>...</span> : text}
    </div>
  )
}

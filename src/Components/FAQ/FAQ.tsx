import { ChevronDown } from '@styled-icons/boxicons-regular'
import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './FAQ.module.scss'

type QuestionTagType = 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type FaqItem = {
  question: string
  answer: JSX.Element
  questionTag?: QuestionTagType
}

export const FAQ = ({ items, questionTag }: { items: FaqItem[]; questionTag?: QuestionTagType }) => {
  return (
    <>
      {items.map((item) => (
        <FaqElement {...item} questionTag={questionTag} key={item.question} />
      ))}
    </>
  )
}

export const FaqElement = ({ question, answer, questionTag: Question = 'span' }: FaqItem) => {
  const [expanded, setExpanded] = useState<boolean>(false)
  const body = useRef<HTMLDivElement>(null)
  const content = useRef<HTMLDivElement>(null)
  const indicator = useRef<SVGSVGElement>(null)

  const updateBodyHeight = useCallback(() => {
    if (body.current) {
      body.current.style.height = expanded ? content.current?.clientHeight.toString() + 'px' : '0'
      body.current.style.marginTop = expanded ? '' : '0'
    }
    if (indicator.current) {
      indicator.current.style.rotate = `${expanded ? '180' : '0'}deg`
    }
  }, [expanded])

  useEffect(() => {
    updateBodyHeight()
  }, [expanded, updateBodyHeight])

  return (
    <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className={styles.outer}>
      <a className={styles.header} onClick={() => setExpanded(!expanded)}>
        <div itemProp="name" className={styles.question}>
          <Question>{question}</Question>
        </div>
        <div className={styles.icon}>
          <ChevronDown ref={indicator} />
        </div>
      </a>
      <div className={styles.answer} ref={body}>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" ref={content}>
          <div itemProp="text">{answer}</div>
        </div>
      </div>
    </div>
  )
}

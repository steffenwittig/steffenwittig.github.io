import { ChevronDown } from '@styled-icons/boxicons-regular'
import { useCallback, useEffect, useRef, useState } from 'react'
import { TextTag } from 'types'
import styles from './FAQ.module.scss'

export type FaqItem = {
  id: string
  question: string
  answer: React.JSX.Element
  questionTag?: TextTag
}

export const FAQ = ({ items, questionTag }: { items: FaqItem[]; questionTag?: TextTag }) => {
  return (
    <>
      {items.map((item) => (
        <FaqElement {...item} questionTag={questionTag} key={item.question} />
      ))}
    </>
  )
}

export const FaqElement = ({ id, question, answer, questionTag: Question = 'span' }: FaqItem) => {
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
      <Question>
        <button
          className={styles.header}
          onClick={() => setExpanded(!expanded)}
          tabIndex={0}
          id={id}
          aria-expanded={expanded}
        >
          <div itemProp="name" className={styles.question}>
            {question}
          </div>
          <div className={styles.icon}>
            <ChevronDown ref={indicator} />
          </div>
        </button>
      </Question>
      <div className={styles.answer} ref={body}>
        <div
          itemScope
          itemProp="acceptedAnswer"
          itemType="https://schema.org/Answer"
          ref={content}
          role="region"
          aria-labelledby={id}
        >
          <div itemProp="text">{answer}</div>
        </div>
      </div>
    </div>
  )
}

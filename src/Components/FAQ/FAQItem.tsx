import { ChevronDown } from '@styled-icons/boxicons-regular'
import { Icon } from 'Components/Icon/Icon'
import { ElementType, useCallback, useEffect, useRef, useState } from 'react'
import styles from './FAQItem.module.scss'

export interface IFAQItemProps {
  question: string
  answer: JSX.Element
  headingTag?: ElementType
}

export const FAQItem = ({ question, answer, headingTag: QuestionTag = 'div' }: IFAQItemProps) => {
  const [expanded, setExpanded] = useState<boolean>(false)
  const body = useRef<HTMLDivElement>(null)
  const content = useRef<HTMLDivElement>(null)
  const indicator = useRef<HTMLDivElement>(null)

  const updateBodyHeight = useCallback(() => {
    if (body.current) {
      body.current.style.height = expanded ? content.current?.clientHeight.toString() + 'px' : '0'
    }
    if (indicator.current) {
      indicator.current.style.rotate = `${expanded ? '180' : '0'}deg`
    }
  }, [expanded])

  useEffect(() => {
    updateBodyHeight()
  }, [expanded, updateBodyHeight])

  return (
    <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <div className={styles.faqHeader} onClick={() => setExpanded(!expanded)}>
        <QuestionTag itemProp="name" className={styles.faqHeaderText}>
          {question}
        </QuestionTag>
        <Icon className={styles.icon} icon={<ChevronDown />} ref={indicator} />
      </div>
      <div className={styles.faqBody} ref={body}>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" ref={content}>
          <div itemProp="text">{answer}</div>
        </div>
      </div>
    </div>
  )
}

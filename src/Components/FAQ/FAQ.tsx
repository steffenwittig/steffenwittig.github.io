import { ElementType } from 'react'
import { FAQItem, IFAQItemProps } from './FAQItem'

type IFAQProps = {
  items: IFAQItemProps[]
  headingTag?: ElementType
}

export const FAQ = ({ items, headingTag }: IFAQProps) => {
  return (
    <>
      {items.map((item) => (
        <FAQItem {...item} headingTag={headingTag} key={item.question} />
      ))}
    </>
  )
}

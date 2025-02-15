import styles from './EMoCBot.module.scss'

type Point2D = {
  x: number
  y: number
}

type MouthProps = Point2D & {
  width: number
  curveHeight: number
}

export type Emotion = {
  arousal: number
  valence: number
}

export type EmoCFaceProps = Emotion & {
  gazeX: number
  gazeY: number
}

const Eye = ({ x, y }: Point2D) => {
  return <circle cx={x} cy={y} r={1.5} fill="black" />
}

const Mouth = ({ x, y, width, curveHeight }: MouthProps) => {
  const leftEdge: Point2D = { x: x - width / 2, y: y }
  const rightEdge: Point2D = { x: x + width / 2, y: y }
  const center: Point2D = { x: x, y: y + curveHeight }

  const path = `M ${leftEdge.x} ${leftEdge.y} Q ${center.x} ${center.y}, ${rightEdge.x} ${rightEdge.y}`

  return <path d={path} stroke="black" strokeWidth="2" fill="transparent" />
}

export const EMoCFace = ({ arousal, valence, gazeX, gazeY }: EmoCFaceProps) => {
  // TODO: interpret EmoCFaceProps to change eyes and mouth
  // https://motion.dev/docs/react-quick-start ?

  return (
    <svg width="64" height="64" viewBox="0 0 64 64" className={styles.face}>
      <Eye x={16} y={30} />
      <Eye x={48} y={30} />
      <Mouth x={32} y={40} width={32} curveHeight={10} />
    </svg>
  )
}

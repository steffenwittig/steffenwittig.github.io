import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <>
      <h1>Steffen Wittig's Portfolio</h1>
      <p>Welcome to my portfolio! What are you interested in?</p>
      <div className="grid">
        <Link to="art" role="button">
          Steffen Wittig the artist
        </Link>
        <Link to="tech" role="button" className="secondary">
          Steffen Wittig the software engineer
        </Link>
      </div>
    </>
  )
}

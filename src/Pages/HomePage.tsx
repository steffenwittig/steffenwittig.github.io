import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <>
      <h1>Steffen Wittig's Portfolio</h1>
      <p>Welcome to my portfolio! What are you interested in?</p>
      <div className="grid">
        <Link to="art-portfolio" role="button">
          Steffen Wittig the artist
        </Link>
        <Link to="tech-portfolio" role="button" className="secondary">
          Steffen Wittig the developer
        </Link>
      </div>
    </>
  )
}

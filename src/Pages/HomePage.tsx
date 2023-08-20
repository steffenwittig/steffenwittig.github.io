import { FAQ } from 'Components/FAQ/FAQ'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <>
      <h1>Welcome to our portfolios!</h1>
      <p>Which Steffen Wittig are you interested in?</p>
      <div className="grid">
        <Link to="tech" role="button">
          Steffen Wittig the software engineer
        </Link>
        <Link to="art" role="button" className="secondary">
          NotSteffenWittig (the artist)
        </Link>
      </div>
      <h2>Frequently asked questions</h2>
      <FAQ
        headingTag="h3"
        items={[
          {
            question: 'There are two Steffen Wittigs?',
            answer: (
              <>
                According to a quick Google search there are even more Steffen Wittigs! However, this page is home to
                the portfolios of the artist and software engineer Steffen Wittigs.
              </>
            ),
          },
          {
            question: 'This page contains two portfolios? ',
            answer: (
              <>
                <p>It is a long story...</p>
                <p>
                  Basically the artist and the software engineer Steffen Wittigs had a legal battle about who the real
                  Steffen Wittig is.
                </p>
                <p>
                  It started when the Software Engineer Steffen Wittig somehow gained access to the Artist Steffen
                  Wittig's YouTube channel and started posting tech videos instead of cartoons.
                </p>
                <p>
                  This confused many of its 9 subscribers. Then the same thing happened on the steffenwittig.com domain.
                  The situation was complicated and a legal battle ensued that went on for years. In the end the judge
                  ordered both Steffen Wittigs to share the YouTube channel and create a separate but at the same time
                  combined portfolio page. Madness!
                </p>
              </>
            ),
          },
          {
            question: 'Who is NotSteffenWittig and is he Steffen Wittig or not?',
            answer: (
              <>
                <p>
                  The NotSteffenWittig is a very mysterious figure that nobody really understands. Little is known about
                  his origins and whereabouts. The first traces of him on the internet are in a German comic anthology
                  so we can assume he is German.
                </p>
                <p>
                  Apparently the "Not" in his pseudonym does not refer to the english word "not", but to the German word
                  "Not", meaning "necessity".
                </p>
                <p>
                  The necessity for the name change is unclear however. Some say that it is supposed to be a statement
                  against artists using pseudonyms out of fear that e.g. possible future employers will easily find
                  their weird art online (so Steffen Wittig the artist uses a pseudonym that still contains his real
                  name). Others say it is just Steffen Wittig's brand of humor to confuse people.
                </p>
              </>
            ),
          },
        ]}
      />
    </>
  )
}

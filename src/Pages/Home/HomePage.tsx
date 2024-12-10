import { FAQ } from 'Components/FAQ/FAQ'
import { ImageButton } from 'Components/ImageButton/ImageButton'

import instaBackground from 'Assets/Portfolio/Thumbnails/Art/insta_thumb_bg.gif'
import emofaniBackground from 'Assets/Portfolio/Thumbnails/Tech/emofani_preview.jpg'

export const HomePage = () => {
  return (
    <>
      <h1>Welcome to our portfolios!</h1>
      <p>Which Steffen Wittig are you interested in?</p>
      <div className="grid">
        <ImageButton to="tech" title="Steffen Wittig" subtitle="The software engineer" image={emofaniBackground} />
        <ImageButton to="art" title="NotSteffenWittig" subtitle="The artist" image={instaBackground} />
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
                  The situation was complicated and a legal battle ensued that went on for years. Details are not known
                  but in the end a judge ordered both Steffen Wittigs to share the YouTube channel and create a separate
                  but at the same time combined portfolio page. Both parties consider this madness but have to deal with
                  it.
                </p>
              </>
            ),
          },
          {
            question: 'Who is NotSteffenWittig and is he Steffen Wittig or not?',
            answer: (
              <>
                <p>
                  NotSteffenWittig is a very mysterious figure that nobody really understands. They seem to create
                  outsider art but little is known about their origins and whereabouts. First traces on the web lead to
                  a German comic anthology so we can assume they are German.
                </p>
                <p>
                  Apparently the "Not" in NotSteffenWittig does not refer to the english word "not" but to the German
                  word "Not" meaning "necessity".
                </p>
                <p>
                  The exact nature of what necessitated adding Not in front of SteffenWittig is unclear however. Some
                  say that it is supposed to be a statement against artists using pseudonyms to separate their weird
                  personal art from their professional persona (in case being an artist is not their full time job).
                  This is supposed to make it harder for HR professionals that consider hiring the artist to find their
                  art online and be scared by its contents. In this theory NotSteffenWittig is a pseudonym that still
                  contains the whole real name (if it actually is their real name, which is still up for debate) and
                  effectively obfuscates nothing. Others say it is just NotSteffenWittig's brand of humor to confuse
                  people.
                </p>
              </>
            ),
          },
        ]}
      />
    </>
  )
}

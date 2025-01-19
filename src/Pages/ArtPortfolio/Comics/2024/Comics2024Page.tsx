import { LeftArrowAlt } from '@styled-icons/boxicons-regular'
import { Button } from 'Components/Button/Button'
import { Gallery } from 'Components/Gallery/Gallery'
import { Page } from 'Components/Page'
import { comics2024 } from './comics2024'

export const Comics2024Page = () => {
  return (
    <Page>
      <Button to="/art" title={'Back to Art Portfolio'} icon={<LeftArrowAlt />} variant="link">
        Back to art portfolio
      </Button>
      <hr />
      <h2>NotSteffenWittig Comics of 2024</h2>
      <p>
        In 2024, my productivity surged once more after a period of reduced comic output in 2022. This resurgence was
        largely due to upgrading my equipment to better facilitate spontaneous drawing sessions.
      </p>
      <p>
        For over a decade, I relied on various drawing screens tethered to a stationary PC for my digital artwork, which
        confined me to my desk — a setup I grew increasingly weary of in recent years. However, in 2024, I made a
        significant transition to an iPad Pro (following a brief experiment with a Samsung S6 Lite).
      </p>
      <hr />
      <Gallery entries={comics2024} />
    </Page>
  )
}

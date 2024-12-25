import { Page } from 'Components/Page'
import { Link } from 'react-router-dom'

export const ImpressPage = () => {
  return (
    <Page>
      <h1>Impress / Impressum (German)</h1>
      <p>Angaben gemäß § 5 des Telemediengesetzes​</p>
      <h2>Name des Anbieters</h2>
      <p>
        Steffen Wittig
        <br />
        Im Siek 6
        <br />
        37191 Katlenburg-Lindau
        <br />
        Germany
      </p>
      <h2>Kontaktdaten</h2>
      <p>
        E-Mail: <a href="mailto:info@steffenwittig.com">info@steffenwittig.com</a>
      </p>
      <p>
        Internetseite: <a href="https://steffenwittig.github.io">https://steffenwittig.github.io</a>
      </p>
      <h2>Datenschutz</h2>
      <p>
        Datenschutzhinweise finden Sie <Link to="/data-privacy">hier</Link>.
      </p>
    </Page>
  )
}

import { Page } from 'Components/Page'
import { Link } from 'react-router-dom'

export const ImpressPage = () => {
  return (
    <Page>
      <h2>Impress / Impressum (German)</h2>
      <p>Angaben gemäß § 5 des Telemediengesetzes​</p>
      <h3>Name des Anbieters</h3>
      <p>
        Steffen Wittig
        <br />
        Im Siek 6
        <br />
        37191 Katlenburg-Lindau
        <br />
        Germany
      </p>
      <h3>Kontaktdaten</h3>
      <p>
        E-Mail: <a href="mailto:info@steffenwittig.com">info@steffenwittig.com</a>
      </p>
      <p>
        Internetseite: <a href="https://steffenwittig.github.io">https://steffenwittig.github.io</a>
      </p>
      <h3>Datenschutz</h3>
      <p>
        Datenschutzhinweise finden Sie <Link to="/data-privacy">hier</Link>.
      </p>
    </Page>
  )
}

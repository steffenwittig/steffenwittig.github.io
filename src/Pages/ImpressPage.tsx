import { Link } from 'react-router-dom'

export const ImpressPage = () => {
  return (
    <>
      <p>
        <Link to="/">back</Link>
      </p>
      <h1>Impress / Impressum (German)</h1>
      <p>Angaben gemäß § 5 des Telemediengesetzes​</p>
      <h2>Name des Anbieters</h2>
      <p>
        Steffen Wittig
        <br />
        Postfach XXXXX
        <br />
        Germany
      </p>
      <h2>Kontaktdaten</h2>
      <p>
        E-Mail: <a href="mailto:info@steffenwittig.com">info@steffenwittig.com</a>
      </p>
      <p>Internetseite: https://steffenwittig.com</p>
      <h2>Datenschutz</h2>
      <p>
        Datenschutzhinweise finden Sie <Link to="/data-privacy">hier</Link>.
      </p>
    </>
  )
}

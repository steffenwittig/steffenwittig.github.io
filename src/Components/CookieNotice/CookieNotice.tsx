import { Button } from 'Components/Button/Button'
import { useEffect, useState } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import styles from './CookieNotice.module.scss'

enum CookieNoticeState {
  HIDDEN,
  INITIAL,
  WHY,
  WANTCOOKIE,
}

const Elements = () => {
  const [state, setState] = useState<CookieNoticeState>()
  const [storedState, setStoredState] = useLocalStorageState<CookieNoticeState>('cookieState', {
    defaultValue: CookieNoticeState.INITIAL,
  })

  function hideAndSave(): void {
    // we only want to save if the banner was hidden, not the "inbetween" states
    // (they might be confusing when revisiting)
    setState(CookieNoticeState.HIDDEN)
    setStoredState(CookieNoticeState.HIDDEN)
  }

  useEffect(() => {
    const storedState = localStorage.getItem('cookieState')
    if (storedState) {
      setState(Number(storedState))
    }
  }, [storedState])

  switch (state) {
    case CookieNoticeState.INITIAL:
      return (
        <div className={styles.notice}>
          <p>No Cookies here. Happy browsing!</p>
          <div className={styles.buttons}>
            <Button onClick={hideAndSave} title="Nice!" />
            <Button onClick={() => setState(CookieNoticeState.WHY)} variant="border" title="Why not?" />
          </div>
        </div>
      )
    case CookieNoticeState.WHY:
      return (
        <div className={styles.notice}>
          <p>I am just a simple webapp without a backend and all that jazz. So I don't need cookies to function. 😊</p>
          <div className={styles.buttons}>
            <Button onClick={() => hideAndSave} title="Oh alright. Thanks!" />
            <Button
              onClick={() => setState(CookieNoticeState.WANTCOOKIE)}
              variant="border"
              title="But I want a cookie!"
            />
          </div>
        </div>
      )
    case CookieNoticeState.WANTCOOKIE:
      return (
        <div className={styles.notice}>
          <p>Please pick up your Cookie then.</p>
          <div className={styles.buttons}>
            <Button to="/cookie-dimension" title="🍪" onClick={hideAndSave} variant="border"></Button>
          </div>
        </div>
      )
  }

  return <></>
}

export const CookieNotice = () => {
  return (
    <div className={styles.outer}>
      <Elements />
    </div>
  )
}

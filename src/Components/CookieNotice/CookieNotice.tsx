import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './CookieNotice.module.scss'
import useLocalStorageState from 'use-local-storage-state'

enum CookieNoticeState {
  HIDDEN,
  INITIAL,
  WHY,
  WANTCOOKIE,
}

export const CookieNotice = () => {
  const [state, setState] = useState<CookieNoticeState>()
  const [storedState, setStoredState] = useLocalStorageState<CookieNoticeState>('cookieState', {
    defaultValue: CookieNoticeState.INITIAL,
  })

  function hideAndSave(): void {
    // we only want to save if the banner was hidden, not the "special" states
    // (might be confusing when revisiting)
    setState(CookieNoticeState.HIDDEN)
    setStoredState(CookieNoticeState.HIDDEN)
  }

  useEffect(() => {
    const storedState = localStorage.getItem('cookieState')
    if (storedState !== undefined) {
      setState(Number(storedState))
    }
  }, [storedState])

  switch (state) {
    case CookieNoticeState.INITIAL:
      return (
        <div className={styles.cookieNotice}>
          <p>No Cookies here. Happy browsing!</p>
          <div className="grid">
            <button onClick={hideAndSave}>Nice!</button>
            <button onClick={() => setState(CookieNoticeState.WHY)} className="secondary">
              Why not?
            </button>
          </div>
        </div>
      )
    case CookieNoticeState.WHY:
      return (
        <div className={styles.cookieNotice}>
          <p>I am just a simple webapp without a backend and all that jazz. So I don't need cookies to function. 😊</p>
          <div className="grid">
            <button onClick={() => hideAndSave}>Oh alright. Thanks!</button>
            <button onClick={() => setState(CookieNoticeState.WANTCOOKIE)} className="secondary">
              But I want a cookie!
            </button>
          </div>
        </div>
      )
    case CookieNoticeState.WANTCOOKIE:
      return (
        <div className={styles.cookieNotice}>
          <p>Please pick up your Cookie then.</p>
          <div className="grid">
            <Link to="/cookie-dimension" role="button" title="You asked for a cookie..." onClick={hideAndSave}>
              🍪
            </Link>
          </div>
        </div>
      )
    default:
      return <></>
  }
}

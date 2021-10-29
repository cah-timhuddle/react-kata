import { ReactElement } from 'react'
import './header.css'
import logo from './medical-pill-outline.svg'

export function Header (): ReactElement {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <span className="App-title">Medication list</span>
    </header>
  )
}

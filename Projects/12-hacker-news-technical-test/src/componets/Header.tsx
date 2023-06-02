import { header, link } from '../styles/Header.css'

export function Header () {
  return (
    <nav className={header}>
      <img className='' src='../../src/assets/logo.gif' alt='Logo' />
      <a className={link} href='/'>Hacker News </a>
    </nav>
  )
}

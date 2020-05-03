import styles from './layout.module.css'
import Container from '../Container'

export default function Layout({ children }) {
  return (
    <div>
      <Container>
        <header className={styles.header}>
          <div className={styles.avatar}>
            <a href='/'>
              <img src={'/images/nima.jpg'} alt="Nima Gardideh" />
            </a>
            <ul>
              <li><h1>Nima Gardideh</h1></li>
              <li><a href="/">Find Me</a></li>
              <li><a href="/principles">My Principles</a></li>
              <li><a href="http://medium.com/@ngardideh" rel="noopener" target="_blank">Blog</a></li>
            </ul>
          </div>
        </header>
      </Container>

      {children}
    </div>
  )
}

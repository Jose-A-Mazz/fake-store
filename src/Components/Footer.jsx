import React from 'react'
import styles from "./Footer.module.css"
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-main-section"]}>
      <h2>New Century Stores</h2>
      <p>
        Our collections are sourced from renowned manufacturers across the globe.
        We strive to provide you with products that will boost your image, as well as your productivity, and that incorporate world-class standards
      </p>
      </div>
      
      <div className={styles["footer-nav-section"]}>
        <nav className={styles["nav-list-1"]}>
          <h3>Content</h3>
          <ul>
            <li><Link>About us</Link></li>
            <li><Link>Shipping Policy</Link></li>
            <li><Link>30-Day Policy</Link></li>
            <li><Link>Where to Find us</Link></li>
          </ul>
        </nav>
        </div>
        <nav className={styles["nav-list-2"]}>
          <ul>
            <li><Link>Fequently Asked Questions</Link></li>
            <li><Link>Social Media</Link></li>
            <li><Link>Work for us</Link></li>
            <li><Link>New Century Stores in the News</Link></li>
          </ul>
        </nav>
    </footer>
  )
}

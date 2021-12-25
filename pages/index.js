import React, { useEffect } from 'react'
import Link from 'next/link'
import styles from "../styles/Home.module.css"

export default function Home() {

  useEffect(() => document.title = "Ninja | Home")

  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>

      <p className={styles.text}>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </p>

      <Link href="/ninjas">
        <a className={styles.btn}>
          See Ninja Listing
        </a>
      </Link>
    </div>
  )
}
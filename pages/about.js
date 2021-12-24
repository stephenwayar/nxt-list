import React, {useEffect} from "react"
import styles from "../styles/Home.module.css"

export default function About() {

  useEffect(() => document.title = "Ninja | About")

  return (
    <div>
      <h1 className={styles.title}>About Page</h1>

      <p className={styles.text}>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  )
}
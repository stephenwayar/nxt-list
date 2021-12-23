import HTMLHeadElement from '../src/components/htmlHeadElement/htmlHeadElement.component'
import styles from '../styles/Home.module.css'
import NavBar from '../src/components/navBar/navBar.component'
import Footer from '../src/components/footer/footer.component'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <HTMLHeadElement />

      <NavBar />

      <h1>Homepage</h1>

      <p>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
      </p>

      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>

      <Footer />
    </div>
  )
}
import React from "react";
import Link from "next/link";
import ninjaLogo from "../../../public/nnja.png"
import Image from "next/image";

const NavBar = () => {
  return(
    <nav>
      <div className="logo">
        <Image 
          src={ninjaLogo} 
          alt="ninja logo" 
          width="128px" 
          height="80 px"
        />
      </div>

      <Link href="/"><a>Home</a></Link>

      <Link href="/about"><a>About</a></Link>

      <Link href="/ninjas"><a>Ninja-Listing</a></Link>
    </nav>
  )
}
export default NavBar
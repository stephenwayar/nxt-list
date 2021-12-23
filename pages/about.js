import React from "react";
import NavBar from "../src/components/navBar/navBar.component";
import HTMLHeadElement from "../src/components/htmlHeadElement/htmlHeadElement.component";

export default function About() {
  return (
    <div>
      <HTMLHeadElement />
      <h1>About Page</h1>
      <NavBar />
    </div>
  )
}
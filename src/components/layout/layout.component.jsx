import React from "react";
import NavBar from "../navBar/navBar.component";
// import HTMLHeadElement from "../htmlHeadElement/htmlHeadElement.component";
import Footer from "../footer/footer.component";

export function Layout({children}){
  return(
    <div className="content">
      {/* <HTMLHeadElement /> */}

      <NavBar />

      {children}

      <Footer />
    </div>
  )
}
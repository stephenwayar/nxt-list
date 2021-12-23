import React from 'react';
import NavBar from '../../src/components/navBar/navBar.component';
import HTMLHeadElement from '../../src/components/htmlHeadElement/htmlHeadElement.component';

function Ninjas() {
  return (
    <div>
      <HTMLHeadElement />
      <h1>All Ninjas</h1>
      <NavBar />
    </div>
  );
}

export default Ninjas;
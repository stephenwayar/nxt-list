import axios from 'axios';
import React from 'react';

export const getStaticProps = async () => {

  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  )

  const data = await res.json()

  return{
    props:{
      ninjas: data
    }
  }
}


function Ninjas({ninjas}) {

  return (
    <div>
      <h1>All Ninjas</h1>
      
      {ninjas.map(ninja => {
        return(
          <div key={ninja.id}>
            <a className=''>
              <h3>{ninja.name}</h3>
            </a>
          </div>  
        )
      })}
    </div>
  );
}
export default Ninjas;
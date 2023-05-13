import React from 'react';

interface Boton {
name: string
scrollToTop: any
}




export default function Boton({name, scrollToTop}: Boton) {



return(
   <button onClick={scrollToTop}>
    {name}
   </button>
  )
}
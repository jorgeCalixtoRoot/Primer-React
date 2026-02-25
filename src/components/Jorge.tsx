import React from 'react'

const Jorge = () => {
    // Datos personales
    const nombre:string = 'Jorge'
    const edad:number = 29
    interface stack {
        frontend: string[];
        backend: string[];
        db: string;
    }
    const newStack : stack = {frontend: ['Html','Css','Js','Ract'], backend: ['Node', 'Express'], db:'MongoDB'}
  return (
    <>
     <div>Me llamo {nombre}, tengo {edad} años, estoy estudiando en CEI. Como front-end: {newStack.frontend}, como back-end: {newStack.backend} y la DB que usamos es {newStack.db}</div>
    </>
  )
}

export default Jorge
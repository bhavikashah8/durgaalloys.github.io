import React from "react"
import "../Products/Products.css"
import "../Materials/Materials.css"
import Card from "./Card"

const Materials = () => {
  return (
    <>
      <section className='Products Materials' id='materials'>
        <div className='container top'>
          <div className='heading text-center'>
            
            <h1>CAST MATERIALS</h1>
          </div>

          <div className='content grid'>
            
            <Card/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Materials

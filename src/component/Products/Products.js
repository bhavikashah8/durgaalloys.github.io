import React from "react"
import "./Products.css"
import Card from "./Card"

const Products = () => {
  return (
    <>
      <section className='Products top' id='products'>
        <div className='container'>
          <div className='heading text-center '>
            <h1>PRODUCTS</h1>
          </div>

          <div className='content grids'>
            <Card></Card>
          

            
          </div>
        </div>
      </section>
    </>
  )
}

export default Products

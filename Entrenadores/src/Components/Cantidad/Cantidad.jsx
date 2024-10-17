

const ItemCount = ( {contador, resta, suma} )  => {
 
   return (
      <div className='detalle-prod'>
      <div className='cantidades'>
         <button onClick={suma}>+</button>
         <p>{contador}</p>
         <button onClick={resta}>-</button>
      </div>
      </div>

   )
}

export default ItemCount
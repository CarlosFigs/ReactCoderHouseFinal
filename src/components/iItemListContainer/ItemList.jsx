// componente que recibe los productos y los mapea, para que se vayan creando tarjetas
// Y se muestra en la seccion de las tarjetas
import Item from './Item'
const itemList = ({ products }) => {
  return (
    <div className='productContainer'>
      {
        products.map((product) => (
          <Item product={product} key={product.id} />
        ))
      }
    </div>
  )
}

export default itemList
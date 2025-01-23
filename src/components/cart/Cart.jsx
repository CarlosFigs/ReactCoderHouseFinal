import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import "./cart.css";

const Cart = () => {
  const { cart, totalPrice, deleteProducts, deleteAllProducts } = useContext(CartContext);

  // Evaluación anticipada: mostrar mensaje si el carrito está vacío
  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <EmptyCart />
      </div>
    );
  }

  return (
    <div>
      <div className="cart">
        <h2>Productos:</h2>
        <ul className="cart-items">
          {cart.map((productCard) => (
            <li key={productCard.id} className="cart-item">
              <div className="item-info">
                <img src={productCard.img} alt={productCard.name} className="item-image" />
                <div>
                  <p className="item-name">{productCard.name}</p>
                  <p className="item-price">Precio: ${productCard.price}</p>
                  <p className="item-quantity">Cantidad: {productCard.quantity}</p>
                </div>
              </div>
              <button
                className="delete-button"
                onClick={() => deleteProducts(productCard.id, productCard.name)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="bottom-cart">
      <h3 className="total-price">Precio total: ${totalPrice()}</h3>
      <button className="delete-all-button" onClick={deleteAllProducts}>
        Eliminar todo
      </button>
      <Link className="checkout-button" to="/checkout">
        Continuar con mi compra
      </Link>
      </div>
    </div>
  );
};

export default Cart;

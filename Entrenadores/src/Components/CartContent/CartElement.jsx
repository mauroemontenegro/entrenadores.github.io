import { useContext, useState } from "react";
import { dataContext } from "../../Context/DataContext";
import "../CartContent/CartContent.css";

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";

const CartElement = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago("TEST-1c849d11-4f23-42c9-a7df-7e9eb53d7d8c", {
    locale: "es-AR",
  });

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/create_preference",
        {
          title: `${cart.map((prod , index)=>{
            prod.title
          })}`,
          quantity: 1,
          price: `${priceTotal()}`,
        });
      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async ()=>{
    const id= await createPreference();
    if(id){
      setPreferenceId(id);
    };
  };

  const { cart, deleteProd, priceTotal,} = useContext(dataContext);
  return (
    <div className="modal-container">
      <div className="modal-header">
        <h3 className="carrito">CARRITO DE COMPRAS</h3>
      </div>

      {cart.map((prod, index) => (
        <div key={index} className="modal-content">
          <img src={prod.img} alt="" />
          <h3>{prod.title}</h3>
          {/* <p className="precio">Precio: ${prod.price.toLocaleString()}</p> */}
          <p className="cantidad-final">Cantidad: {prod.contador}</p>
          <p className="precio-cantidad">
            Subtotal: ${(prod.price * prod.contador).toLocaleString()}
          </p>
          <button
            className="eliminar-boton"
            onClick={() => deleteProd(prod.id)}
          >
            X
          </button>
        </div>
      ))}
      {cart.length > 0 ? (
        <>
          <h3 className="precioTotal">Total: ${priceTotal().toLocaleString()}</h3>
          <div className="finalizar">
            <button onClick={handleBuy} className="btn-fin">FINALIZAR COMPRA</button>
            {preferenceId &&
            <Wallet
            initialization={{ preferenceId: preferenceId }} />
          }
          </div>
        </>
      ) : (
        <h3 className="carritoVa">CARRITO DE COMPRAS VACIO :(</h3>
      )}
    </div>
  );
};

export default CartElement;

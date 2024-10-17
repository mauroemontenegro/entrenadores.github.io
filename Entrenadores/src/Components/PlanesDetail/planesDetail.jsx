import { useContext, useState } from "react";
import "./planesDetail.css";
import { dataContext } from "../../Context/DataContext";
import ItemCount from "../Cantidad/Cantidad";

import Products from "../Products/Products";
import ColumProducts from "../ColumProducts.jsx/ColumProducts";
import visa from "../../imagenes/medios de pago/visa.png";
import diners from "../../imagenes/medios de pago/diners.png";
import mastercard from "../../imagenes/medios de pago/mastercard.png";
import amex from "../../imagenes/medios de pago/amex.png";

const PlanesDetail = ({ selectedPlan }) => {
  const { cart, setCart, agregarCarrito, data } = useContext(dataContext);

  const buyProducts = (selectedPlan) => {
    console.log(selectedPlan);
    setCart([...cart, selectedPlan]);
  };

  const [contador, setContador] = useState(1);
  const suma = () => {
    setContador(contador + 1);
  };

  const resta = () => {
    contador > 1 && setContador(contador - 1);
  };
  const categoriaSeleccionada = selectedPlan.category;
  console.log("Categoría seleccionada:", categoriaSeleccionada);
  // console.log("Productos relacionados:", productosRelacionados);
  return (
    <main>
      <h2 className="dt-pd">DETALLES DEL PLAN</h2>
      <div className="content">
        <div className="img-detalle">
          <img src={selectedPlan.img} alt="" />
        </div>
        <div className="detalle">
          <div className="dt1">
            <h3>{selectedPlan.title}</h3>
            <p className="productos-precio">
              <span>${selectedPlan.price.toLocaleString()}</span>
            </p>
            <h4>Medios de pago</h4>
            <div className="medioPago">
              <img src={visa} alt="" />
              <img src={diners} alt="" />
              <img src={mastercard} alt="" />
              <img src={amex} alt="" />
            </div>
            <h4>Compra protegida</h4>
            <h6>Tus datos cuidados durante toda la compra.</h6>
            <h4>Cambios y devoluciones</h4>
            <h6>Si no te gusta, podés cambiarlo por otro o devolverlo.</h6>
            <div className="cart">
              <ItemCount suma={suma} resta={resta} contador={contador} />
              <button
                onClick={() => agregarCarrito(selectedPlan, contador)}
                className="boton-cart"
              >
                AGREGAR AL CARRITO
              </button>
            </div>
          </div>
          <div className="dt2">
            <ul>
              <p className="desc">
                <span>Descripcion del producto:</span>
              </p>
              {selectedPlan.descripcion.map((item, index) => (
                <li key={index}>
                  <p>{item}</p>
                </li>
              ))}
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="cont-colum">
        <h4>PRODUCTOS RELACIONADOS</h4>
        <div className="colum">
          <ColumProducts categoriaSeleccionada={selectedPlan.category} />
        </div>
      </div>
    </main>
  );
};

export default PlanesDetail;

// modificar y hacerlo parecido al de tiendanube al detalle del producto |||
// modificar la seccion de relacionados, que cuando se seleccione el producto muestro los otros relacionados y no mostrar el que ya esta seleccionado |||

// hacer un footer
// hacer animaciones
// darle funcionalidad a los botones del inicio

// modificar seccon de carrito|||


import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = (props) => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    const [ali, setAli] = useState([]);

    useEffect(() => {
        axios("data.json").then((res) => setData(res.data))
    }, []);
    useEffect(() => {
      axios("alimentacion.json").then((res) => setAli(res.data))
  }, []);

    const agregarCarrito = (data, contador) => {
        const itemAgregado = { ...data, contador }
        const nuevoCarrito = [...cart];
        const integrado = nuevoCarrito.find((productos) => productos.id === itemAgregado.id)
    
        if (integrado) {
          integrado.contador += contador;
        } else {
          nuevoCarrito.push(itemAgregado);
        };
        setCart(nuevoCarrito)
        console.log(nuevoCarrito)
      }
    
      const cantidadCarrito = () => {
        return cart.reduce((acc, prod) => acc + prod.contador, 0);
      }
    
      const priceTotal = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.contador, 0)
      }
      const vaciarCarrito = () => {
        setCart([]);
      }
      const deleteProd = (id) => {
        const foundId = cart.find((element) => element.id === id);
    
        const newCart = cart.filter((element) => element !== foundId);
        setCart(newCart);
      };

    return (
        <dataContext.Provider value={{data,ali, setAli, cart, setCart, agregarCarrito, cantidadCarrito, priceTotal, vaciarCarrito, deleteProd}}>
            {props.children}
        </dataContext.Provider>
    );
};

export default DataProvider;

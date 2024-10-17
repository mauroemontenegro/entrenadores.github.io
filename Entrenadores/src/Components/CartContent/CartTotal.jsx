// import { useContext } from "react";
// import { dataContext } from "../../Context/DataContext";

// const CartTotal = () => {
//   const { cart } = useContext(dataContext);

//   const total = cart.reduce((acc, el) => {
//     acc + el.price, 0;
//   });
//   return <p className="precio-cantidad">Total: ${total}</p>
// };

// export default CartTotal;
import { useContext } from "react";
import { dataContext } from "../../Context/DataContext";

const CartTotal = () => {
  const { cart } = useContext(dataContext);

  const total = cart.reduce((acc, el) => {
    return acc + el.price;
  }, 0);

  return <p className="precioTotal">Total: ${total}</p>;
};

export default CartTotal;

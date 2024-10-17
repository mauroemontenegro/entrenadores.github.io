// import { useContext } from "react";
// import { dataContext } from "../../Context/DataContext";
// import PlanesList from "../PlanesList/planesList";

// const ColumProducts = () => {
//   const { data } = useContext(dataContext);


//   return data.map((products, index) => {
//     return <PlanesList key={index} products={products} />;
//   });
// };
// export default ColumProducts;
import React, { useContext } from "react";
import { dataContext } from "../../Context/DataContext";
import PlanesList from "../PlanesList/planesList";

const ColumProducts = ({ categoriaSeleccionada }) => {
  const { data, ali} = useContext(dataContext);

  const allProducts = [...data, ...ali];

  // Filtrar productos por categoría seleccionada
  const productosRelacionados = allProducts.filter(
    (product) => product.category === categoriaSeleccionada
  );
  
  // console.log("Productos relacionados:", productosRelacionados);

  return productosRelacionados.map((products, index) => {
    return <PlanesList key={index} products={products} />;
  });
};

export default ColumProducts;


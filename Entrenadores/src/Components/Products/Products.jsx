import { useContext } from "react";
import { dataContext } from "../../Context/DataContext";
import PlanesList from "../PlanesList/planesList";

const Products = () => {
  const { data } = useContext(dataContext);


  return data.map((products, index) => {
    return <PlanesList key={index} products={products} />;
  });
};
export default Products;

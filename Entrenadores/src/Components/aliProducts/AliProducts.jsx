import { useContext } from "react";
import { dataContext } from "../../Context/DataContext";
import PlanesList from "../PlanesList/planesList";

const AliProducts = () => {
  const { ali } = useContext(dataContext);


  return ali.map((products, index) => {
    return <PlanesList key={index} products={products} />;
  });
};
export default AliProducts;
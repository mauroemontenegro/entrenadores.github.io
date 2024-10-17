import { useContext } from "react";
import PlanesDetail from "../PlanesDetail/planesDetail";
import { useParams } from "react-router-dom";
import { dataContext } from "../../Context/DataContext";

const PlanesDetailContainer = () => {
  const { data, ali } = useContext(dataContext);
  const { itemId } = useParams();
  console.log(itemId);
  window.scrollTo(0, 0);

  // Find the selected plan based on itemId
  const allProducts = [...data, ...ali];
  const selectedPlan = allProducts.find((plan) => plan.id === parseInt(itemId));

  // console.log("Selected Plan:", selectedPlan);
  // console.log("Data:", data);
  // console.log("Ali:", ali);
  // console.log("Item ID:", itemId);

  return (
    <>
      {selectedPlan && <PlanesDetail selectedPlan={selectedPlan} />}
      {/* Ensure selectedPlan is not undefined before rendering */}
    </>
  );
};

export default PlanesDetailContainer;

import "../PlanesList/planesList.css";
import AliProducts from "../aliProducts/AliProducts";

const AliPlanes = () => {
  return (
    <>
        <div className="planes-title">
        <h2>GUIA DE ALIMENTACÓN</h2>
        </div>
      <div className="planes">
        <AliProducts />
      </div>
    </>
  );
};
export default AliPlanes;
import "../PlanesList/planesList.css";
import Products from "../Products/Products";

const Planes = () => {
  return (
    <>
      <div className="title">
        <div className="title-izq">
          <h2>Adquiri tu plan de entrenamiento</h2>
          <button>Planes disponibles</button>
        </div>
        <img
          src="https://acdn.mitiendanube.com/stores/003/905/675/products/c16cf1fe-3739-4879-b839-6fa2f8ef4c0c-58ce7835803940700717057777603624-1024-1024.webp"
          alt=""
        />
      </div>
      <div className="planes-title"  id="productos">
        <h2>RUTINAS DE ENTRENAMIENTO</h2>
      </div>
      <div className="planes">
        <Products />
      </div>
    </>
  );
};
export default Planes;

import img from "../../imagenes/alimentacion.webp";
import "../Alimentacion/alimentacion.css";
import AliProducts from "../aliProducts/AliProducts";

const Alimentacion = () => {
  return (
    <div className="alimentacion" id="alimentacion">
      <h2>LA ALIMENTACIÓN ES FUNDAMENTAL</h2>
      <div className="cont-text">
        <div className="text-1">
          <h3>
            Crear mayor consciencia sobre nuestra alimentacion son la clave para
            construir un estilo de vida saludable.
          </h3>
          <p>¡Estas guias podrían ayudarte!</p>
          <button>ver más</button>
        </div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};
export default Alimentacion;

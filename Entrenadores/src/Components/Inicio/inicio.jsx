import imagen from "../../imagenes/ftoperfil.webp";
import "./inicio.css";
const Inicio = () => {
  return (
    <>
      <div className="container">
        <div className="cont">
          <div className="descripcion">
            <h2>Te ayudo a convertirte en tu mejor version</h2>
            <h4>
              "Mi deseo es inspirarte a que lleves un estilo de vida saludable."
            </h4>
            <div className="boton">
              <button>Quiero un plan</button>
            </div>
          </div>
          <div className="perfil">
            <img src={imagen} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Inicio;

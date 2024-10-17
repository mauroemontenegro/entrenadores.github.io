// import './planesList.css'

import { Link } from "react-router-dom"
const PlanesList = ({ products }) => {
    return (
        <div className="productos">
            <img src={products.img} alt="" />
            <div className="producto-detalle">
                <h3 className="productos-titulo">{products.title}</h3>
                <p className="productos-precio">${products.price.toLocaleString()}</p>
                <Link to={`/planes/${products.id}`}>
                     <button className="productos-agregar">Ver más</button>
                </Link>
            </div>
        </div>
    )

}
export default PlanesList
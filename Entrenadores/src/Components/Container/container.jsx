import Alimentacion from "../Alimentacion/Alimentacion.jsx"
import Footer from "../Footer/Footer.jsx"
import Inicio from "../Inicio/inicio"
import Planes from "../Planes/planes"
import Seccion from "../Seccion2/seccion"
import AliPlanes from "../aliPlanes/AliPlanes.jsx"



const Container =()=>{
    return(
        <>
        <Inicio/>
        <Seccion/>
        <Planes/>
        <Alimentacion/>
        <AliPlanes/>
        <Footer/>
        </>
    )
}
export default Container
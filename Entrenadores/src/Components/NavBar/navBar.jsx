import { NavLink } from 'react-router-dom'
import './navBar.css'
import BurgerButton from '../BurgerButton/BurgerButton'
import { useState } from 'react'
import BgDiv from '../BgDiv/bgDiv'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = ()=>{
        setClick(!click)
    }
    return (
        <>
            <nav>
                <div className='logo'>
                    <h3>MILI RANIERI</h3>
                    <p>FITNES</p>
                </div>
                <div className={`navegacion ${click ? 'active' : ''}`}>
                    <ul>
                        <li><a onClick={handleClick} href="#container">Inicio</a></li>
                        <li><a onClick={handleClick} href="#productos">Planes</a></li>
                        <li><a onClick={handleClick} href="#alimentacion">Alimentacion</a></li>
                        <NavLink onClick={handleClick} to={'/cart'}><li className='carrito'>🛒</li></NavLink>
                    </ul>
                </div>
                    <div className='hamburguesa'>
                        <BurgerButton click={click} handleClick={handleClick} />
                    </div>
                    <div  className={`initial ${click ? 'active' : '' }`}>
                    <BgDiv/>
                    </div>
            </nav>
        </>
    )

}
export default Navbar
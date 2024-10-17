
import './App.css'
import Navbar from './Components/NavBar/navBar.jsx'
import Container from './Components/Container/container'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PlanesDetailContainer from './Components/PlanesDetailContainer/planesDetailContainer'
import DataProvider from './Context/DataContext.jsx'
import CartContent from './Components/CartContent/CartContent.jsx'


function App() {
    return (

        <DataProvider>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path='/cart' element={<CartContent/>}/>
                <Route exact path='/' element={<Container />} />
                <Route exact path='planes/:itemId' element={<PlanesDetailContainer />} />
            </Routes>
        </BrowserRouter>
        </DataProvider>

    )
}

export default App

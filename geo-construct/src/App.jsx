import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/home'
import ServicePage from './pages/servicePage/servicePage'
import About from './pages/about/about'
import Help from './pages/help/help'
import Documentation from './pages/documentation/documentation'
import AssamMap from './pages/assamMap/AssamMap'
import MapIframe from './components/MapIframe'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home/>} />
            <Route path='/services' element={<ServicePage/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/help' element={<Help/>} />
            <Route path='/documentation' element={<Documentation/>} />
            <Route path='/map' element={<Map/>} />
            <Route path='/1' element={<AssamMap/>} />
            <Route path='/2' element={<MapIframe/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

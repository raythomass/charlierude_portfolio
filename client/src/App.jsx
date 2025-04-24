import './App.css'
import { Navbar } from './components/Navbar'
import { BrowserRouter,Route, Routes, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { PhotosPage } from './pages/PhotosPage'
import { VideosPage } from './pages/VideosPage'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <div className='pages'>
        <Routes>
          <Route
            path='/'
            element= {<Home/>}
          />
          <Route
            path='/photos'
            element= {<PhotosPage/>}
          />
          <Route
            path='/videos'
            element= {<VideosPage/>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

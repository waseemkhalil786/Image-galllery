import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import img1 from './assets/img01.jpeg'
import img2 from './assets/img02.jpeg'
import img3 from './assets/img03.jpeg'
import img4 from './assets/img04.jpeg'
import img5 from './assets/img05.jpeg'
import img6 from './assets/img06.jpeg'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <h1 className='heading'>Image Gallery</h1>
    <div className="main-dev">
    <App title=" The Fortuner Legender is perfectly designed to handle both" img ={img1}/>
    <App title="The new Land Cruiser 300 2024 is vehicle that comes with a 6-cylinder engine" img ={img2} />
    <App title="The price of Honda Civic 2024 in Pakistan ranges from PKR 8,659,000" img ={img3}/>
    <App title="The price of Toyota Fortuner Legender in Pakistan is PKR 18,999,000" img ={img4} />
    <App title="This is a very cool car and beutiful enterior PKR 1.8 billions" img ={img5}/>
    <App title="The price of Toyota Fortuner Legender in Pakistan is PKR 18,999,000" img ={img6}/>
    </div>
  </StrictMode>,
)

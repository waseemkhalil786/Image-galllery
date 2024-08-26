import { useState } from 'react'
import img from './assets/img01.jpeg'

import './App.css'

function App(props) {
  const [count, setCount] = useState(0)

  return (
    <div className='card'>
      <img src={props.img} alt="" />
      <h3>{props.title}</h3>
    </div>
  )
}

export default App;

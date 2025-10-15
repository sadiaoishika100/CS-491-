import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter2 from './Counter2.jsx'
import Counter3 from './Counter3.jsx'
import AppAlert from './AppAlert.jsx';
import ToDoList from './ToDoList.jsx'
function App() {
  return(
    <div>
        <ToDoList/>
    <h1>
      Hello World 
    </h1>  
    <Counter2/>
    <h4>
      <Counter3/>
    </h4>
   <AppAlert/>
    </div>
  )
}

export default App 

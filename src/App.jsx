import { useState } from 'react' // helps manipulate variables
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Form from './Form'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <>
      <Counter />
      <Form />
    </>
  )
}



export default App

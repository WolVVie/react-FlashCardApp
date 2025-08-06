import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [cards, setCards] = useState([])

  const addCard = () => {
    setCards(previous => [...previous, previous.lenght])
  }

  return (
    <div className='app-container'>
      <div className="header">
        <button onClick={addCard} className='btn-addCard'>Add Card</button>
      </div>
      <div className="cards-container">
        {cards.map((id)=> (
          <Card key={id}/>
        ))}
      </div>
    </div>
  )
}

export default App

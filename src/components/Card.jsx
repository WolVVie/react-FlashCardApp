import React, { useState } from 'react'
import '../css/card.css'
import { GiReturnArrow } from "react-icons/gi";


function Card() {
    const [inputValue, setInputValue] = useState('')
    const [content, setContent] = useState()
    const [isFlipped, setIsFlipped] = useState(false)

    const [frontContent, setFrontContent] = useState('')
    const [backContent, setBackContent] = useState('')

    const addContent = () => {
        if (inputValue.trim() !== '') {
            if (isFlipped === false) {
                setFrontContent(inputValue)
                setInputValue('')
            } else {
                setBackContent(inputValue)
                setInputValue('')
            }
          
        }

    }

    const reset = () => {
        if (isFlipped === false) {
            setFrontContent('')
        } else {
            setBackContent('')
        }
    }

    const handleFlip = () => {
        setIsFlipped(!isFlipped)
    }

      return (
        <div className="card-wrapper">
            <div className="card-header">
                <button className='btn-card' onClick={handleFlip} id='flip'><GiReturnArrow /></button>
                <input
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                type="text"
                id='card-input'
                placeholder='Yazı yazın'
                />
                <button onClick={addContent} className='btn-card' id='add'>Add</button>
                <button onClick={reset} className='btn-card' id='reset'>Reset</button>
            </div>

            <div className={`card-container ${isFlipped ? 'flipped' : ''}`}>
                <div className="card">
                <div className="card-front">
                    {frontContent}
                </div>
                <div className="card-back">
                    {backContent}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Card

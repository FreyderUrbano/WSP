import React, { useState } from 'react'

export default function Components() {

    const [text, setText] = useState()
    const [update, setUpdate] = useState()

    const [magic, setMagic] = useState()
    const [newMagic, setNewMagic] = useState()

    const textOnChange = (event) => {
        setText(event.target.value)
    }

    const buttonOnClick = (event) => {
        setUpdate(text)
    }

    const magicWord = (event) => {
        setMagic(event.target.value)
    }

    const magicButton = (event) => {
        setNewMagic(magic)
    }

    return (
        <div>

            <input type='text' value={text} onChange={textOnChange} />
            <button onClick={buttonOnClick}>Actualizar</button>
            <p>Texto Antiguo: {text}</p>
            <p>Texto Nuevo: {update}</p>

            <input type='text' value={magic} onChange={magicWord} />
            <button onClick={magicButton}>MAGIC</button>
            <p>ME VES ....: {magic}</p>
            <p>AHORA NO .....: {newMagic}</p>

        </div>
    )
}

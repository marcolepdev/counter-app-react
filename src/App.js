import React from 'react'
import './index.css'

import colors from './datacolor'

function App(){
    const [count, setCount] = React.useState(0);
    const [backColor, setBackColor] = React.useState('');




    function addCount(){
        setCount(prevCount => prevCount + 1 )
    }
    function subtractCount(){
        setCount(prevCount => prevCount - 1 )
    }


    function reset(){
        setBackColor('grey');
        setCount(0)
    }
  




function changeColor(){
 
    const randomColor = Math.floor(Math.random() * colors.length)
    const randomBackgroundColor = colors[randomColor].backgroundColor
    console.log(randomBackgroundColor);

    setBackColor(randomBackgroundColor)
}


    return(
       <div className="general-container">
        <div style={{backgroundColor:backColor}} className="counter-container">
            <h1 className='counter'>{count}</h1>
        </div>
        <div className="general-buttons">
            <button onClick={addCount}className="add-button">+</button>
            <button onClick={subtractCount}className="subtract-button">-</button>
        </div>
        <div className="change-color-container">
            <button onClick={changeColor}className="change-color">Change color</button>
        </div>
        <div className="reset-container">
            <button onClick={reset}className="reset-button">Reset</button>
        </div>

       </div>
    )
}


export default App
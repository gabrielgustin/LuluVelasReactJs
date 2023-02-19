import './Buttons.css'

const Buttons = ({ handleClick, color, children }) => {

    return (
        <button className='Button' onClick={handleClick}> {children} </button>
    )
}

export default Buttons
import './card.css'


function Card({children}) {
    return (
        <ul className='cardList'>
            {children}
        </ul>
    )
}

export default Card
import './cardItem.css'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'


function CardItem() {
    let moreWrapper = useRef(null)
    let fullWrapper = useRef(null)
    let shortWrapper = useRef(null)

    const [card, setCard] = useState({
        isFetched: false,
        data: [],
        error: null
    })

    function handleShow() {
        shortWrapper.current.innerHTML = null
        fullWrapper.current.style.display = "flex"
        moreWrapper.current.remove()
    }

    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(res => res.json())
            .then(data => {
                setCard({
                    isFetched: true,
                    data,
                    error: false
                })
            }, console.log(card))
            .catch(err => {
                setCard({
                    isFetched: false,
                    data: [],
                    error: err
                })
            })
    }, [])

    return (
        <div>
            <div className='productItems' ref={shortWrapper}>
                {
                    card.data.length > 0 && card.isFetched ? (
                        card.data.slice(0, 16).map(item => (
                            <li key={item.id} className='cardItem'>
                                <Link style={{ textDecoration: 'none' }} to={`cars/${item.id}`}>
                                    <img className='cardImg' src={item.image}></img>
                                    <p className='cardTitle'>{item.marka}</p>
                                    <p className='cardPrice'>{item.price} $</p>
                                </Link>
                            </li>

                        ))

                    ) : <h2>Loading...</h2>
                }
            </div>

            <div ref={fullWrapper} style={{ display: "none" }} className='productItems'>
                {
                    card.data.length > 0 && card.isFetched ? (
                        card.data.map(item => (
                            <li key={item.id} className='cardItem'>
                                <Link style={{ textDecoration: 'none' }} to={`/product/${item.id}`}>
                                    <img className='cardImg' src={item.image}></img>
                                    <p className='cardTitle'>{item.title}</p>
                                    <p className='cardTime'>Вчера 22:55</p>
                                    <p className='cardPrice'>{item.price} $</p>
                                </Link>
                            </li>

                        ))

                    ) : <h2>Loading...</h2>
                }
            </div>


            <div className='wrapper' ref={moreWrapper}>
                <span className='product__line'></span>
                <p className='showMore' onClick={handleShow}>Покозать еще</p>
            </div>
        </div >


    )
}

export default CardItem
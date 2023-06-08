import { useEffect, useState } from 'react'
import {  useParams } from "react-router-dom"
import '../../index.css'
import './productId.css'
import '../home/home.css'

function ProductId() {
    const { productId } = useParams()

    const [card, setCard] = useState('')

    useEffect(() => {
        console.log(card);
    }, [card])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])

    return (
        <div className='container'>

            <div style={{ marginTop: '16px' }} className='container loginInpWrapper'>
                <div className="loginInp">
                    <select className='loginInpSel'>
                        <option className='opText'>Любая категория</option>
                        <option>Любая категория</option>
                        <option>Любая категория</option>
                    </select>

                    <input className='loginInpSer' type={'text'} placeholder={'Что будем искать ?'}></input>

                    <select className='loginInpSel2'>
                        <option className='opText' >По всей Узбекистану</option>
                        <option>2</option>
                        <option>3</option>
                    </select>

                    <button className='loginInpBtn' type={"submit"}>Найти</button>
                </div>

                <div>
                    <button className='leftInpBtn'>
                        <p className='leftInptext_1'>+</p>

                        <p className='leftInptext_2'>Добавить обьявления</p>
                    </button>
                </div>
            </div>

            <div>
                <pre className='productIdRoad'>Объявления   /   Ташкент Недвижимость   /   Ташкент Квартиры   /   Ташкент Продажа   /   Новостройки Ташкент</pre>
            </div>


            <p className='productIdTitle'>{card.title}</p>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <img className='productIdImg' src={card.image} alt='img'></img>
                        <img className='productIdImg' src={card.image} alt='img'></img>
                        <img className='productIdImg' src={card.image} alt='img'></img>
                        <img className='productIdImg' src={card.image} alt='img'></img>
                        <img className='productIdImg' src={card.image} alt='img'></img>
                    </div>

                    <img className='productIdImgMain' src={card.image} alt='img'></img>
                </div>

                <div>
                    <pre className='productIdArticul'>Артикул: 4418970                                                    обновлено: 28.04.17 добавлено: 28.04.17 </pre>

                    <p className='productIdPrice'>{card.price} $</p>

                    <p className='productIdLoc'>Ташкент, Ташкентская область, Юнусабадский район </p>

                    <div className='productIdNumberWrapper'>
                        <pre className='productIdNumber'>99891 166 * * * *</pre>

                        <p className='productIdNumberText'>Покозать польностю</p>
                    </div>

                    <div className='productIdNumberWrapper'>
                        <pre className='productIdNumber'>99891 166 * * * *</pre>

                        <p className='productIdNumberText'>Покозать польностю</p>
                    </div>

                    <pre className='productIdAutor'>Автор обьявлении: <span className='productIdAutorName'>Зухриддин Темиров</span></pre>

                    <div style={{ display: 'flex', gap: '11px' }}>
                        <p className='productIdBtn'>Написать автору</p>
                        <p className='productIdBtn'>Предложить свою цену</p>
                    </div>

                    <div className='productIdTable'>
                        <div className='productIdTableItem topB '>
                            <p className='productIdTableHeading'>Количество комнат:</p>
                            <p className='productIdTableSubtitle'>6</p>
                        </div>

                        <div className='productIdTableItem topB '>
                            <p className='productIdTableHeading'>Общая площадь:</p>
                            <p className='productIdTableSubtitle'>40 м2</p>
                        </div>

                        <div className='productIdTableItem topB rightB '>
                            <p className='productIdTableHeading'>Этаж:</p>
                            <p className='productIdTableSubtitle'>32</p>
                        </div>

                        <div className='productIdTableItem '>
                            <p className='productIdTableHeading'>Этажность дома:</p>
                            <p className='productIdTableSubtitle'>6</p>
                        </div>

                        <div className='productIdTableItem '>
                            <p className='productIdTableHeading'>Состояние квартиры:</p>
                            <p className='productIdTableSubtitle'>Первая сдача</p>
                        </div>

                        <div className='productIdTableItem rightB '>
                            <p className='productIdTableHeading'>Этаж:</p>
                            <p className='productIdTableSubtitle'>32</p>
                        </div>

                        <div className='productIdTableItem '>
                            <p className='productIdTableHeading'>Планировка</p>
                            <p className='productIdTableSubtitle'>
                                <span className=''>Планировка</span>
                            </p>
                        </div>

                        <div className='productIdTableItem '>
                            <p className='productIdTableHeading'>Год постройки/сдачи</p>
                            <p className='productIdTableSubtitle'>
                                <span className=''>Сдача в 2017</span>
                            </p>
                        </div>

                        <div className='productIdTableItem rightB '>
                            <p className='productIdTableHeading'>Ремонт</p>
                            <p className='productIdTableSubtitle'>Авторский проект</p>
                        </div>

                        <div className='productIdTableItem bottomB '>
                            <p className='productIdTableHeading'>Санузел</p>
                            <p className='productIdTableSubtitle'>
                                <span className=''>2 санузла и более</span>
                            </p>
                        </div>

                        <div className='productIdTableItem bottomB '>
                            <p className='productIdTableHeading'>Меблирована</p>
                            <p className='productIdTableSubtitle'>
                                <span className=''>Да</span>
                            </p>
                        </div>

                        <div className='productIdTableItem rightB bottomB '>
                            <p className='productIdTableHeading'>Высота потолков</p>
                            <p className='productIdTableSubtitle'>32</p>
                        </div>

                        <div className='productIdTableItemBig  '>
                            <p className='productIdTableHeading '>Рядом есть</p>
                            <p className=''>
                                <span className='productIdTableSubtitleSpan'>Больница, поликлиника, Детская, площадка, Детский сад, Остановки, Парк, зелёная зона, Развлекательные заведения, Рестораны, кафе</span>
                            </p>
                        </div>

                        <div className='productIdFeedback'>
                            <p className='productIdFeedbackText'>Срочно продаётся 3х ком на 1 этоже 7 этажном кирпичном доме. Новостройка Голден Хаус жылой комплекс Етти Чинор Очень качественный и дорогой ремонт. Комнаты полнастю разделные болшые. 2 сан узла. Для лишних вещей есть кладовка.Ремонт шыкарный обсалютно новый. <br /><br />Ремонт делолся из очень дорогова материяла. Дорогая класическая кухонная мебель. Джаккузи,Тёплые полы в каждой комнате. Дорогие люстры вовсех комнатах решодки на окнах. Теретория охранается. Всё предусмотренно для детей деские площядки качели итд. Торг наместе. Торопитесь продаю нужны денги. Первый золотой этаж и паследний в этом коплексе. Торопитесь.
                            </p>
                            <div className='productIdFeedbackBtnWrapper'>
                                <p className='productIdFeedbackWatches'>Просмотры: 10958</p>
                                <p className='productIdFeedbackReport'>Пожаловатся</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className='homeTopNestedMenuWrapper' style={{ display: 'flex' }}>
                <p style={{ marginRight: '90px' }} className='homeTopNestedMenu'>Похожие объявления</p>
                <p className='homeTopNestedMenu'>Обьявление автора</p>
            </div>
        </div>
    )
}

export default ProductId


import './newAds.css'
import '../../index.css'
import CardItem from '../cardItems/cardItems'
import Card from '../card/card'


function NewAds() {
    return (

        <div className=''>
            <div className='container'>
                <p className='modellariTitle'>Modellari</p>
                <Card>
                    <CardItem/>
                </Card>
            </div>
        </div>
    )
}

export default NewAds



import Map from '../../assets/map.png'
import './add-product.css'
import '../../index.css'

function Addads() {
    return (
        <div className='productWrapper container'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <p className='imputTitle'>Markasi</p>
                <div className='productStyle'>
                    <div>
                        <input className='bradius' type={'text'}></input>
                    </div>
                </div>

                <p className='imputTitle'>Tanirovkasi</p>
                <div className='productStyle'>
                    <div>
                        <input className='bradius' type={'text'}></input>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <p className='imputTitle'>Motor</p>
                <div className='productStyle'>
                    <div>
                        <input className='bradius' type={'text'}></input>
                    </div>
                </div>

                <p className='imputTitle'>Year</p>
                <div className='productStyle'>
                    <div>
                        <input className='bradius' type={'text'}></input>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <p className='imputTitle'>Color</p>
                <div className='productStyle'>
                    <div>
                        <input className='bradius' type={'text'}></input>
                    </div>
                </div>

                <p className='imputTitle'>Distance</p>
                <div className='productStyle'>
                    <div>
                        <input className='bradius' type={'text'}></input>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <p className='imputTitle'>Gearbook</p>
                <div className='productStyle'>
                    <div>
                        <input className='bradius' type={'text'}></input>
                    </div>
                </div>

                <p className='imputTitle'>Narxi</p>
                <div className='productStyle'>
                    <div>
                        <input className='bradius' type={'text'}></input>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <p className='imputTitle'>Description</p>
                <div className='productStyle'>
                    <div>
                        <input className='bradius' type={'text'}></input>
                    </div>
                </div>

                <p className='imputTitle'>Category</p>
                <div className='productStyle'>
                    <div>
                        <input className='bradius' type={'number'}></input>
                    </div>
                </div>
            </div>

            <div style={{display: 'flex', alignItems: 'center' }}>
                <p className='imputTitle'>Model uchun rasm</p>
                <div className='productStyle'>
                    <div>
                        <input className='bradius' type={'file'}></input>
                    </div>
                </div>
            </div>


            <div className='productStyleBtn'>
                <button className='addProductBtn mainTitle'>Saqlash</button>
            </div>
        </div>
    )
}

export default Addads
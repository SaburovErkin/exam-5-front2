import '../../index.css'
import './servicesItem.css'

function servicesItem(props) {
    return (
        <li style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} className="servicesItem">
            <img id={props.id} className="searvicesImg" src={props.img} alt='img'/>
            <p className="servicesText">{props.title}</p>
        </li>
    )
}

export default servicesItem
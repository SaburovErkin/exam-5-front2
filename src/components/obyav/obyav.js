import '../../index.css'
import '../../pages/profile/profile.css'
import { Link } from "react-router-dom";


function Obyav() {
    return (
        <div className='PrBottomStyle'>
            <div className="container">
                <Link to="/add-product">
                    <button style={{width: '200px'}}  className='addProductBtn mainTitle'>Mashina qo'shish</button>
                </Link>
            </div>
        </div>
    )
}
export default Obyav
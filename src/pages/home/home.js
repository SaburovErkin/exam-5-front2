import { Outlet} from 'react-router-dom'
import './home.css'


function HomePage() {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default HomePage
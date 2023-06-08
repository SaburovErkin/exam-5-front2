import '../login/login.css'

import './profile.css'
import { Link, Outlet } from 'react-router-dom'

function Profile() {
    return (
        <>
            <div>

                <div>
                    <div className="container" style={{ paddingTop: '30px' }}>

                        <div className='profileMainMenu' style={{ display: 'flex' }}>
                            <Link style={{textDecoration: 'none'}} to=''>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

            <Outlet />

        </>
    )
}

export default Profile
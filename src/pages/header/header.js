import { useTranslation } from 'react-i18next'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import '../../index.css'
import './header.css'

export function Header() {

    const { token } = useContext(AuthContext)

    const { t } = useTranslation()



    return (
        <div className="header container" style={{ display: 'flex', gap: '10px' }}>


            {
                token ? (
                    <Link className="profRegLink" to='/profile'>
                        <div style={{ width: '122px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '71px', marginLeft: '66px' }}>
                            <p style={{ margin: '0' }}>{t('name')}</p>
                        </div>
                    </Link>


                ) : 
                (   <div style={{display: 'flex', marginLeft: '1000px'}}>
                        <Link className="headerRegLink" to="/login">
                            <p className="headerReg">{t('Register')}</p>
                        </Link>
                    </div>
                )
            }



        </div>
    )
}
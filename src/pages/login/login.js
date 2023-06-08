import { useFormik } from 'formik'
import { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import * as Yup from 'yup'
import './login.css'
import '../../index.css'

function Login() {

    const { token } = useContext(AuthContext)

    const navigate = useNavigate()

    const { setToken } = useContext(AuthContext)

    const validationScheme = Yup.object().shape({
        name: Yup.string().required('Email kiriting'),
        password: Yup.string().min(5)
    })

    const initialValues = {
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        password: '',
    }

    const formik = useFormik({
        initialValues,
        validationScheme,
        onSubmit: (values) => {
            console.log(values);
        }
    })

    const firstnameRef = useRef()
    const lastnameRef = useRef()
    const phoneRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = (e) => {

        e.preventDefault();

        fetch('http://localhost:3000/register', {
            method: 'POST',

            headers: {
                'Content-type': 'application/json'
            },

            body: JSON.stringify({ firstname: firstnameRef.current.value, lastname: lastnameRef.current.value, phone: phoneRef.current.value, email: emailRef.current.value, password: passwordRef.current.value, })
        }).then(res => res.json())
            .then(data => {
                setToken(data.token)
            })
            .catch(err => console.log(err))
            .finally()
    }

    token ? (
        navigate('/')
    ) : (
        console.log('hello')
    )



    return (
        <div className='container'>
            <div className='mainLogin'>
                <form className='left' onSubmit={handleSubmit} onChange={formik.handleSubmit}>

                    <div className='leftTextWrapper'>

                        <p className='leftInpText'>First name</p>

                        <input value={formik.values.firstname} onChange={formik.handleChange}
                            name='firstname' ref={firstnameRef} type='text'
                            required className='leftInp'>
                        </input>

                        <p className='leftInpText'>Last name</p>

                        <input value={formik.values.lastname} onChange={formik.handleChange}
                            name='lastname' ref={lastnameRef} type='text'
                            required className='leftInp'>
                        </input>

                        <p className='leftInpText'>Phone number</p>

                        <input value={formik.values.phone} onChange={formik.handleChange}
                            name='phone' ref={phoneRef} type='number'
                            required className='leftInp'>
                        </input>

                        <p className='leftInpText'>Email</p>

                        <input value={formik.values.email} onChange={formik.handleChange}
                            name='email' ref={emailRef} type='email'
                            required className='leftInp'>
                        </input>

                        <p className='leftInpText'>Pasword</p>

                        <input value={formik.values.password} onChange={formik.handleChange}
                            name='password' ref={passwordRef} type='password'
                            required className='leftInp'>
                        </input>

                        <button id='btn' onChange={formik.handleChange} type='submit' className='leftInp leftBtn'>Register</button>

                        {
                            formik.errors.login && <h4 style={{ color: 'red' }}>{formik.errors.login}</h4>
                        }

                        {
                            formik.errors.password && <h4 style={{ color: 'red' }}>{formik.errors.password}</h4>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
import { useContext } from 'react'
import '../main-styles/modalstyle.css'
import {MainContext} from '../maincontext/MainContext'

function ModalWindow() {
    const {isDark,isModalWindow,setModalWindow} = useContext(MainContext)

    const handleCloseButton = ()=>{
        setModalWindow(!isModalWindow)
    }

    const handleLoginRegisterLink = () =>{
        const login_container = document.querySelector(".login_container")
        const register_container = document.querySelector(".register_container")
        const modal_container = document.querySelector(".modal_container")


        modal_container.classList.toggle("modal_container_active")
        login_container.classList.toggle("login_container_active")
        register_container.classList.toggle("register_container_active")
    }

  return (
    <>
        <dialog open={isModalWindow} className='modal'>

            <div className={isDark?"modal_container dark_container":"modal_container"}>
                <div className='login_container'>
                    <div className='input_container'>
                        <h2>Login</h2>
                        <form className="login_form">
                            <label htmlFor="email_login">Email</label>
                            <input type="email" id="email_login" placeholder='example@gmail.com' className= {isDark?"form_input dark_input":"form_input"}/>
                            <label htmlFor="password_login">Password</label>
                            <input type="password" id="password_login" placeholder='Write your password' className={isDark?"form_input dark_input":"form_input"}/>
                        </form>
                    </div>
                    <div className='remember_forgot'>
                        <div className='check_remember'>
                        <input type="checkbox" id='checkbox_remember'/>
                        <label htmlFor='checkbox_remember'>Remember me</label>
                        </div>
                        <a href="#">Forgot password?</a>
                    </div>
                    <button className={isDark?"form_button dark_button":"form_button"} >Login</button>
                    <div className='login_register'>
                        <p>Dont have an account?</p>
                        <a href="#" className='register_link' onClick={handleLoginRegisterLink}>Register</a>
                    </div>
                    <form method='dialog' >
                        <button className='close_button' onClick={handleCloseButton}>x</button>
                    </form>
                </div>

                <div className='register_container'>
                    <div className='input_container'>
                        <form className="login_form">
                            <h2>Registration</h2>
                            <label htmlFor="name">Username</label>
                            <input type="text" id="name" placeholder='Your name' className= {isDark?"form_input dark_input":"form_input"}/>
                            <label htmlFor="email_register">Email</label>
                            <input type="email" id="email_register" placeholder='example@gmail.com' className= {isDark?"form_input dark_input":"form_input"}/>
                            <label htmlFor="password_register">Password</label>
                            <input type="password" id="password_register" placeholder='Write your password' className={isDark?"form_input dark_input":"form_input"}/>
                        </form>
                    </div>
                    <div className='remember_forgot'>
                        <div className='check_remember'>
                        <input type="checkbox" id='checkbox_agree'/>
                        <label htmlFor='checkbox_agree'>I agree to the terms & conditions</label>
                        </div>
                    </div>
                    <button className={isDark?"form_button dark_button":"form_button"} >Register</button>
                    <div className='login_register'>
                        <p>Alredy have an account?</p>
                        <a href="#" className='login_link' onClick={handleLoginRegisterLink}>Login</a>
                    </div>
                    <form method='dialog' >
                        <button className='close_button' onClick={handleCloseButton}>x</button>
                    </form>
                </div>
            </div>

        </dialog>
    
    </>
  )
}

export default ModalWindow
import React from 'react'
import "../css/Register.css"
import Lama from "../Images/FunkyLamaMascot.png"
import { auth } from '../firebase.jsx'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Register = () => {

  const handleSubmit = async (e) =>{

    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try{
    const res = await createUserWithEmailAndPassword(auth, email, password)
    }catch(err){
      setErr(true);
    }
  }

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <div className='Image'>
          <img src={Lama} alt="cool lama"/>
        </div>
        <div className='content'>
        <span className='logo'>Lama Chat</span>
        <span className='title'>Register</span>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Username' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <input style={{display:"none"}} id="file" type='file'/>
            <label htmlFor='file'>
              <p className='pp'>Image+</p>
            </label>
            <button>press</button>
            {err && <span>Something Went Wrong</span>}
          </form>
          <p className='pp'>You do have account? Login</p>
        </div>
      </div>
    </div>
  )
}

export default Register
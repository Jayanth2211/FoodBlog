import i1 from './image1.png'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import './style/login.css'

import { useRef } from 'react'
const LoginPage = () => {
    let email=useRef("")
    let password=useRef("")
    let navigate=useNavigate()

    let dis=(n)=>{
        n.preventDefault()
        let data={
            email:email.current.value,
            password:password.current.value
        }
        axios.post("https://foodblog-kb9t.onrender.com/login",data)
        .then((res)=>{
           alert(res.data.message)
           if(res.data.status==200){
      navigate('/home')
           }
        })
      
    }
    return ( 
        <div className="main">
            <h1 className='ms-5'>Stories.</h1>
            <div className="box">
            <div className="left">
                <div className="content">
                    <h2>Login to Colorlib</h2>
                    <form action="" onSubmit={dis}>
                        <label htmlFor="">username</label>
                        <input type="email" placeholder='your-email' ref={email}/>
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='your-password' ref={password}/>
                        <Link to='/signup' >sign up</Link> <br />
                        <button>login</button>
                    </form>
                </div>
            </div>
            <div className="right">
                <img src={i1} alt="" />
            </div>
            </div>
        </div>
        
     
     );
}
 
export default LoginPage;
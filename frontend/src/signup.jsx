import { useRef } from 'react';
import './style/signup.css'
import i1 from './image1.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    let name=useRef("")
    let mail=useRef("")
    let password=useRef("")
    let confirmPassword=useRef("")

    let navigate=useNavigate()
    let submit=(x)=>{
        x.preventDefault()
        let data={
            name:name.current.value,
            email:mail.current.value,
            password:password.current.value ,
            confirmPassword:confirmPassword.current.value
        }

            if(data.name && data.email && data.password && data.password==data.confirmPassword){
                axios.post("http://localhost:4300/signup",data).then((res)=>{
                    
                    alert(res.data.message)
                    if(res.data.status==200){
                        navigate('/home')
                             }
                    
                })
                
            }
            else{
                alert("invalid credential")
            }

    
    }
    return ( 
        <div className="main">
            <h1 className='ms-5'>Stories.</h1>
        <div className="box">
        <div className="left">
        <img src={i1} alt="" />
        </div>
        <div className="right">
           
            <div className="content">
                <h2>Login to Colorlib</h2>
                <form action="" onSubmit={submit}>
                    <label htmlFor="">username</label>
                    <input type="text" ref={name} placeholder='name'/>
                    <label htmlFor="">Email</label>
                    <input type="email" ref={mail} placeholder='your email'/>
                    <label htmlFor="">Password</label>
                    <input type="password" ref={password} placeholder='your-password'/>
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" ref={confirmPassword}  placeholder='conform password'/>
                    <button>sign up</button>
                </form>
            </div>
        </div>
        </div>
        </div>
    
   
     );
}
 
export default Signup;
import "./style/navbar.css"
import { Link } from "react-router-dom"
const Navbar=()=>{
    return(
        <div className="navbar">
           
                <h1>Stories<span>.</span></h1>
           <div className="link">
           
            <Link to="/home">Home</Link>
            <Link to="/food">Food</Link>
         
            <Link to="/addfood">Add Food</Link>
            <Link to="/">Log out</Link>
            
           </div>
          
        </div>
    )
}

export default Navbar
import { useRef } from "react"
import "./style/addfood.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Addfood=()=>{

    let title=useRef("")
    let foodtype=useRef("")
    let rating=useRef("")
    let price=useRef("")
    let author=useRef("")
    let imgurl=useRef("")

    let navigate=useNavigate()

    let show=(v)=>{
        v.preventDefault()
        let data={
            title:title.current.value,
            foodtype:foodtype.current.value,
            side:author.current.value,
            price:price.current.value,
            rating:rating.current.value,
            imgurl:imgurl.current.value

        }
        if(data.title && data.side && data.imgurl && data.rating && data.price){
            axios.post('https://foodblog-kb9t.onrender.com/add-food',data).then((res)=>{
                alert(res.data.message)
                if(res.data.status==200){
                    navigate('/food')
                         }
            })
        }
        else{
            alert('fiil up all')
        }
    }
    return(
<div className="addfood">
   <div className="addfoodImg">
    <img src="https://i.pinimg.com/564x/84/43/ff/8443ff3a1754d1c235da716685a09210.jpg" alt="" height={400} />
   </div>
   <div className="addfoodConten">
    <form action=""  onSubmit={show}>
    <h3>Add Foods</h3>
   <div className="title">
    <div>
    <label>Type</label>
   <input type="text" placeholder="type" ref={foodtype} style={{width:"80px" ,height:"20px"}}/>
    
    </div>
   <div>
   <label>Title</label>
    <input type="text" placeholder="enter the title" ref={title} style={{width:"100px" ,height:"20px"}} />
   </div>
   </div>
    <label htmlFor="">Side</label>
    <input type="text" placeholder="Description" ref={author}/>
    <label htmlFor="">image URL</label>
    <input type="text" placeholder="enter the image url" ref={imgurl}/>
    <div className="title">
    <div>
    <label>Rating</label>
   <input type="text" placeholder="Rating" ref={rating} style={{width:"80px" ,height:"20px"}}/>
    
    </div>
   <div>
   <label>Price</label>
    <input type="text" placeholder="Price" ref={price} style={{width:"100px" ,height:"20px"}} />
   </div>
   </div>
    <button>Submit</button>
    </form>
   </div>
</div>
    )
}
export default Addfood
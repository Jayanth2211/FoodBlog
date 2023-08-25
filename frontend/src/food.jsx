import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import "./style/food.css"
const Food=()=>{
    let [food,setFood]=useState([])
    let [domi,setDom]=useState([])
   
   useEffect(()=>{
    let fetchData=async()=>{
        let res=await axios.get('https://foodblog-kb9t.onrender.com/food')
      let data=res.data
       setFood(data)
       setDom(data)

    }
    fetchData()
   },[])

   let [search,setSearch]=useState('')

  let filterItem=food.filter(item=>(
    item.title.toLowerCase().includes(search)
  ))
  
   
//    let search=(n)=>{
//     n.preventDefault()
//     let rr=""
//     let res=domi.filter((x)=>{
//           if(x.title==inp.current.value){
//                 rr= domi.filter((x)=>x.title==inp.current.value)
//                 setFood(rr)
//              }
//         })
//     if(rr.length==0){
//         alert("sorry this item can't fount")
//     }
    
    
    
   
    
    
   
   
    
   
// }
    return(
        <div className="food">
            <div className="search">
                <form action="">
                <span class="material-symbols-outlined">
mystery
</span> <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="search food" />
                     
                </form>
            </div>
       {filterItem.map((x)=>{
        return(
            <div className="foods border border-dark">
                <img src={x.imgurl} alt="" />
                <div className="boxes">
                    <h4>{x.title}</h4>
                    <span id="rating">{x.rating}&#9734;</span>
                </div>
                <div className="boxes">
                    <pre>{x.side}</pre>
                    <h5 >{x.price}&#8377; <span>for one</span></h5>
                </div>
                
                
            </div>
        )
       })}
        </div>
    )
}
export default Food
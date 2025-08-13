const express=require("express")
const app=express();
const path= require('path')

const PORT= process.env.PORT || 4300


const mongoose=require('mongoose');

const cors=require('cors'); //cross origin resource
//u model
const User=require('./model/users.js');
const Food=require('./model/food.js')
const { status } = require("express/lib/response.js");
//const dbURL='mongodb+srv://jayanthgama2001:jayanth%401234@cluster0.cki4zjh.mongodb.net/hotstar?retryWrites=true&w=majority'


//middle ware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended:false}))

const dbURL='mongodb+srv://jayanthgama2001:jayanth%4012345@cluster0.vsiabx0.mongodb.net/foodblog?retryWrites=true&w=majority'


mongoose.connect(dbURL).then(()=>{
    console.log("connected to data base");
})
//signin
app.post('/login',(req,res)=>{
    User.findOne({email:req.body.email}).then((doc)=>{
        if(doc){
            if(doc.password===req.body.password){
                res.send({message:"login successfull",status:200})
            }
            else{
                res.send({message:"login failed"})
            }
        }
        else{
            res.send({message:"user not found"})
        }
    })
})

//signup
app.post('/signup',(req,res)=>{
    User.findOne({email:req.body.email}).then((doc)=>{
        if(doc){
            res.send({message:"user already exist"})
        }
        else{
            let data=new User({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
                
            })
            data.save().then(()=>{
                res.send({message:"user registration successfull",status:200})
            }).catch(err=>{
                res.send({messagr:"user Regestration failed"})
            })
        }
    })
})





app.post("/add-food",(req,res)=>{
    let data=new Food(
        {
            title:req.body.title,
            side:req.body.side,
            rating:req.body.rating,
            price:req.body.price,
            foodtype:req.body.foodtype,
            imgurl:req.body.imgurl
        }
    )

    data.save().then(()=>{
        res.send({message:"food added successfull",status:200})
    }).catch((err)=>{
        res.send({message:'unfinished'})
    })
})


//fetch all data


app.get("/food",async(req,res)=>{
try{
   const data=await Food.find()
   res.json(data)
}catch(error){
    console.log(error);
}
})

//static files
app.use(express.static(path.join(__dirname,"./frontend/build")))

app.get('*',function (req,res){
  res.sendFile(path.join(__dirname,"./frontend/build/index.html"))
})

app.listen(PORT,()=>{
    console.log("req port created");
})

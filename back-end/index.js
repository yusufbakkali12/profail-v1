const express = require("express");
const app = express();
const PORT = process.env.PORT_ONE || 2424;
const mongoose = require("mongoose");
const User = require("./User");
const Project_Items = require("./Model/Project_items");
const Icons_Items = require("./Model/Icons_items");
const jwt = require("jsonwebtoken");
const cors=require("cors");
app.use( 
    cors({ 
    origin:"http://localhost:3000"}
    ));
mongoose.connect(
    // "mongodb+srv://root:ADmin123@cluster2.vt4zwdd.mongodb.net/auth-service?retryWrites=true&w=majority",
    // "mongodb://127.0.0.1:27017/produit-service",
    "mongodb://127.0.0.1:27017/portfolio",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log(`Auth-Service DB Connected`);
        
    }
);

app.use(express.json());

// get data project items 
app.get("/api/project_items",async (req ,res)=>{
    const AllItems =await Project_Items.find();
    return res.json(AllItems)
})
// get data project items 
app.get("/api/icons_items",async (req ,res)=>{
    const AllItems =await Icons_Items.find();
    return res.status(200).json(AllItems)
})


app.post("/auth/login", async (req, res) => {
    const { email, password } = req.body;
    const user =await User.findOne({email});
    //check user exicte
    if (!user) {
        return res.json({ message: "User doesn't exist" });
    } else {
        if (password !== user.password) {
            return res.json({ message: "Password Incorrect" });
        }
        const payload = {
            email,
            name: user.name
        };
        jwt.sign(payload, "secret", async (err, token) => {
             err ? console.log(err):
                await User.updateOne({email},{"$set":{"token": token}})
                return res.json({ token: token });
        });
    }
});


app.post("/auth/register", async (req, res) => {
    const { email, password, name } = req.body; 
    const userExists =await User.findOne({ email });
     if (userExists) {
        return res.json({ message: "User already exists" });
     } else {
       const newUser = new User({
            "email":email,
            "name":name,
            "password":password,
            "token":'',
        });
      
        newUser.save()
        return res.json(newUser);
     }
});

app.listen(PORT, () => {
    console.log(`Auth-Service at ${PORT}`);
});

import { Router } from "express";
import user from "../models/user.js";
import bcrypt from "bcrypt"


const router = Router()

router.get('/login', (req, res)=>{
    res.render("login", {
        title: 'Login | coderKing',
        isLogin: true,
        loginError: "Error"
    })
})
router.get('/signup', (req, res)=>{
    res.render("signup", {
        title: 'Register | coderKing',
        isSignup: true,
        registerError: 'Error'
    })
})
router.post('/register', async (req, res)=>{
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const userData = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hashedPassword,
    }
    const User = await user.create(userData )
    console.log(User);
    res.redirect('/')
})

router.post('/login', async (req, res)=>{
    const exisUser = await user.findOne({email: req.body.email })
    if(!exisUser) {
        // throw new  Error("BU acc bor")
        console.log("user not found");
        return false
    }

    const isPassEqual = await bcrypt.compare(req.body.password, exisUser.password)

    if(!isPassEqual){
        console.log('pass hato');
        return false
    }


    console.log(exisUser); 
    res.redirect('/')
})


export default router
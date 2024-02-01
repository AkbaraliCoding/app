import { Router } from "express";

const router = Router()

router.get('/login', (req, res)=>{
    res.render("login", {
        title: 'Login | coderKing',
        isLogin: true
    })
})
router.get('/signup', (req, res)=>{
    res.render("signup", {
        title: 'Register | coderKing',
        isSignup: true
    })
})
router.post('/register', (req, res)=>{
    console.log(req.body); 
    res.redirect('/')
})

router.post('/login', (req, res)=>{
    console.log(req.body); 
    res.redirect('/')
})


export default router
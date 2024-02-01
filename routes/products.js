import { Router } from "express";

const router = Router()

router.get('/', (req, res)=>{
    res.render("index", {
        title: 'Boom Shop | coderKing'
    })
})


router.get('/add', (req, res)=>{
    res.render("add", {
        title: 'Add Product | coderKing',
        isAdd: true
    })
})
router.get('/products', (req, res)=>{
    res.render("products", {
        title: 'Products | coderKing',
        isProduct: true
    })
})

export default router
var express=require("express")
const router=express.Router()
const product=require("./Product/ProductController")
const user=require("./User/UserController")
const cart=require("./Cart/CartController")

//Fetch Product
router.get("/fetchProduct/",product.fetchProduct)
//Fetch User
router.post("/checkLogin/",user.checkLogin)
router.post("/insertUser/",user.insertUser)

//Insert Cart
router.post("/add-to-cart/",cart.addToCart)
//Fetch from cart
router.post("/fetchCart/",cart.fetchCart)

module.exports=router
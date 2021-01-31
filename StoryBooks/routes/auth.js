const express=require('express')
const passport=require('passport')
const router=express.Router()

// description   auth with Google

router.get('/google',passport.authenticate("google",{scope:['profile']}))

// description    auth/google/callback
router.get('/google/callback',passport.authenticate("google",{failureRedirect:'/'}),(req,res)=>{
    res.redirect('/dashboard')
})

//description logout user
//route /auth/logout

router.get('/logout',(req,res)=>{
    req.logout()
    res.redirect('/')
})

module.exports=router;
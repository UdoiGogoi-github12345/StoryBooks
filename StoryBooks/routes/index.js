const express=require('express')
const router=express.Router()
const { ensureAuth,ensureGuest}=require('../middleware/auth')

// description login/landing page
const Story=require('../models/Story')


router.get('/',ensureGuest,(req,res)=>{
    res.render('login',{
        layout:'login'
    }) //this is gonna look for templates in views
})

// description dashboard
//route GET /dashboard

router.get('/dashboard', ensureAuth, async (req, res) => {
    try {
      const stories = await Story.find({ user: req.user.id }).lean()
      res.render('dashboard', {
        name: req.user.firstName,
        stories,
      })
    } catch (err) {
      console.error(err)
      res.render('error/500')
    }
  })


module.exports=router;
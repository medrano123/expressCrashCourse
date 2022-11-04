const express = require('express');
const router = express.Router();
router.use(logger)
router.get('/', (req, res) => {
    console.log(req.query.name)
    res.send('User List')
});

router.get('/new', (req, res) =>{
    res.render("users/new", {firstName : "Test"})
});

router.post("/", (req, res) => {
    const isValid = true;
    if(isValid){
        users.push({ firstName : req.body.firstName })
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log("Error creating user")
        res.render('users/new', {firstName : req.body.firstName})
    }
    // res.send('created User')
    //console.log(req.body.firstName)
})  
 

router
    .route("/:id")
    .get((req, res) =>{
        console.log(req.user)
        res.send(`Get user with id ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update user with id ${req.params.id}`)
    })
    .delete((req, res) =>{
        res.send(`Delete user with id ${req.params.id}`)
    })

const users = [{ name: "Giovanni" }, { name: "Chicken" },{ name: "Red" },{ name: "Pink" },{ name: "Green" }]

router.param("id", (req,res,next,id)=>{
    req.user = users[id]
    //console.log(id)
    next()
})

function logger(req,res,next){
    console.log(req.originalUrl)
    next()
}

/*router.get('/:id', (req, res) =>{
    res.send(`Get user with id ${req.params.id}`)
})

router.put('/:id', (req, res) =>{
    res.send(`Get user with id ${req.params.id}`)
})

router.delete('/:id', (req, res) =>{
    res.send(`Get user with id ${req.params.id}`)
})*/ 



module.exports = router 
const express = require('express');
const app = express();
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true })) //allows us to access the input name using middleware as express by default doesnt give access
app.set('view engine', 'ejs')
app.use(express.json())

//app.use(logger)

/*app.get('/', logger,  (req, res) => {
    //console.log('here');
    res.render('index', { text: 'escape at all costs'})
});*/

//middleware
function logger(req,res,next){
    console.log(req.originalUrl)
    next()
}

const userRouter = require('./routes/users')
app.use('/users', userRouter)
app.listen(3000)

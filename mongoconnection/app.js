const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const exhbs = require('express-handlebars')
const dbo = require('./db')


// View engine setup
app.engine('hbs', exhbs.engine({
    layoutsDir: 'viewsfold/',
    defaultLayout: "main",
    extname: "hbs"
}))

app.use(bodyParser.urlencoded({extended:true}))


app.set('view engine', 'hbs')
app.set('views', 'viewsfold')

//SINGLE correct route
app.get('/', async (req, res) => {
    let database = await dbo.getDataBase()
    const collection = database.collection('books')
    const cursor = collection.find({})
    let mydata = await cursor.toArray()
    let message = 'test'
    switch(req.query.status)
    {
        case '1':
            message="insert successfully"
            break;

            default:
                break;
    }
    
    res.render('main', { message, mydata })
})


app.post('/store_book',async(req,res)=>{
    let database=await dbo.getDataBase()
    const collection=database.collection('books')
    let bookdata={title:req.body.title1,author:req.body.author1}
    await collection.insertOne(bookdata)
    return res.redirect('/?status=1')
})



app.listen(8000, () => {
    console.log('listening to 8000 port')
})


const express = require('express')
const app = express()
const models = require('./models')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')


app.engine('mustache', mustacheExpress());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.set('view engine','mustache');
app.set('views','./views');

app.get('/',function(req,res){

    models.shoppinglist.findAll().then(function(shop){
        res.render('index',{shop: shop})
    })
 
})

app.post('/',function(req,res){

    let name = req.body.name
    let street = req.body.street
    let city = req.body.city
    let state = req.body.state

  const shoppinglist =  models.shoppinglist.build({
        name: name,
        street: street,
        city: city,
        state: state
            })
    shoppinglist.save().then(function(newshoppinglist){
        res.redirect('/')
        })
})



app.listen(3000, function(){
    console.log('Example app listening on port 3000!')
})

app.post('/delete-shop',function (req,res){
    let shopId = req.body.shopId
    models.shoppinglist.destroy({
    where:{
        id: shopId 
    }
}).then(function(){
    res.redirect('/')
})


})
















// models.shoppinglist.destroy({
//     where:{
//         name: 'Kroger' 
//     }
// }).then(function(){

// })

//saving a new shopping list
// shoppinglist.save().then(function(newshoppinglist){
//     console.log(newshoppinglist)
// })

//fetch all shopping lists
// models.shoppinglist.findAll().then(function(shoppinglist){
//     console.log(shoppinglist)
// })

//Find a shopping list by ID
// models.shoppinglist.findById(1).then(function(shoppinglist){
//     console.log(shoppinglist)
// })


//fetch a particular shopping list
// models.shoppinglist.findOne({
//     where:{
//         name: 'Kroger'
//     }
// }).then(function(shoppinglist){
//     console.log(shoppinglist)
// })



//plan findOne method with no filter
// models.shoppinglist.findOne().then(function(shoppinglist){
//     console.log(shoppinglist)
// })


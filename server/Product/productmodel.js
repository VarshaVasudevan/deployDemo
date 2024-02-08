
var mongoose=require('mongoose')

    var Product=mongoose.Schema({
        name: { type: String, required: true },
        rating: { type: Number, required: true },
        price: { type: Number, required: true },
        warranty: { type: String, required: true },
        color: { type: String, required: true },
        memory: { type: String, required: true },
        image: { type: String, required: true },
        type:{ type: String, required: true },
    })
    
Product=new mongoose.model('product',Product)

module.exports=Product
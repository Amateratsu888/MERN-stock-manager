const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    product_name : {
        type:String,
        required:true
    },
    product_mark :{
        type: String,
        required : true
    },
    product_cat : {
        type: String,
        required : true
    },
    price : {
        type : Number,
        required : true 
    },
    qte : {
        type : Number,
        required : true
    },
    expired_date : {
        type : Date,
        required : true
    }
},
{
timestamps: true,
})

module.exports = mongoose.model("Product", productSchema);
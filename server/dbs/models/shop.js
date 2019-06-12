const mongoose = require('mongoose')
let shopSchema = new mongoose.Schema({
  url:String,
  name:String,
  area:String,
  price_now:Number,
  price_old:Number,
  sale_count:Number,
})

module.exports = mongoose.model('shop',shopSchema)

var mongoose = require("mongoose");

var mongoDB = "mongodb://tolu5455:intheend54@ds121730.mlab.com:21730/computer";
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error'));

var Schema = mongoose.Schema;
var computerSchema = new Schema({
  maso: { type: String, required: [true, "Mã số trống"], max: 100 },
  ten: { type: String, required: [true, "Tên trống"], max: 100 },
  hinh:{ type: String, required:[true, "Đường dẫn trống"]},
  giaban: { type: String, min: 0},
  gianhap: { type: String, min: 0},
  ram: { type: String, required: [true, "Ram trống"], max: 10 },
  cpu: { type: String, required: [true, "CPU trống"], max: 10 },
  manhinh: { type: String, required: [true, "Màn hình trống"], max: 100 },
  //luotxem: {type: Number},
  nhasanxuat: { type: Schema.ObjectId, ref: "Nhasanxuat", required: true }
});

computerSchema.virtual('url').get(function(){
  return '/catalog/laptop/' + this._id;
})


module.exports = mongoose.model("Laptop", computerSchema);

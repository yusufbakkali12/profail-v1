const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Project_itemsSchema = new Schema({
        _id: { type: Number  },
        title:{type:String , required: true },
        discription:{type:String },
        url_see: {type:String },
        url_source: {type:String },
        url_img: [{type:String}],
        vue: {type: Number},
        level: [{type:String}],
        icon: [
          {icon_name: String,icon_logo: String,icon_color: String},
        ],
        created_at: {
            type: Date,
            default: Date.now(),
        },
        updated_at:  {
            type: Date,
            default: null,
        },
        deleted_at: {
            type: Date,
            default: null,
        },
}, { timestamps: true });

module.exports = Project_Items = mongoose.model("project_items", Project_itemsSchema);

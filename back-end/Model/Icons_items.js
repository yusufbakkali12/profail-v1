const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Icons_itemsSchema = new Schema({
        _id_icon:  { type: Number  },
        icon_name: { type: String  },
        icon_logo:  { type: String  },
        icon_color: { type: String  },
        level: [ { type: String  }]
}, { timestamps: true });

module.exports = Icons_Items = mongoose.model("icons_items", Icons_itemsSchema);

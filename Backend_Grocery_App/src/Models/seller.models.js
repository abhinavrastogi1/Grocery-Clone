import { mongoose, Schema } from "mongoose";

const sellerSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    storeName:{
        type:String,
        required:true,
    },
    storeDescription:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:["active","inactive"],
        default:"inactive"
    }
  },
  { timestamps: true }
);

export const Seller = mongoose.model("Seller", sellerSchema);
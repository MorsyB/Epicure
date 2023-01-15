import mongoose from "mongoose";

const dishesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    restaurant: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    dishMenu: {
      type: String,
      required: true,
    },
    dishType: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    visits: {
      type: Number,
      required: false,
    }
  },
  { timestamps: true }
);

const Dishes = mongoose.model("Dishes", dishesSchema);

export default Dishes;

import mongoose from "mongoose";

const chefsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: false,
    },
    restaurants: {
      type: Array,
      required: false,
    },
    visits: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

const Chefs = mongoose.model("Chefs", chefsSchema);

export default Chefs;

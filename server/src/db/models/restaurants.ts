import mongoose from "mongoose";

const restaurantsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    chef: {
      type: String,
      required: true,
    },
    openingDate: {
      type: String,
      required: true,
    },
    openingHours: {
      type: String,
      required: true,
    },
    closingHours: {
      type: String,
      required: true,
    },
    dishes: {
      type: Array,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Restaurants = mongoose.model("Restaurants", restaurantsSchema);

export default Restaurants;

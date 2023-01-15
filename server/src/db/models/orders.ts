import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema(
    {
        user: {
            type: String,
            required: true,
        },
        restaurant: {
            type: String,
            required: true,
        },
        dishes: {
            type: Array,
            required: true,
        },
        price: {
            type: Number,
            required: false,
        },
        active: {
            type: Boolean,
            required: true,
        }
    },
    { timestamps: true }
);

const Orders = mongoose.model("Orders", ordersSchema);

export default Orders;

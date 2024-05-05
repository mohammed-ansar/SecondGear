import mongoose from "mongoose"

const vehicleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['car', 'bike'],
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    mileage: {
        type: String
    },
    fuel_type: {
        type: String
    },
    model: {
        type: String
    },
    price: {
        type: Number
    },
    transmission: {
        type: String
    },
    color: {
        type: String
    },
    status: {
        type: String,
        enum: ['sold', 'available'],
        default: 'available'
    }
})

const Vehicle = mongoose.model('Vehicle', vehicleSchema)
export default Vehicle
import Vehicle from "../models/vehicles"

export const getVehicleList = async(req, res, next)=>{
     const vehicleType = req.query.type
    try {
        const vehicleList = await Vehicle.find({ type: vehicleType, status: { $ne: "sold" } });
        res.status(200).json({
            success: true,
            list: vehicleList
        })
    } catch (error) {
        next(error)
    }
}
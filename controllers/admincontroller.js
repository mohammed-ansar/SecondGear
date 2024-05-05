import Vehicle from "../models/vehicles";

export const addVehicles = async(req, res, next)=>{
    const errors = validationResult(req);
  if (!errors.isEmpty(422)) {
    const path = errors.errors[0].path;
    const message =
      errors.errors[0].msg === "Invalid Value"
        ? `${path} is a invalid value`
        : errors.errors[0].msg;
    return res.status().json({
      success: false,
      message,
    });
  }
  try {
    await Vehicle.create(req.body)
    res.status(200).json({
        success: true,
        message: `Vehicle added successfully`
    })
  } catch (error) {
    next(error)
  }
}
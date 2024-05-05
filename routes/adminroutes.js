import express from "express"

const adminRoutes = express.Router()

import { addVehicles } from "../controllers/admincontroller"
import { checkVehicleBody } from "../middwares/validator"

adminRoutes.post('/addVehicles',checkVehicleBody, addVehicles)

export default adminRoutes
import express from "express"

const Routes = express.Router()

import { getVehicleList } from "../controllers/usercontroller"
import { authentication } from "../middwares/authenticate"

Routes.get('/vehicleList', authentication, getVehicleList)

export default Routes
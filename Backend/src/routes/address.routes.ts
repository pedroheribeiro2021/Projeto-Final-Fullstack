import { Router } from "express"
import { ensureAuthMiddleware } from "../middlewares/user.middlewares/ensureAuth.middleware"
import { updateAddressController } from "../controllers/address/address.controller"


export const addressRoutes = Router()

addressRoutes.patch('/:id', ensureAuthMiddleware, updateAddressController)
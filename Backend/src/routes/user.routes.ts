import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, searchUserIdController, updateUserController } from "../controllers/user.controller";
import { ensureAuthMiddleware } from "../middlewares/user.middlewares/ensureAuth.middleware";
import { ensureOwnUserMiddleware } from "../middlewares/user.middlewares/ensureOwnUser.middleware";
import { verifyUserEmailExistsMiddleware } from "../middlewares/user.middlewares/verifyUserEmailExists.middleware";
import { verifyUsernotExistMiddleware } from "../middlewares/user.middlewares/verifyUserNotExist.middleware";


export const userRoutes = Router()

userRoutes.get('', listUsersController)
userRoutes.post('', verifyUserEmailExistsMiddleware, createUserController)
userRoutes.patch('/:id', ensureAuthMiddleware, verifyUsernotExistMiddleware, ensureOwnUserMiddleware, updateUserController)
userRoutes.delete('/:id', ensureAuthMiddleware, verifyUsernotExistMiddleware, ensureOwnUserMiddleware, deleteUserController)
userRoutes.get('/:id', searchUserIdController);
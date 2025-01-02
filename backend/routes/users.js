
import express from 'express'

import { 
    updateUser,
    deleteUser,
    getSingleUser,
    getAllUser 
} from '../controllers/userController.js'
const router = express.Router()
import { verifyUser } from '../utils/verifyToken.js'

// uodate user

router.put("/:id",verifyUser, updateUser)

//delete user

router.delete("/:id",verifyUser, deleteUser)

//get single user

router.get("/:id",verifyUser, getSingleUser)

//getAll user

router.get("/", verifyUser,getAllUser)


export default router;
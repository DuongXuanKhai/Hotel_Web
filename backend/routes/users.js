import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controller/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();


router.get('/checkauthentication', verifyToken, (req, res, next) => {
    res.send("hello user, you are logged in!");
})

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("hello user")
})
router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
    res.send("hello admin")
})

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);
//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;
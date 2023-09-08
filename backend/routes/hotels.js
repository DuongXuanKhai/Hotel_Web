import express from "express";
import Hotel from "../model/Hotels.js";
import { createError } from "../utils/error.js";
import { countByCity, countByType, createHotel, deleteHotel, getAllHotel, getHotelRooms, getOneHotel, updateHotel } from "../controller/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//create
router.post("/", verifyAdmin, createHotel);
//update
router.put("/:id", verifyAdmin, updateHotel);
//delete
router.delete("/:id", verifyAdmin, deleteHotel);
//get
router.get("/find/:id", getOneHotel);
//getall
router.get("/", getAllHotel);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);
export default router;

import express from "express";
import upload from "../utils/multer";
import { uploadMedia } from "../utils/cloudinary";

const router = express.Router();

router.route("/upload-video").post();



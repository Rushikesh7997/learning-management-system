import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { createCheckoutSession, stripeWebhook } from "../controllers/coursePurchase.controller";

const router = express.Router();

router.route("/checkout/create-checkout-session").post(isAuthenticated, createCheckoutSession);
router.route("/webhook").post(express.raw({type:"application/json"}),stripeWebhook);
router.route("/course/:courseId/details-with-status").get();

router.route("/").get();

export default router;   
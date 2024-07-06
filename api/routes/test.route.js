import express from "express";
import {
  shouldBeAdmin,
  shouldBeLoggedIn,
} from "../controllers/test.controller";
import { verifyToken } from "../middlewares/verifyToken";

const router = express.Router();

router.get("/should-be-logged-in", verifyToken, shouldBeLoggedIn);
router.get("/should-be-admin", verifyToken, shouldBeAdmin);

export default router;

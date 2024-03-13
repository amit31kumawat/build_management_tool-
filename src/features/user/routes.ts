import express from "express";
import HandleErrors from "../../middleware/handleError";
import { subRoutes } from "../../utils/constants";
import { forgotPassword, verifyOtp } from "./controller";

const authRoutes = express.Router();

authRoutes.post(subRoutes.FORGOT_PASSWORD, HandleErrors(forgotPassword));
authRoutes.post(subRoutes.OTP_VERIFY, HandleErrors(verifyOtp));

authRoutes.patch(
	subRoutes.GET_PROPERTY_LIST_BY_LOCATION_ID_AND_USER_ID,
	HandleErrors(resetPassword)
);

export default authRoutes;

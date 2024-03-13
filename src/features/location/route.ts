import express from "express";
import HandleErrors from "../../middleware/handleError";
import { subRoutes } from "../../utils/constants";
import {
	addLocationDeatils,
	deleteLocation,
	getLocationList,
	updateLocationDeatils,
} from "./controller";

const locationRoutes = express.Router();

locationRoutes.post(
	subRoutes.ADD_LOCATION_DATA,
	HandleErrors(addLocationDeatils)
);
locationRoutes.put(
	subRoutes.UPDATE_LOCATION_DATA,
	HandleErrors(updateLocationDeatils)
);
locationRoutes.put(subRoutes.DELETE_LOCATION, HandleErrors(deleteLocation));
locationRoutes.get(subRoutes.GET_LOCATION_DATA, HandleErrors(getLocationList));

export default locationRoutes;

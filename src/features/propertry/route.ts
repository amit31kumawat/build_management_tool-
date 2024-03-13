import express from "express";
import HandleErrors from "../../middleware/handleError";
import { subRoutes } from "../../utils/constants";
import {
	addPropertyDetails,
	getPropertyList,
	updatePropertyDeatils,
} from "./controller";

const propertyRoutes = express.Router();

propertyRoutes.post(subRoutes.ADD_PROPERTY, HandleErrors(addPropertyDetails));
propertyRoutes.put(
	subRoutes.UPDATE_PROPERTY,
	HandleErrors(updatePropertyDeatils)
);

propertyRoutes.get(
	subRoutes.GET_PROPERTY_LIST_BY_LOCATION_ID_AND_USER_ID,
	HandleErrors(getPropertyList)
);

export default propertyRoutes;

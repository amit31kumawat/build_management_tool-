import express from "express";
import HandleErrors from "../../middleware/handleError";
import { subRoutes } from "../../utils/constants";
import { addMaterialDetails, updateMaterialDeatils } from "./controller";

const materialRoutes = express.Router();

materialRoutes.post(subRoutes.ADD_MATERIAL, HandleErrors(addMaterialDetails));
materialRoutes.put(
	subRoutes.UPDATE_MATERIAL,
	HandleErrors(updateMaterialDeatils)
);

// materialRoutes.get(
// 	subRoutes.GET_MATERIAL_LIST,
// 	HandleErrors(getmaterialList)
// );

export default materialRoutes;

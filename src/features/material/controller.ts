import { Request, Response } from "express";
import locationServices from "./services";

export const addMaterialDetails = async (req: Request, res: Response) => {
	try {
		const data = await locationServices.addMaterialDetails(req.body);
		res.status(200).json(data);
	} catch (error) {
		res.status(error.output?.statusCode ?? 500).json(error);
	}
};

export const updateMaterialDeatils = async (req: Request, res: Response) => {
	try {
		const data = await locationServices.updateMaterialDeatils(req.body);
		res.status(200).json(data);
	} catch (error) {
		res.status(error.output?.statusCode ?? 500).json(error);
	}
};

// export const getmaterialList = async (req: Request, res: Response) => {
// 	const payLoads = {
// 		limit: req.query.limit ,
// 		offset:req.query.offset ,
// 	};

// 	try {
// 		const data = await locationServices.getmaterialList(payLoads);
// 		res.status(200).json(data);
// 	} catch (error) {
// 		res.status(error.output?.statusCode ?? 500).json(error);
// 	}
// };

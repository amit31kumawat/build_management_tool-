import { Request, Response } from "express";
import locationServices from "./services";

export const addPropertyDetails = async (req: Request, res: Response) => {
	try {
		const data = await locationServices.addPropertyDetails(req.body);
		res.status(200).json(data);
	} catch (error) {
		res.status(error.output?.statusCode ?? 500).json(error);
	}
};

export const updatePropertyDeatils = async (req: Request, res: Response) => {
	try {
		const data = await locationServices.updatePropertyDeatils(req.body);
		res.status(200).json(data);
	} catch (error) {
		res.status(error.output?.statusCode ?? 500).json(error);
	}
};

export const getPropertyList = async (req: Request, res: Response) => {
	const payLoads = {
		user_id: req.params.userId,
		location_id: req.query.location_id,
		property_id: req.query.property_id,
		limit: req.query.limit,
		offset: req.query.offset,
	};

	try {
		const data = await locationServices.getPropertyList(payLoads);
		res.status(200).json(data);
	} catch (error) {
		res.status(error.output?.statusCode ?? 500).json(error);
	}
};

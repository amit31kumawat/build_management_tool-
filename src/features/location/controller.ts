import { Request, Response } from "express";
import locationServices from "./services";

export const addLocationDeatils = async (req: Request, res: Response) => {
	try {
		const data = await locationServices.addLocationDeatils(req.body);
		res.status(200).json(data);
	} catch (error) {
		res.status(error.output?.statusCode ?? 500).json(error);
	}
};

export const updateLocationDeatils = async (req: Request, res: Response) => {
	try {
		const data = await locationServices.updateLocationDeatils(req.body);
		res.status(200).json(data);
	} catch (error) {
		res.status(error.output?.statusCode ?? 500).json(error);
	}
};
export const deleteLocation = async (req: Request, res: Response) => {
	try {
		const data = await locationServices.deleteLocation(req.params.id);
		res.status(200).json(data);
	} catch (error) {
		res.status(error.output?.statusCode ?? 500).json(error);
	}
};

export const getLocationList = async (req: Request, res: Response) => {
	const payLoads = {
		limit: req.query.limit,
		offset: req.query.offset,
	};

	try {
		const data = await locationServices.getLocationList(payLoads);
		res.status(200).json(data);
	} catch (error) {
		res.status(error.output?.statusCode ?? 500).json(error);
	}
};

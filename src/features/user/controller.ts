import { Request, Response } from "express";
import locationServices from "./services";

export const forgotPassword = async (req: Request, res: Response) => {
	try {
		const data = await locationServices.forgotPassword(req.body.email);
		res.status(200).json(data);
	} catch (error) {
		res.status(error.output?.statusCode ?? 500).json(error);
	}
};

export const verifyOtp = async (req: Request, res: Response) => {
	try {
		const data = await locationServices.verifyOtp(req.body);
		res.status(200).json(data);
	} catch (error) {
		res.status(error.output?.statusCode ?? 500).json(error);
	}
};

export const resetPassword = async (req: Request, res: Response) => {
	try {
		const data = await locationServices.resetPassword(req.body);
		res.status(200).json(data);
	} catch (error) {
		res.status(error.output?.statusCode ?? 500).json(error);
	}
};

import { Request, Response, NextFunction } from "express";

const HandleErrors =
	(func) =>
	async (req: Request, res: Response, next: NextFunction): Promise<any> => {
		try {
			await func(req, res, next);
		} catch (error) {
			console.error("Error Handler", error);
			res.status(400).send(error);
			next(error);
		}
	};

export default HandleErrors;

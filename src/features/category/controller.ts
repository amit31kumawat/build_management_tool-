// import { Request, Response } from "express";
// import CategoryServices from "./services";

// /**
//  * login.
//  * @param req
//  * @param res
//  * @param next
//  */

// export const getCategoryNameAndCount = async (req: Request, res: Response) => {
// 	try {
// 		const data = await CategoryServices.getCategoryNameAndCount();
// 		res.status(200).json(data);
// 	} catch (error) {
// 		res.status(error.output?.statusCode ?? 500).json(error);
// 	}
// };

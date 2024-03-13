// import { Request, Response } from "express";
// import locationServices from "./services"

// export const addLocationDeatils = async (req: Request, res: Response) => {
//     try {
//         const data = await locationServices.;
//         res.status(200).json(data);
//     } catch (error) {
//         res.status(error.output?.statusCode ?? 500).json(error);
//     }
// };

// export const updateLocationDeatils = async (req: Request, res: Response) => {
//     try {
//         const data = await locationServices.updateLocationDeatils(req.body);
//         res.status(200).json(data);
//     } catch (error) {
//         res.status(error.output?.statusCode ?? 500).json(error);
//     }
// };

// export const getLocationDetails = async (req: Request, res: Response) => {
// 	const payLoads = {
// 		location_id: req.query.location_id,
// 		limit: parseFloat(req.query.limit as string),
// 		offset: parseFloat(req.query.offset as string),
// 	};

// 	try {
// 		const data = await locationServices.getBuildingDetails(payLoads);
// 		res.status(200).json(data);
// 	} catch (error) {
// 		res.status(error.output?.statusCode ?? 500).json(error);
// 	}
// };

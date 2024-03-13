// /* eslint-disable no-nested-ternary */

// import { ResponseObject } from "src/commonInterfaces/commonInterface";
// import dbConnection from "../../db/dbConnection";
// import CategoryModel from "../../entities/category";
// import { apiResponseMessages } from "../../utils/constants";
// import EventModel from "../../entities/userModal";

// export class CategoryServices {
// 	static response: ResponseObject;

// 	/**
// 	 * User login
// 	 * @param data login object
// 	)
// 	 * @returns
// 	 */

// 	// redius query

// 	static getCategoryNameAndCount = async () => {
// 		try {
// 			// const keys = await getSecretKeys();
// 			const queryBuilder = await (
// 				await dbConnection.getRepository(CategoryModel)
// 			).createQueryBuilder("table1");

// 			queryBuilder.leftJoin(
// 				EventModel,
// 				"secondTable",
// 				"secondTable.category_id = table1.id"
// 			);

// 			const firstTableWithSecondTableData = await queryBuilder.getRawMany();

// 			console.log(firstTableWithSecondTableData);

// 			if ("eventDetails.length > 0") {
// 				this.response = {
// 					success: true,
// 					message: apiResponseMessages.event_found_success,
// 					// data: eventDetails,
// 				};
// 			} else {
// 				this.response = {
// 					success: false,
// 					message: apiResponseMessages.no_event_found_under_15km_area,
// 				};
// 			}
// 		} catch (error) {
// 			console.log(error);

// 			this.response = {
// 				success: false,
// 				message: apiResponseMessages.catch_error,
// 			};
// 		}
// 		return this.response;
// 	};
// }

// export default CategoryServices;

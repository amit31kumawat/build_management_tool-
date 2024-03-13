import bcrypt from "bcryptjs";

import { ResponseObject } from "src/commonInterfaces/commonInterface";
import dbConnection from "../../db/dbConnection";
import MaterialModal from "../../entities/materialModal";
import { IMaterialSchemaBase } from "./materialInterfaces";

class locationServices {
	private response: ResponseObject;

	/**
     * User signup
     * @param data login object
    )
     * @returns
     */

	async addMaterialDetails(data) {
		const {
			phone,
			user_id,
			location_id,
			property_id,
			type,
			quantity,
			amount,
			seller_name,
			paid_amount,
		} = data;
		const queryObject: IMaterialSchemaBase = {
			user_id: user_id,
			location_id: location_id,
			property_id: property_id,
			type: type,
			quantity: quantity,
			amount: amount,
			paid_amount: paid_amount,
			seller_name: seller_name,
			phone: phone,
			created_at: new Date(),
		};

		const materialModal = await dbConnection.getRepository(MaterialModal);
		const savedMaterialInfo = await materialModal.save(queryObject);

		if (savedMaterialInfo) {
			this.response = {
				success: true,
				message: "success",
				data: savedMaterialInfo,
			};
		} else {
			this.response = {
				success: false,
				message: "error_while_adding_material_details",
			};
		}
		return this.response;
	}
	async updateMaterialDeatils(data) {
		const { material_id, type, quantity, amount, seller_name, paid_amount } =
			data;
		const queryObject = {
			type: type,
			quantity: quantity,
			amount: amount,
			seller_name: seller_name,
			paid_amount: paid_amount,
		};

		const materialModal = await dbConnection.getRepository(MaterialModal);
		const findMaterialData = await materialModal.findOneBy({ id: material_id });

		if (findMaterialData && findMaterialData !== undefined) {
			const materialDataDeatils = await materialModal
				.createQueryBuilder()
				.update(MaterialModal)
				.set(queryObject)
				.where("id = :id", { id: findMaterialData.id })
				.execute();
			if (materialDataDeatils) {
				this.response = {
					success: true,
					message: "success",
				};
			} else {
				this.response = {
					success: false,
					message: "error_while_updating_location_details",
				};
			}
		} else {
			this.response = {
				success: false,
				message: "location_not_found",
			};
		}

		return this.response;
	}
	// async deleteLocation(locationId: string) {
	// 	const locationModal = await dbConnection.getRepository(LocationModel);
	// 	const findLocationData = await locationModal.findOneBy({
	// 		id: Number(locationId),
	// 	});

	// 	if (findLocationData && findLocationData !== undefined) {
	// 		const locationDataDeatils = await locationModal
	// 			.createQueryBuilder()
	// 			.update(LocationModel)
	// 			.set({ is_deleted: true })
	// 			.where("id = :id", { id: findLocationData.id })
	// 			.execute();
	// 		if (locationDataDeatils) {
	// 			this.response = {
	// 				success: true,
	// 				message: "success",
	// 			};
	// 		} else {
	// 			this.response = {
	// 				success: false,
	// 				message: "error_while_updating_location_details",
	// 			};
	// 		}
	// 	} else {
	// 		this.response = {
	// 			success: false,
	// 			message: "location_not_found",
	// 		};
	// 	}

	// 	return this.response;
	// }
	// async getLocationList(limitAndOffset) {
	// 	const { limit, offset } = limitAndOffset;
	// 	const locationModal = await dbConnection.getRepository(LocationModel);
	// 	const locationDataDetails = await locationModal
	// 		.createQueryBuilder("location")
	// 		// .select()
	// 		// .from(LocationModel, "location")
	// 		.limit(limit)
	// 		.offset(offset * limit)
	// 		.getMany();

	// 	console.log("locationDataDetails>>>>>>>>>>", locationDataDetails);

	// 	if (locationDataDetails) {
	// 		this.response = {
	// 			success: true,
	// 			message: "success",
	// 		};
	// 	} else {
	// 		this.response = {
	// 			success: false,
	// 			message: "error_while_updating_location_details",
	// 		};
	// 	}

	// 	return this.response;
	// }
}

export default new locationServices();

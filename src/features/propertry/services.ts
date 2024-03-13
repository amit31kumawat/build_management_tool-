import bcrypt from "bcryptjs";

import { ResponseObject } from "src/commonInterfaces/commonInterface";
import dbConnection from "../../db/dbConnection";
import MaterialModal from "src/entities/materialModal";
import { IProppertySchemaBase } from "./interfaces";
import PropertyModal from "src/entities/propertyModal";

class locationServices {
	private response: ResponseObject;

	/**
     * User signup
     * @param data login object
    )
     * @returns
     */

	async addPropertyDetails(data) {
		const {
			user_id,
			location_id,
			material_id,
			labour_id,
			name,
			price,
			type,
			size,
			plot_no,
			facing_side,
			phone,
			landmark,
			status,
			is_approved,
			is_selled,
			created_at,
		} = data;
		const queryObject: IProppertySchemaBase = {
			user_id: user_id,
			location_id: location_id,
			material_id: material_id,
			labour_id: labour_id,
			name: name,
			price: price,
			type: type,
			size: size,
			plot_no: plot_no,
			facing_side: facing_side,
			phone: phone,
			landmark: landmark,
			status: status,
			is_approved: is_approved,
			is_selled: is_selled,
			created_at: new Date(),
		};

		const propertyModal = await dbConnection.getRepository(PropertyModal);
		const savedPropertyInfo = await propertyModal.save(queryObject);

		if (savedPropertyInfo) {
			this.response = {
				success: true,
				message: "success",
				data: savedPropertyInfo,
			};
		} else {
			this.response = {
				success: false,
				message: "error_while_adding_material_details",
			};
		}
		return this.response;
	}
	async updatePropertyDeatils(data) {
		const {
			property_id,
			location_id,
			name,
			price,
			size,
			plot_no,
			facing_side,
			landmark,
			phone,
			is_selled,
		} = data;
		const queryObject = {
			name: name,
			price: price,
			size: size,
			plot_no: plot_no,
			facing_side: facing_side,
			landmark: landmark,
			phone: phone,
			is_selled: is_selled,
		};

		const propertyModal = await dbConnection.getRepository(MaterialModal);
		const findMaterialData = await propertyModal.findOneBy({ id: property_id });

		if (
			findMaterialData &&
			findMaterialData !== undefined &&
			findMaterialData.location_id === location_id
		) {
			const propertyDataDeatils = await propertyModal
				.createQueryBuilder()
				.update(MaterialModal)
				.set(queryObject)
				.where("id = :id", { id: findMaterialData.id })
				.execute();
			if (propertyDataDeatils) {
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
	async getPropertyList(limitAndOffset) {
		const { limit, offset, user_id, property_id, location_id } = limitAndOffset;
		const propertyModal = await dbConnection.getRepository(PropertyModal);
		let queryBuilder = propertyModal
			.createQueryBuilder("propertyList")
			// .select()
			// .from(PropertyModal, "property")
			.where("id = :location_id", { location_id });

		if (property_id !== undefined && user_id !== undefined) {
			queryBuilder = queryBuilder
				.andWhere("property_id = :property_id", { property_id })
				.andWhere("user_id = :user_id", { user_id });
		}

		const propertyDataDetails = await queryBuilder
			.limit(limit)
			.offset(offset * limit)
			.getMany();

		console.log("locationDataDetails>>>>>>>>>>", propertyDataDetails);

		if (propertyDataDetails) {
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

		return this.response;
	}
}

export default new locationServices();

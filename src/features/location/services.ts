import bcrypt from "bcryptjs";

import { ResponseObject } from "src/commonInterfaces/commonInterface";
import dbConnection from "../../db/dbConnection";
import LocationModel from "../../entities/locationModal";
import { ILocationSchemaBase } from "./locationInterfaces";

class locationServices {
	private response: ResponseObject;

	/**
     * User signup
     * @param data login object
    )
     * @returns
     */

	async addLocationDeatils(data) {
		const {
			area,
			phone,
			user_id,
			city,
			colony_name,
			country,
			zip_code,
			state,
			image,
		} = data;
		const queryObject: ILocationSchemaBase = {
			user_id: user_id,
			colony_name: colony_name,
			area: area,
			city: city,
			country: country,
			zip_code: zip_code,
			state: state,
			image: image,
			is_active: true,
			phone: phone,
			is_deleted: false,
			created_at: new Date(),
		};

		const locationModal = await dbConnection.getRepository(LocationModel);
		const savedlocationData = await locationModal.save(queryObject);

		if (savedlocationData) {
			this.response = {
				success: true,
				message: "success",
				data: savedlocationData,
			};
		} else {
			this.response = {
				success: false,
				message: "error_while_adding_location_details",
			};
		}
		return this.response;
	}
	async updateLocationDeatils(data) {
		const {
			area,
			phone,
			location_id,
			city,
			colony_name,
			country,
			zip_code,
			state,
			image,
		} = data;
		const queryObject = {
			colony_name: colony_name,
			area: area,
			city: city,
			country: country,
			zip_code: zip_code,
			state: state,
			image: image,
			phone: phone,
		};

		const locationModal = await dbConnection.getRepository(LocationModel);
		const findLocationData = await locationModal.findOneBy({ id: location_id });

		if (findLocationData && findLocationData !== undefined) {
			const locationDataDeatils = await locationModal
				.createQueryBuilder()
				.update(LocationModel)
				.set(queryObject)
				.where("id = :id", { id: findLocationData.id })
				.execute();
			if (locationDataDeatils) {
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
	async deleteLocation(locationId: string) {
		const locationModal = await dbConnection.getRepository(LocationModel);
		const findLocationData = await locationModal.findOneBy({
			id: Number(locationId),
		});

		if (findLocationData && findLocationData !== undefined) {
			const locationDataDeatils = await locationModal
				.createQueryBuilder()
				.update(LocationModel)
				.set({ is_deleted: true })
				.where("id = :id", { id: findLocationData.id })
				.execute();
			if (locationDataDeatils) {
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
	async getLocationList(limitAndOffset) {
		const { limit, offset } = limitAndOffset;
		const locationModal = await dbConnection.getRepository(LocationModel);
		const locationDataDetails = await locationModal
			.createQueryBuilder("location")
			// .select()
			// .from(LocationModel, "location")
			.limit(limit)
			.offset(offset * limit)
			.getMany();

		console.log("locationDataDetails>>>>>>>>>>", locationDataDetails);

		if (locationDataDetails) {
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

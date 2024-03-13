import bcrypt from "bcryptjs";

import { ResponseObject } from "src/commonInterfaces/commonInterface";
import dbConnection from "../../db/dbConnection";
import UserModel from "../../entities/userModal";

class locationServices {
	private response: ResponseObject;

	/**
     * User signup
     * @param data login object
    )
     * @returns
     */

	async forgotPassword(email: string) {
		const userModal = await dbConnection.getRepository(UserModel);
		const userInfo = await userModal.findOneBy({ email });

		if (userInfo === undefined) {
			return (this.response = {
				success: false,
				message: "user_not_found",
			});
		}

		const otp = Math.floor(1000 + Math.random() * 9000);
		const encriptedOtp = await bcrypt.hash(otp.toString(), 16);
		const updatedOtpIntoTable = await userModal
			.createQueryBuilder()
			.update(UserModel)
			.set({ otp: encriptedOtp })
			.where("email = :email", { email: email })
			.execute();

		if (encriptedOtp) {
			this.response = {
				success: true,
				message: "otp_send",
				data: encriptedOtp,
			};
		} else {
			this.response = {
				success: false,
				message: "error_while_sending_otp",
			};
		}
		return this.response;
	}
	async verifyOtp(otpData) {
		const { encriptedOtp, otp } = otpData;

		const userModal = await dbConnection.getRepository(UserModel);

		const compairOtp = await bcrypt.compare(otp.toString(), encriptedOtp);
		console.log("compairOtp:>>>>> ", compairOtp);
		
		if (compairOtp) {
			const updatedOtpIntoTable = await userModal
				.createQueryBuilder()
				.update(UserModel)
				.set({ otp: "" })
				.where("otp = :otp", { otp: encriptedOtp })
				.execute();

			this.response = {
				success: true,
				message: "otp_verify",
			};
		} else {
			this.response = {
				success: false,
				message: "error_while__otp",
			};
		}
		return this.response;
	}
	async resetPassword(resetPasswordData) {
		const { encriptedOtp newPassword} = resetPasswordData;

		const userModal = await dbConnection.getRepository(UserModel);
		
		if (compairOtp) {
			const updatedOtpIntoTable = await userModal
				.createQueryBuilder()
				.update(UserModel)
				.set({ password: newPassword })
				.where("otp = :otp", { otp: encriptedOtp })
				.execute();

			this.response = {
				success: true,
				message: "otp_verify",
			};
		} else {
			this.response = {
				success: false,
				message: "error_while__otp",
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

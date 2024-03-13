/* eslint-disable no-nested-ternary */

import { ResponseObject } from "../../commonInterfaces/commonInterface";
import dbConnection from "../../db/dbConnection";
import EventModel from "../../entities/userModal";
import { apiResponseMessages } from "../../utils/constants";

export class EventServices {
	static response: ResponseObject;

	/**
	 * User login
	 * @param data login object
	)
	 * @returns
	 */

	// redius query

	static getNearByEvent = async ({
		center_lat,
		center_long,
		limit,
		offset,
		category_id,
	}: {
		center_lat: number;
		center_long: number;
		limit?: number;
		offset?: number;
		category_id?: number;
	}) => {
		try {
			let fetchDataQuery = `
				WITH EventsWithDistance AS (
					SELECT
						id,
						uuid,
						name,
						image,
						description,
						status,
						latitude,
						longitude,
						category_id,
						(SELECT name FROM category WHERE id = category_id) as category_name,
						(6371 * acos(cos(radians(${center_lat})) * cos(radians(latitude)) * cos(radians(longitude) - radians(${center_long})) + sin(radians(${center_lat})) * sin(radians(latitude)))) AS distance
					FROM
						event
					HAVING
						distance < 1
				)
				SELECT
					E.*,
					C.category_count
				FROM
					EventsWithDistance E
				JOIN (
					SELECT
						category_id,
						COUNT(*) AS category_count
					FROM
						EventsWithDistance
					GROUP BY
						category_id
				) C ON E.category_id = C.category_id
				${category_id ? `WHERE E.category_id = ${category_id}` : ""} 
				ORDER BY
					distance 
			`;

			// Apply LIMIT and OFFSET conditionally
			if (limit) {
				fetchDataQuery += `LIMIT ${limit} `;
				fetchDataQuery += `OFFSET ${limit * offset} `;
			}

			const eventDetails = await (
				await dbConnection.getRepository(EventModel)
			).query(fetchDataQuery);

			console.log("fetchDataQuery>>>>>", fetchDataQuery);

			console.log("eventDetails>>>>>>>>>>>>", eventDetails);

			if (eventDetails.length > 0) {
				this.response = {
					success: true,
					message: apiResponseMessages.event_found_success,
					data: eventDetails,
				};
			} else {
				this.response = {
					success: false,
					message: apiResponseMessages.no_event_found_under_15km_area,
				};
			}
		} catch (error) {
			console.log(error);

			this.response = {
				success: false,
				message: apiResponseMessages.catch_error,
			};
		}
		return this.response;
	};

	// get all events

	static getAllEvent = async ({
		limit,
		offset,
	}: {
		offset?: number;
		limit?: number;
	}) => {
		const skip = limit * offset;

		try {
			const eventDetails = await (
				await dbConnection.getRepository(EventModel)
			).find({ skip: skip, take: limit });
			if (eventDetails.length > 0) {
				this.response = {
					success: true,
					message: apiResponseMessages.event_found_success,
					data: eventDetails,
				};
			} else {
				this.response = {
					success: false,
					message: apiResponseMessages.event_not_found,
				};
			}
		} catch (error) {
			console.log("errror", error);
			this.response = {
				success: false,
				message: apiResponseMessages.catch_error,
			};
		}
		return this.response;
	};
	// add location Data

	static getAllEvent = async ({
		limit,
		offset,
	}: {
		offset?: number;
		limit?: number;
	}) => {
		const skip = limit * offset;

		try {
			const eventDetails = await (
				await dbConnection.getRepository(EventModel)
			).find({ skip: skip, take: limit });
			if (eventDetails.length > 0) {
				this.response = {
					success: true,
					message: apiResponseMessages.event_found_success,
					data: eventDetails,
				};
			} else {
				this.response = {
					success: false,
					message: apiResponseMessages.event_not_found,
				};
			}
		} catch (error) {
			console.log("errror", error);
			this.response = {
				success: false,
				message: apiResponseMessages.catch_error,
			};
		}
		return this.response;
	};
}

export default EventServices;

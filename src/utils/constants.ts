export const apiResponseMessages = {
	catch_error: "catch_error",
	event_found_success: "event_found_success",
	event_not_found: "event_not_found",
	no_event_found_under_15km_area: "no_event_found_under_15km_area",
};

export const labels = {
	limit: "limit",
	nextId: "nextId",
};

export const baseRoutes = "/api/v1";

export const subRoutes = {
	ADD_LOCATION_DATA: "/add-location",
	UPDATE_LOCATION_DATA: "/location-data",
	GET_LOCATION_DATA: "/location-list/:limit/:offset",
	DELETE_LOCATION: "/delete-location/:id",
	ADD_MATERIAL: "/add-material",
	UPDATE_MATERIAL: "/material-data",
	GET_MATERIAL_LIST: "/material-list/:userId/:locationId",
	ADD_PROPERTY: "/add-property",
	UPDATE_PROPERTY: "/property-data",
	GET_PROPERTY_LIST_BY_LOCATION_ID: "/property-list/:locationId/:limit/:offset",
	GET_PROPERTY_LIST_BY_LOCATION_ID_AND_USER_ID:
		"/property-list/:userId/:locationId/:limit/:offset",
	FORGOT_PASSWORD: "/forgot-password",
	OTP_VERIFY: "/otp-verify",
	RESET_PASSWORD: "/reset-password",
};

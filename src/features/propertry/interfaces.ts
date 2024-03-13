import { IPrimaryId } from "src/commonInterfaces/commonInterface";

export interface IProppertySchemaBase {
	user_id: string;
	location_id: string;
	material_id: string;
	labour_id: string;
	name: string;
	price: string;
	type: string;
	size: string;
	plot_no: string;
	facing_side: string;
	phone: string;
	landmark: string;
	status: string;
	is_approved: string;
	is_selled: boolean;
	created_at: Date;
}

export type IPropertySchema = IPrimaryId & IProppertySchemaBase;

import { IPrimaryId } from "src/commonInterfaces/commonInterface";

export interface IMaterialSchemaBase {
	user_id: string;
	location_id: string;
	property_id: string;
	type: string;
	quantity: string;
	amount: number;
	seller_name: string;
	paid_amount: number;
	phone: string;
	created_at: Date;
}

export type IMaterialSchema = IPrimaryId & IMaterialSchemaBase;

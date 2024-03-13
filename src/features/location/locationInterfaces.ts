import { IPrimaryId } from "src/commonInterfaces/commonInterface";

export interface ILocationSchemaBase {
	user_id: string;
	area: string;
	colony_name: string;
	city: string;
	state: string;
	country: string;
	zip_code: string;
	phone: string;
	is_active: boolean;
	image: string;
	is_deleted: boolean;
	created_at?: Date;
}

export type ILocationSchema = IPrimaryId & ILocationSchemaBase;

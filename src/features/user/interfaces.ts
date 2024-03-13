import { IPrimaryId } from "src/commonInterfaces/commonInterface";

export interface IUserSchemaBase {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
	phone: string;
	account_type: string;
	is_active: boolean;
	address: object;
	image?: string;
	working_days?: number;
	amount_per_day?: number;
	paid_amount?: number;
	otp?: string;
	created_at?: string;
}

export type IUserSchema = IPrimaryId & IUserSchemaBase;

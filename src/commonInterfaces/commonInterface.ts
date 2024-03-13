export declare interface ResponseObject {
	success: boolean;
	message?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data?: any;
	totalCount?: number;
	token?: object;
	error?: unknown;
}

export interface IName {
	name: string;
}

export interface IPrimaryId {
	id: number;
}

export interface envData {
	env: string;
	port: number;
	bucket: string;
	region: string;
	secretManagerKey: string;
	profile: string;
}

export interface IToken {
	token: string;
}

export interface ILocation {
	lat: string;
	lng: string;
}

export interface DbConnection {
	host: string;
	port: number;
	username: string;
	password: string;
	database: string;
}

export interface ISecretKeys {
	jwt_secret: string;
	crypto_key: string;
	google_places_api_key: string;
	database_host: string;
	database_username: string;
	database_password: string;
	database_name: string;
	nodemailer_email: string;
	nodemailer_password: string;
	stripe_secret_key: string;
	stripe_webhook_key: string;
	mailgun_key: string;
}

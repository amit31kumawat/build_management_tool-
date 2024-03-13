declare global {
	namespace Express {
		export interface Request {
			id: string;
			token: string;
		}
	}
}

export {};

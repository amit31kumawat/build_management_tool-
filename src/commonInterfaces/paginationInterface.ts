export interface PaginationParams {
	nextId?: number | null;
	limit?: number;
}

export interface PaginationMeta<T> {
	total: number;
	nextId: T[keyof T] | null;
	previousId: T[keyof T] | null;
}

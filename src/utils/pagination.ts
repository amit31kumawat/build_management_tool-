import { PaginationMeta } from "src/commonInterfaces/paginationInterface";

/**
 * A util function to fetch pagination meta.
 *
 * @param  {T[]} data
 * @param  {keyofT} key
 * @returns {PaginationMeta}
 */
const getPaginationMeta = <T>(data: T[], key: keyof T): PaginationMeta<T> => {
	const { length, 0: first, [length - 1]: last } = data;

	return {
		previousId: first ? first[key] : null,
		nextId: last ? last[key] : null,
		total: length,
	};
};

export default getPaginationMeta;

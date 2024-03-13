import Joi from "joi";

import { labels } from "../utils/constants";

const joiObject = Joi.object().options({ abortEarly: false });

export const paginationTypeValidation = joiObject.keys({
	limit: Joi.number().label(labels.limit).required(),
	nextId: Joi.number().label(labels.nextId).optional(),
});

import env from "../env.json";

const envConfig = () => {
	const nodeEnv = process.env.NODE_ENV || "local";
	return env[nodeEnv];
};

export default envConfig;

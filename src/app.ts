import awsServerlessExpress from "aws-serverless-express";

import cors from "cors";
import express from "express";
import "reflect-metadata";

import config from "./config/envConfig";
import dbConnection from "./db/dbConnection";

import { baseRoutes } from "./utils/constants";

import rootRouter from "./rootRouter";
const envConfig = config();
const app = express();

const { port } = envConfig;

app.use(cors());

dbConnection.getDataSource();

app.use(express.json({ limit: "1mb" })); // For JSON requests
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use(baseRoutes, rootRouter);
app.listen(port, () => {
	console.log(`Server is running on ${port}`);
});
const server = awsServerlessExpress.createServer(app);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
module.exports.handler = (event: any, context: any) =>
	awsServerlessExpress.proxy(server, event, context);

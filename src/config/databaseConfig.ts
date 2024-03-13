import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

/**
 * Database connection details as per environment configuration
 * @returns object with key  either data or err
 */
const dbConnectionDetails = async () =>
	new Promise((resolve) => {
		try {
			// getSecretKeys()
			// 	.then((keys) => {
			// 		const dataSource = new DataSource({
			// 			type: "mysql",
			// 			host: keys.database_host,
			// 			port: 3306,
			// 			username: keys.database_username,
			// 			password: keys.database_password,
			// 			database: keys.database_name,
			// 			synchronize: false,
			// 			connectTimeout: 30000,
			// 			logging: true,
			// 			name: "default",
			// 			entities: ["src/entities/*{.ts,.js}"],
			// 			namingStrategy: new SnakeNamingStrategy(),
			// 			migrations: ["src/migrations/**/*{.ts,.js}"],
			// 			subscribers: ["../src/subscriber/**/*{.ts,.js}"],
			// 		});

			// 		dataSource.initialize().then(() => {
			// 			console.log("_____initialized_____");
			// 			resolve(dataSource);
			// 		});
			// 	})
			// 	.catch((error) => reject(error));
			const dataSource = new DataSource({
				type: "mysql",
				host: "localhost",
				port: 3306,
				username: "root",
				password: "",
				database: "build-state-management",
				synchronize: false,
				connectTimeout: 30000,
				logging: true,
				name: "default",
				entities: ["src/entities/*{.ts,.js}"],
				namingStrategy: new SnakeNamingStrategy(),
				// migrations: ["src/migrations/**/*{.ts,.js}"],
				// subscribers: ["../src/subscriber/**/*{.ts,.js}"],
			});

			dataSource.initialize().then(() => {
				console.log("_____initialized_____");
				resolve(dataSource);
			});
		} catch (e) {
			resolve(undefined);
		}
	});

export default dbConnectionDetails;

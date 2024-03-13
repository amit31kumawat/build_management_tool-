import { DataSource, EntityTarget } from "typeorm";
import dbConnectionDetails from "../config/databaseConfig";

class DbConnection {
	connectionInfo: Promise<DataSource> | undefined;
	/**
	 * Get database connection.
	 */
	public async getDataSource(): Promise<DataSource> {
		return new Promise((resolve) => {
			if (!this.connectionInfo) {
				dbConnectionDetails().then((connection: Promise<DataSource>) => {
					this.connectionInfo = connection;
					resolve(this.connectionInfo);
				});
			} else {
				resolve(this.connectionInfo);
			}
		});
	}
	public async getRepository<T>(model: EntityTarget<T>) {
		const dbConnection = await this.getDataSource();
		const repository = dbConnection.getRepository(model);
		return repository;
	}
}
export default new DbConnection();

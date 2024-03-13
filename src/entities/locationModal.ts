import { ILocationSchemaBase } from "src/features/location/locationInterfaces";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("location")
class LocationModel implements ILocationSchemaBase {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	user_id: string;

	@Column()
	phone: string;

	@Column()
	area: string;

	@Column()
	colony_name: string;

	@Column()
	city: string;

	@Column()
	country: string;

	@Column()
	zip_code: string;

	@Column()
	state: string;

	@Column()
	is_active: boolean;

	@Column()
	image: string;

	@Column()
	is_deleted: boolean;

	@Column()
	created_at: Date;
}

export default LocationModel;

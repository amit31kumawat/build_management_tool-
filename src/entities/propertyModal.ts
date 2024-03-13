import { IPropertySchema } from "src/features/propertry/interfaces";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("property")
class PropertyModal implements IPropertySchema {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	user_id: string;

	@Column()
	location_id: string;

	@Column()
	material_id: string;

	@Column()
	labour_id: string;

	@Column()
	name: string;

	@Column()
	price: string;

	@Column()
	type: string;

	@Column()
	size: string;

	@Column()
	plot_no: string;

	@Column()
	facing_side: string;

	@Column()
	landmark: string;

	@Column()
	is_approved: string;

	@Column()
	phone: string;

	@Column()
	status: string;

	@Column()
	is_selled: boolean;

	@Column()
	created_at: Date;
}

export default PropertyModal;

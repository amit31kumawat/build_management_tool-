import { IMaterialSchema } from "src/features/material/materialInterfaces";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("material")
class MaterialModal implements IMaterialSchema {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	user_id: string;

	@Column()
	location_id: string;

	@Column()
	property_id: string;

	@Column()
	type: string;

	@Column()
	quantity: string;

	@Column()
	amount: number;

	@Column()
	seller_name: string;

	@Column()
	paid_amount: number;

	@Column()
	phone: string;

	@Column()
	created_at: Date;
}

export default MaterialModal;

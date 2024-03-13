import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IUserSchema } from "../features/user/interfaces";

@Entity("user")
class UserModel implements IUserSchema {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	first_name: string;

	@Column()
	last_name: string;

	@Column()
	email: string;

	@Column()
	password: string;

	@Column()
	phone: string;

	@Column()
	account_type: string;

	@Column()
	is_active: boolean;

	@Column("json")
	address: object;

	@Column({ nullable: true })
	image?: string;

	@Column({ nullable: true })
	working_days?: number;

	@Column({ nullable: true })
	amount_per_day?: number;

	@Column({ nullable: true })
	paid_amount?: number;

	@Column({ nullable: true })
	otp?: string;

	@Column()
	created_at: string;
}

export default UserModel;

import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToMany,
	JoinTable,
} from "typeorm";
import { Skill } from "./Skill";

@Entity()
export class Wilder {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	city: string;

	@ManyToMany(() => Skill, (skill) => skill.wilder, { eager: true })
	@JoinTable()
	skills: Skill[];

	// @ManyToMany(() => Skill)
	// @JoinTable()
	// skills: Skill[];
}

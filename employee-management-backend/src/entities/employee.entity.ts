import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { EmployeeDocument } from './employee-document.entity';

@Entity('t_employees')
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  job_title: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  salary: number;

  @ManyToOne(() => User, (user) => user.employees, { onDelete: 'CASCADE' })
  user: User;

  @OneToMany(() => EmployeeDocument, (document) => document.employee)
  documents: EmployeeDocument[];
}

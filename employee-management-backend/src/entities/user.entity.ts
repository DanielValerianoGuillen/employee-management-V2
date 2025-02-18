import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Employee } from './employee.entity';

@Entity('t_users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  first_name: string;

  @Column({ length: 255 })
  last_name: string;

  @Column({ length: 255, unique: true })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column({ default: 'EMPLOYEE' }) // 'HR' para Recursos Humanos, 'EMPLOYEE' para empleados normales
  role: string;

  @OneToMany(() => Employee, (employee) => employee.user)
  employees: Employee[];
}

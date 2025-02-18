import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { DocumentType } from './document-type.entity';
import { Employee } from './employee.entity';

@Entity('t_employee_documents')
export class EmployeeDocument {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => DocumentType, { eager: true })
  document_type: DocumentType;

  @ManyToOne(() => Employee, (employee) => employee.documents, { onDelete: 'CASCADE' })
  employee: Employee;

  @Column({ length: 255 })
  file_path: string;

  @Column({ default: true })
  is_active: boolean;
}

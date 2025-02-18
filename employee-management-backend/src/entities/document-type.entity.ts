import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('t_document_types')
export class DocumentType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;
}

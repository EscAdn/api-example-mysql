import { Entity, Column } from 'typeorm';
import { EntityColumn } from './../../config/base.entity';

@Entity('users')
export class User extends EntityColumn {
  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  telephone: string;
}

import { Entity, Column, ManyToOne } from 'typeorm';
import { EntityColumn } from './../../config/base.entity';
import { Address } from './../../addresses/entities/address.entity';

@Entity('nodes')
export class Node extends EntityColumn {
  @Column()
  details: string;

  @Column()
  ports: number;

  @ManyToOne(() => Address, (address) => address.nodes)
  address: Address;
}

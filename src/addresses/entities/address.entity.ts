import { Entity, Column, OneToMany } from 'typeorm';
import { EntityColumn } from './../../config/base.entity';
import { Node } from './../../nodes/entities/node.entity';

@Entity('addresses')
export class Address extends EntityColumn {
  @Column()
  address: string;

  @OneToMany(() => Node, (nodes) => nodes.address)
  nodes: Node[];
}

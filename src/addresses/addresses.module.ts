import { Module } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { AddressesController } from './addresses.controller';

@Module({
  imports: [],
  controllers: [AddressesController],
  providers: [AddressesService],
})
export class AddressesModule {}

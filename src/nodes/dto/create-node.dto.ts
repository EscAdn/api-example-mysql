import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateNodeDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nombre/Ubicacion/Destalles del Nodo',
  })
  details: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Numero de puertos del nodo',
  })
  ports: number;
}

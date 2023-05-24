import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsEmail,
  MinLength,
  IsString,
  IsOptional,
} from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    description: 'Nombre completo del usuario',
    default: 'EscAdn',
  })
  @IsOptional()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Correo electronico con el que accedera al sistema',
  })
  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description:
      'Contraseña de acceso, debe tener minimo 8 caracteres (numeros, letras o simbolos)',
  })
  @IsOptional()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @ApiProperty({
    description: 'Numero de telefonico',
  })
  @IsOptional()
  @IsString()
  telephone: string;
}

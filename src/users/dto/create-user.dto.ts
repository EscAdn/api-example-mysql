import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, MinLength, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nombre completo del usuario',
    default: 'EscAdn',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Correo electronico con el que accedera al sistema',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description:
      'Contraseña de acceso, debe tener minimo 8 caracteres (numeros, letras o simbolos)',
  })
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @ApiProperty({
    description: 'Numero de telefonico',
  })
  @IsString()
  telephone: string;
}

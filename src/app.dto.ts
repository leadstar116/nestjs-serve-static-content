import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthSignInDto {
  @ApiProperty({
    name: 'password',
    description: 'Password',
  })
  @IsString()
  @IsNotEmpty()
  public readonly password: string;
}

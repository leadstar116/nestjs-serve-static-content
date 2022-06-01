import { Controller, Post, Request, Body } from '@nestjs/common';
import { AuthSignInDto } from './app.dto';
import * as bcrypt from 'bcrypt';

const pw = '$2b$10$aWl5SPpuT0BMVvUTTT0zQ.O5Ju6BYjgRyQWyo8g/5PsctZYWDKSd2';
@Controller()
export class AppController {
  @Post('signin')
  async signin(@Request() req, @Body() params: AuthSignInDto) {
    const result = bcrypt.compareSync(params.password, pw);
    return result;
  }
}

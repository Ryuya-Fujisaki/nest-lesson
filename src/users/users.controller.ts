/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Body, Controller, Param, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body() createUsers) {
    return createUsers;
  }
}

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// The @Controller() decorator is a class decorator that defines a controller.
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // The @Get() decorator is a method decorator that defines a route handler.
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

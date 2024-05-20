import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';

// The @Module() decorator provides metadata that Nest makes use of to organize the application structure.
@Module({
  // The imports array is where you define the modules that are imported into this module.
  imports: [],
  // The controllers array is where you define the controllers that are part of this module.
  controllers: [AppController, CoffeesController],
  // The providers array is where you define the services that are part of this module.
  providers: [AppService],
})
export class AppModule {}

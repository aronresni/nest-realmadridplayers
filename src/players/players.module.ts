import { Module } from '@nestjs/common';
import { playersService } from './players.service';
import { playersController } from './players.controller';

@Module({
  providers: [playersService],
  controllers: [playersController]
})
export class PlayersModule {}

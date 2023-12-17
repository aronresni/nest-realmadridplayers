import {Controller, Get} from '@nestjs/common'; 
import {playersService} from './players.service';

@Controller ('players')
export class playersController {
    constructor(private PlayersService: playersService) {
    }
    @Get()
    public players (): any {
        return this.PlayersService.players;
    }
}
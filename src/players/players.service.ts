import { Injectable } from '@nestjs/common'; 

@Injectable ()
export class playersService {
    public players = [
        {
            name: 'Thibaut Courtois',
            imgURL: 'https://ejemplo.com/imagen1.jpg',
            info: 'Portero - Información sobre Thibaut Courtois.',
          },
          {
            name: 'Dani Carvajal',
            imgURL: 'https://ejemplo.com/imagen2.jpg',
            info: 'Defensa - Información sobre Dani Carvajal.',
          },
          {
            name: 'Éder Militão',
            imgURL: 'https://ejemplo.com/imagen3.jpg',
            info: 'Defensa - Información sobre Éder Militão.',
          },
          {
            name: 'Sergio Ramos',
            imgURL: 'https://ejemplo.com/imagen4.jpg',
            info: 'Defensa - Información sobre Sergio Ramos.',
          },
          {
            name: 'Marcelo',
            imgURL: 'https://ejemplo.com/imagen5.jpg',
            info: 'Defensa - Información sobre Marcelo.',
          },
          {
            name: 'Luka Modric',
            imgURL: 'https://ejemplo.com/imagen6.jpg',
            info: 'Centrocampista - Información sobre Luka Modric.',
          },
          {
            name: 'Casemiro',
            imgURL: 'https://ejemplo.com/imagen7.jpg',
            info: 'Centrocampista - Información sobre Casemiro.',
          },
          {
            name: 'Toni Kroos',
            imgURL: 'https://ejemplo.com/imagen8.jpg',
            info: 'Centrocampista - Información sobre Toni Kroos.',
          },
          {
            name: 'Karim Benzema',
            imgURL: 'https://ejemplo.com/imagen9.jpg',
            info: 'Delantero - Información sobre Karim Benzema.',
          },
          {
            name: 'Eden Hazard',
            imgURL: 'https://ejemplo.com/imagen10.jpg',
            info: 'Delantero - Información sobre Eden Hazard.',
          },
          {
            name: 'Vinícius Júnior',
            imgURL: 'https://ejemplo.com/imagen11.jpg',
            info: 'Delantero - Información sobre Vinícius Júnior.',
          },
      
    ];
}
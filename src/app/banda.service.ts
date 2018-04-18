import {Injectable} from '@angular/core';

import { Banda } from './banda';
import { BANDAS } from './bandas-falsas';
import { resolve } from 'url';

@Injectable()
export class BandaService {
    getBandas(): Promise<Banda[]> {
        //return Promise.resolve(BANDAS);

        return new Promise(resolve => {
            // simula latencia del servidor de 3 segundos
            setTimeout(() => resolve(BANDAS), 3000);
        });
    };
}
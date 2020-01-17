import { Injectable, isDevMode } from '@angular/core';

import { environment as devEnvironment } from '../../environments/environment';
import { environment as prodEnvironment } from '../../environments/environment.prod';



@Injectable({
  providedIn: 'root'
})

export class DataService {

  // tslint:disable-next-line: ban-types
  baseUrl: String = '';

  constructor() {
    if (isDevMode) {

    } else {
      this.baseUrl = `${prodEnvironment.prodBaseURL}post`;
    }
  }
}

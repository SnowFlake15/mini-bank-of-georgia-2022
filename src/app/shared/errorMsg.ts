import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ErrorMsg {

  error = new Subject<string>();

  constructor() {
  }
}

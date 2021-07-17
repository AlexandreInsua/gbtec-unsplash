import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  filter = new Subject<string>()

  constructor() { }
}

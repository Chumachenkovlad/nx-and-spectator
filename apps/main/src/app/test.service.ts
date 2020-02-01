import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  getData() {
    return of('data')
  }
}

import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(username: string, password: string) {
    if(username=='mani' && password=='2004'){
      return 200;
    }
    else {
      return 403;
    }
  }
}

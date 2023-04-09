import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  validLogin:boolean = false;

  login(username:string, password:string){
    //POST here
    if (username == 'admin' && password == 'admin') {
      this.validLogin = true;

      this.router.navigate(['/private/dashboard']); //
    } else {
      this.validLogin = false;
    }
  }

  logOut(){
    this.validLogin = false;
  }

  isLoggedIn(){
    return this.validLogin;
  }
}

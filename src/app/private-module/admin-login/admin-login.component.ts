import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { 
  FormBuilder,
  FormGroup,
  Validators 
} from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  username: string;
  password: string;

  errorMessage: string;

  constructor(private authService: AuthService, private http: HttpClient, private router: Router) {}

  login() {
    /*
    if EMAIL and PASSWORD are not ''
        POST to api
        if VALID
          reroute
        return
        
    WARN
    
    */

    if(this.username == 'admin' && this.password == 'admin'){
      /*
      const body = {
        email: this.username,
        password: this.password
      };
      
      MOVE TO AUTHGUARDSERVICE 
      
      this.http.post('/api/login', body).subscribe(response => {
        console.log('Response:', response);
        // CHECK IF VALID
      }, error => {
        console.error('Error:', error);
        // handle login error here
      });
      */
      this.authService.login(this.username, this.password);

      

    }else{
      this.errorMessage = 'Please enter a valid password and Email!';
    }
    
  }
}

import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth-service';
import {Router} from '@angular/router';
import {User} from '../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userModel: User;
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) {
    this.errorMessage = '';
    this.userModel = new User(0, '', '', '', '');
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
  }

  ngOnInit() {
  }

  login() {
    this.errorMessage = '';
    this.authService.logIn(this.userModel)
      .subscribe(data => {
          this.router.navigate(['/home']);
        }, err => {
          this.errorMessage = 'Attenzione :  Username e/o password non sono corretti';
        }
      );
  }

}

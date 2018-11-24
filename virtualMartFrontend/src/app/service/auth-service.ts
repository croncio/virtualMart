import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../model/user';
import {Observable, throwError} from 'rxjs';
import 'rxjs/Rx';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ResponseWrapper} from '../model/response-wrapper';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {
  }

  logIn(credenziali: User): Observable<string> {
    const body = new HttpParams().set('username', credenziali.username).set('password', credenziali.password);
    return this.http
      .post<ResponseWrapper<User>>(environment.backendUrl + '/login', body, {observe: 'response'}).map(resp => {
        localStorage.setItem('token', resp.headers.get('X-Auth'));
        localStorage.setItem('currentUser', JSON.stringify(credenziali));
      })
      .catch(this.handleErrorsObs);
  }


  logOut() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  handleErrorsObs(error: any): Observable<any> {
    return throwError(error.message || error);
  }
}

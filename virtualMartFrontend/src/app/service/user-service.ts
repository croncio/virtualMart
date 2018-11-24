import {Injectable} from '@angular/core';
import {CommonService} from './common.service';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public commonService: CommonService<User>, public commonServiceForList: CommonService<Array<User>>) {
  }

  static getUserByLocalStorage(): User {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
}

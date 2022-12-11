import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: IUser | null = null;

  get isLogged() {
    return !!this.currentUser;
  }

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string) {
    
  }

  register(email: string, password: string) {
    
  }

  logout() {
    
  }
}

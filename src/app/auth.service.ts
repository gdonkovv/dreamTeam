import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { TeamsService } from './dream-team/teams.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  get isLogged() {
    let user = this.getUserData();
    if (user) {
      return true;
    } else {
      return false;
    }
  }

  constructor(
    private router: Router,
    private angularFireAuth: AngularFireAuth,
    private ngZone: NgZone
  ) {
    this.angularFireAuth.onAuthStateChanged(user => {
      if (user) {
        user?.getIdToken()
          .then(idToken => {

            let userObj = {
              user: {
                email: user.email,
                id: user.uid
              },
              token: idToken
            };

            sessionStorage.setItem('userData', JSON.stringify(userObj));
            ngZone.run(() => {
              this.router.navigate(['']);
            })
          });
      } else {
        ngZone.run(() => {
          this.router.navigate(['login']);
        })
      }
    })
  }

  login(email: string, password: string, OnSuccess: any, OnError: any) {
    this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
        OnSuccess();
        this.router.navigate(['']);
      })
      .catch(error => {
        console.log(error);
        OnError();
      });

  }

  register(email: string, password: string, OnSuccess: any, OnError: any) {
    this.angularFireAuth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        OnSuccess();
      })
      .catch(error => {
        console.log(error);
        OnError();
      })
  }

  logout() {
    this.angularFireAuth.signOut()
      .then(() => {
        sessionStorage.setItem("userData", "");
      })
      .catch((error) => console.log(error));
  }


  getUserData() {
    let userData = sessionStorage.getItem('userData');
    if (userData) {
      return JSON.parse(userData);
    } else {
      return null;
    }
  }
}

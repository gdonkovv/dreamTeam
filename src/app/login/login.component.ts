import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorBox: string = "";

  constructor(
    private authService: AuthService
  ) { }

  handleLogin(formData: { email: string, password: string }, form: NgForm) {
    this.authService.login(formData.email, formData.password,
      () => {
        console.log("login successful");
      },
      () => {
        form.reset({ email: formData.email });
        this.errorBox = "Invalid email or password";
      });
  }

}

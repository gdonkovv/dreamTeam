import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorBox: string = "";

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  handleRegister(formData: { email: string, password: string }, form: NgForm) {
    this.authService.register(formData.email, formData.password,
      () => {
        console.log("register successful");
      },
      (errMessage) => {
        if (errMessage.includes("(auth/email-already-in-use)")) {
          this.errorBox = "User with this email already exists.";
        } else if (errMessage.includes("(auth/weak-password)")) {
          this.errorBox = "Password must be at least 6 characters long.";
        } else {
          this.errorBox = "Server error: registration not successful. Please try again later.";
        }
      });
  }

}

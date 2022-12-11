import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  handleRegister(formData: { email: string, password: string, repass: string }) {
    this.authService.register(formData.email, formData.password,
      () => {
        console.log("register successful");
      },
      () => {
        console.log("register failed");
      });
  }

}

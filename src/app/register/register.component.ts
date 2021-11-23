import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username: string = '';
  password: string = '';
  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    
  }
  onSubmit() {
    // if (this.isUsernameValid) {}
    this.loginService.register(this.username, this.password);
    console.log('username: ', this.username, '   password:', this.password);


  }

}

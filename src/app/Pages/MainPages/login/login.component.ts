import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {Auth} from 'src/app/Model/Auth';
import { Token } from 'src/app/Model/Token';
import { AuthService } from 'src/app/Services/Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup = this.formBuilder.group({});

  constructor(private authService: AuthService,private formBuilder: FormBuilder, private router: Router) { 
    this.createForm();
  }

  ngOnInit(): void {
    this.authService.loandToken();

    if(this.authService.getToken().token != undefined) {
      this.router.navigateByUrl('main');
    }
  }

  public createForm()
  {
    this.formLogin = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });  
  }

  public login()
  { 
    if(this.formLogin.valid) {
      this.authService.login(this.formLogin.value as Auth).subscribe(
        (request) => {
          this.authService.setToken(request as Token);
          this.authService.saveToken();
          this.router.navigateByUrl('main');
        },
        (error) => {
          console.log(error);
        }
      )
    }

  }

  
}

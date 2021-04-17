import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/Auth/auth.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  //doctor
  //correoprueba1@hotmail.com
  //palejos123

  //patient
  //diego12345@gmail.com
  //diego12345
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.loandToken();
    if(this.authService.getToken().token == undefined) {
      this.router.navigateByUrl('');
    }
    this.authService.whatIs();
  }

}

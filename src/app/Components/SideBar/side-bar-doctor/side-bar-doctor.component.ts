import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { SideBarDoctorService } from 'src/app/Services/SideBarDoctor/side-bar-doctor.service';

@Component({
  selector: 'app-side-bar-doctor',
  templateUrl: './side-bar-doctor.component.html',
  styleUrls: ['./side-bar-doctor.component.scss']
})
export class SideBarDoctorComponent implements OnInit {

  activeMenu: boolean = false;

  constructor(private authService: AuthService,private sideBarDoctorService: SideBarDoctorService, private router: Router) { }

  ngOnInit(): void {
    this.sideBarDoctorService.activeMenu.subscribe(data => {
      this.activeMenu = data;
    })
  }

  public logout()
  {
    this.authService.clearToken();
    this.router.navigateByUrl('');
  }
}

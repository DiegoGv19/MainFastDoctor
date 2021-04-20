import { Component, OnInit } from '@angular/core';
import { SideBarPatientService } from 'src/app/Services/SideBarPatient/side-bar-patient.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private activeMenu: boolean;

  constructor(private sideBarPatientService: SideBarPatientService) { 
    this.activeMenu = false;

  }

  ngOnInit(): void {
  }

  menuChange() {
    this.activeMenu = !this.activeMenu;
    this.sideBarPatientService.activeMenu.emit(this.activeMenu);

  }
}

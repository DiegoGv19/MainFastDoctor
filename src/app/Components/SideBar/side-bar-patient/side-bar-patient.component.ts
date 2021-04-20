import { Component, OnInit } from '@angular/core';
import { SideBarPatientService } from 'src/app/Services/SideBarPatient/side-bar-patient.service';

@Component({
  selector: 'app-side-bar-patient',
  templateUrl: './side-bar-patient.component.html',
  styleUrls: ['./side-bar-patient.component.scss']
})
export class SideBarPatientComponent implements OnInit {
  
  activeMenu: boolean = false;

  constructor(private sideBarPatientService: SideBarPatientService) { }

  ngOnInit(): void {
    this.sideBarPatientService.activeMenu.subscribe(data => {
      this.activeMenu = data;
    })
  }

}

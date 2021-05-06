import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicalHistory } from 'src/app/Model/MedicalHistory';
import { MedicalHistoryService } from 'src/app/Services/MedicalHistory/medical-history.service';

@Component({
  selector: 'app-view-medical-history',
  templateUrl: './view-medical-history.component.html',
  styleUrls: ['./view-medical-history.component.scss']
})
export class ViewMedicalHistoryComponent implements OnInit {

  public medicalHistory: MedicalHistory = this.medicalHistoryService.getMedicalHistory();

  constructor(private medicalHistoryService: MedicalHistoryService, private router: Router) { }

  ngOnInit(): void {
    if (this.medicalHistory.cita.idCita == 0) {
      this.router.navigateByUrl('main/patient/medical-history');
    }
  }
  
  public return()
  {
    this.router.navigateByUrl('main/patient/medical-history');
  }
}

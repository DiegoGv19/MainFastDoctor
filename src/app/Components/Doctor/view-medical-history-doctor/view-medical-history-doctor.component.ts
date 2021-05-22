import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicalHistory } from 'src/app/Model/MedicalHistory';
import { MedicalHistoryService } from 'src/app/Services/MedicalHistory/medical-history.service';

@Component({
  selector: 'app-view-medical-history-doctor',
  templateUrl: './view-medical-history-doctor.component.html',
  styleUrls: ['./view-medical-history-doctor.component.scss']
})
export class ViewMedicalHistoryDoctorComponent implements OnInit {

  public medicalHistory: MedicalHistory = this.medicalHistoryService.getMedicalHistory();

  constructor(private medicalHistoryService: MedicalHistoryService, private router: Router) { }

  ngOnInit(): void {
    if (this.medicalHistory.cita.idCita == 0) {
      this.router.navigateByUrl('main/doctor/medical-history-doctor');
    }
    console.log(this.medicalHistory);
  }

  public return()
  {
    this.router.navigateByUrl('main/doctor/medical-history-doctor');
  }
}

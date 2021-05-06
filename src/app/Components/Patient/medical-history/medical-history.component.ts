import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicalHistory } from 'src/app/Model/MedicalHistory';
import { MedicalHistoryService } from 'src/app/Services/MedicalHistory/medical-history.service';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.scss']
})
export class MedicalHistoryComponent implements OnInit {

  public listMedicalHistory: Array<MedicalHistory> = new Array();

  constructor(private medicalHistoryService: MedicalHistoryService, private router: Router) { }

  ngOnInit(): void {
    this.findMedicalHistory();
  }

  public findMedicalHistory()
  {
    this.medicalHistoryService.findMedicalHistory().subscribe(
      (data) => {
        this.listMedicalHistory = data;
        this.medicalHistoryService.setMedicalHistory(new MedicalHistory());
      },
      (error) => {
        console.log('error al cargar el historial medico')
      }
    )
  }

  public viewMedicalHistory(medicalHistory: MedicalHistory)
  {
    this.medicalHistoryService.setMedicalHistory(medicalHistory);
    this.router.navigateByUrl('main/patient/view-medical-history');
  }
}

import { Component, OnInit } from '@angular/core';
import { MedicalHistory } from 'src/app/Model/MedicalHistory';
import { MedicalHistoryService } from 'src/app/Services/MedicalHistory/medical-history.service';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.scss']
})
export class MedicalHistoryComponent implements OnInit {

  public listMedicalHistory: Array<MedicalHistory> = new Array();

  constructor(private medicalHistoryService: MedicalHistoryService) { }

  ngOnInit(): void {
    this.findMedicalHistory();
  }

  public findMedicalHistory()
  {
    this.medicalHistoryService.findMedicalHistory().subscribe(
      (data) => {
        this.listMedicalHistory = data;
      },
      (error) => {
        console.log('error al cargar el historial medico')
      }
    )
  }
}

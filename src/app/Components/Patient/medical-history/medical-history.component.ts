import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicalHistory } from 'src/app/Model/MedicalHistory';
import { Ranking } from 'src/app/Model/Ranking';
import { MedicalHistoryService } from 'src/app/Services/MedicalHistory/medical-history.service';
import { PatientService } from 'src/app/Services/Patient/patient.service';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.scss']
})
export class MedicalHistoryComponent implements OnInit {

  public listMedicalHistory: Array<MedicalHistory> = new Array();
  public ranking: Ranking = new Ranking();
  public rankingForm: FormGroup = this.formBuilder.group({});

  constructor(private medicalHistoryService: MedicalHistoryService, private patientService: PatientService, private formBuilder: FormBuilder, private router: Router) { 
    this.createRankingForm();
  }

  ngOnInit(): void {
    
    this.findMedicalHistory();
  }

  public createRankingForm()
  {
    this.rankingForm = this.formBuilder.group(
      {
        ranking: ["", Validators.required],      }
    )
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

  public rankingDoctor(medicalHistory: MedicalHistory)
  {
    this.ranking.doctorId = medicalHistory.cita.doctor.idDoctor;
    this.ranking.citaId = medicalHistory.cita.idCita;
  }

  public saveRankingDoctor()
  {
    if (this.rankingForm.valid) {
      this.ranking.calificacion = this.rankingForm.get('ranking')?.value
      this.patientService.ranking(this.ranking).subscribe(
        () => {}
      );
      this.rankingForm.reset();

    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/Model/Appointment';
import { Diagnosis } from 'src/app/Model/Diagnosis';
import { AppointmentService } from 'src/app/Services/Appointment/appointment.service';
import { DiagnosisService } from 'src/app/Services/Diagnosis/diagnosis.service';

@Component({
  selector: 'app-register-medical-history',
  templateUrl: './register-medical-history.component.html',
  styleUrls: ['./register-medical-history.component.scss']
})
export class RegisterMedicalHistoryComponent implements OnInit {

  public formDiagnosis: FormGroup = this.formBuilder.group({});
  public listDiagnosis: Array<Diagnosis> = new Array();
  public appointment: Appointment = this.appointmentService.getAppointment();

  constructor(private diagnosisService: DiagnosisService, private appointmentService: AppointmentService, private formBuilder: FormBuilder, private router: Router) { 
    this.createForm();
    this.diagnosisService.setListDiagnosis(new Array<Diagnosis>());
  }

  ngOnInit(): void {
  }

  public createForm()
  {
    this.formDiagnosis = this.formBuilder.group({
      nombre: ["", Validators.required],
      descripcion: ["", Validators.required]
    });  
  }

  public addList()
  { 
    if(this.formDiagnosis.valid) {
      this.diagnosisService.addDiagnosisToList(this.formDiagnosis.value as Diagnosis, this.appointment.idCita);
      this.listDiagnosis = this.diagnosisService.getListDiagnosis();
      this.formDiagnosis.reset();
    }
  }

  public createListDiagnosis()
  {
    if (this.diagnosisService.getListDiagnosis()) {  
      this.diagnosisService.createDiagnosis().subscribe(
        () => {
          this.router.navigateByUrl('main/doctor/register-medication');
        }
      )
    }
    this.router.navigateByUrl('main/doctor/register-medication');

  }
}

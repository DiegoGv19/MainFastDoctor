import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Symptom } from 'src/app/Model/Symptom';
import { AppointmentService } from 'src/app/Services/Appointment/appointment.service';
import { SymptomService } from 'src/app/Services/Symptom/symptom.service';
import { Appointment } from 'src/app/Model/Appointment';

@Component({
  selector: 'app-medical-appointment',
  templateUrl: './medical-appointment.component.html',
  styleUrls: ['./medical-appointment.component.scss']
})
export class MedicalAppointmentComponent implements OnInit {

  public formMedicalAppointment: FormGroup = this.formBuilder.group({});
  public listSymptom: Array<Symptom> = new Array();

  constructor(private appointmetService: AppointmentService, private symptomService: SymptomService,private formBuilder: FormBuilder, private router: Router) { 
    this.createFormMedicalAppointement();
  }

  ngOnInit(): void {
    this.findAllSymptom();
  }

  private findAllSymptom()
  {
    this.symptomService.findAllSymptom().subscribe(
      (data) => {
        this.listSymptom = data;
      },
      (error) => {
        console.log('error al cargar los sintomas');
      }

    )
  }

  private createFormMedicalAppointement()
  {
    this.formMedicalAppointment = this.formBuilder.group({
      areaSintoma_id: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechaCita: ['', Validators.required],
      horaInicio: ['', Validators.required]
    })
  }

  public saveFormMedicalAppointment()
  {
    if(this.formMedicalAppointment.valid) {
      this.appointmetService.setSymtom(this.formMedicalAppointment.value as Appointment);
      this.router.navigateByUrl('main/patient/list-available-doctor');
    }

  }
}

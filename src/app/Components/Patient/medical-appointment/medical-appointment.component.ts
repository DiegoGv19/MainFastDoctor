import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medical-appointment',
  templateUrl: './medical-appointment.component.html',
  styleUrls: ['./medical-appointment.component.scss']
})
export class MedicalAppointmentComponent implements OnInit {

  public formMedicalAppointment: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder, private router: Router) { 
    this.createFormMedicalAppointement();
  }

  ngOnInit(): void {
  }

  private createFormMedicalAppointement()
  {
    this.formMedicalAppointment = this.formBuilder.group({
      symptom: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    })
  }

  public saveFormMedicalAppointment()
  {
    if(this.formMedicalAppointment.valid) {
          /*
      logica para guardar la informacion en un servicio.
      luego redirige a la lista de los medicos
      */
      console.log(this.formMedicalAppointment.value);
      this.router.navigateByUrl('main/patient/list-available-doctor');
    }

  }
}

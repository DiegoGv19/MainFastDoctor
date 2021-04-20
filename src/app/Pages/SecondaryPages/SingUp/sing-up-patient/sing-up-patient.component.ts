import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { DistrictService } from 'src/app/Services/District/district.service';
import { PatientService } from 'src/app/Services/Patient/patient.service';

@Component({
  selector: 'app-sing-up-patient',
  templateUrl: './sing-up-patient.component.html',
  styleUrls: ['./sing-up-patient.component.scss']
})
export class SingUpPatientComponent implements OnInit {

  public formPatient: FormGroup = this.formBuilder.group({});
  public listDistrict: Array<string> = new Array<string>();
  public confirmCreated: boolean = false;
  
  constructor(private patientService: PatientService, private districtService: DistrictService, private formBuilder: FormBuilder) {
    this.createForm();
    this.listDistrict = this.districtService.getListDistrict();
   }

  ngOnInit(): void {
  }

  public createForm()
  {
    this.formPatient = this.formBuilder.group({
      nombreUsuario: ["", Validators.required],
      password: ["", Validators.required],
      nombre: ["", Validators.required],
      apellidoPaterno: ["", Validators.required],
      apellidoMaterno: ["", Validators.required],
      dni: ["", Validators.required], 
      correo: ["", Validators.required],
      celular: ["", Validators.required],
      fechaNacimiento: ["", Validators.required],
      distrito: [""],
      direccion: ["", Validators.required]
    })
  }

  public createPatient()
  {
    if(this.formPatient.valid) {
      this.patientService.registerPatient(this.formPatient.value as User).subscribe(
        () => {
          this.confirmCreated = true;
        },
        (error) => {
          console.log('Error al registrar el paciente');
        }
      )
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Doctor } from 'src/app/Model/Doctor';
import { Speciality } from 'src/app/Model/Speciality';
import { User } from 'src/app/Model/User';
import { DistrictService } from 'src/app/Services/District/district.service';
import { DoctorService } from 'src/app/Services/Doctor/doctor.service';
import { SpecialityService } from 'src/app/Services/Speciality/speciality.service';

@Component({
  selector: 'app-sing-up-doctor',
  templateUrl: './sing-up-doctor.component.html',
  styleUrls: ['./sing-up-doctor.component.scss']
})
export class SingUpDoctorComponent implements OnInit {
  public formUser: FormGroup = this.formBuilder.group({});
  public formDoctor: FormGroup = this.formBuilder.group({});
  public listDistrict: Array<string> = new Array<string>();
  public confirmCreated: boolean = false;
  public listSpeciality: Array<Speciality> = new Array<Speciality>();

  constructor(private doctorService: DoctorService,private specialityService: SpecialityService,private districtService:DistrictService, private formBuilder: FormBuilder) {
    this.createFormUser();
    this.createFormDoctor();
    this.listDistrict = this.districtService.getListDistrict();
    this.specialityService.findSpecialityList().subscribe(
      (list) => {
        this.listSpeciality = list;
      }
    )
  }

  ngOnInit(): void {
  }

  public createFormUser()
  {
    this.formUser = this.formBuilder.group({
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
  public createFormDoctor()
  {
    this.formDoctor = this.formBuilder.group({
      dniFoto: [""],
      disponibilidad: ["false", Validators.required],
      habilitado: ["false", Validators.required],
      centro_labor: ["", Validators.required],
      numero_colegiatura: ["", Validators.required],
      tarifa: ["", Validators.required],
      especialidad: ["", Validators.required],
  
    })
  }

  public createPatient()
  {
    if(this.formUser.valid && this.formDoctor.valid) {
      let user: User = this.formUser.value as User;
      let doctor: Doctor = this.formDoctor.value as Doctor;
      let especialidad: Speciality = new Speciality();
      doctor.usuario = user;
      especialidad.nombre = doctor.especialidad;
      doctor.especialidad = especialidad;
      this.doctorService.registerDoctor(doctor).subscribe(
        () => {
          this.confirmCreated = true;
        },
        (error) => {
          console.log('paso un problema');
        }
      )
    }

  }
}

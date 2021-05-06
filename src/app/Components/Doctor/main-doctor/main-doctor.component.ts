import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/Model/Doctor';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { DoctorService } from 'src/app/Services/Doctor/doctor.service';

@Component({
  selector: 'app-main-doctor',
  templateUrl: './main-doctor.component.html',
  styleUrls: ['./main-doctor.component.scss']
})
export class MainDoctorComponent implements OnInit {

  public doctor: Doctor = this.doctorService.getDoctor();

  constructor(private doctorService: DoctorService, private authService: AuthService) { }

  ngOnInit(): void {
    this.findDoctor();
  }

  public findDoctor()
  {
    this.doctorService.findDoctorById(this.authService.getToken().usuario_id).subscribe(
      (data) => {
        this.doctorService.setDoctor(data);
        this.doctor = data;
      }
    )
  }

  public changeAvailability()
  {
    this.doctorService.Changeavailability(this.authService.getToken().usuario_id).subscribe(
      (data) => {
        this.doctor.disponibilidad = !this.doctor.disponibilidad;
        this.doctorService.setDoctor(this.doctor);
      }
    )
    
  }
}

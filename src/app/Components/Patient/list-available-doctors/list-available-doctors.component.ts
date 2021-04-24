import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/Model/Appointment';
import { Doctor } from 'src/app/Model/Doctor';
import { AppointmentService } from 'src/app/Services/Appointment/appointment.service';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { DoctorService } from 'src/app/Services/Doctor/doctor.service';

@Component({
  selector: 'app-list-available-doctors',
  templateUrl: './list-available-doctors.component.html',
  styleUrls: ['./list-available-doctors.component.scss']
})
export class ListAvailableDoctorsComponent implements OnInit {

  public listDoctors: Array<Doctor> = new Array();
  public appointment: Appointment = new Appointment();

  constructor(private appintmentService: AppointmentService, private doctorService: DoctorService, private authService: AuthService, private router: Router) { 

  }

  ngOnInit(): void {
    this.findDoctorsAvailable();
    this.listDoctors = this.doctorService.getListDoctorsAvailable();
  }

  public saveAppointment(doctor: Doctor)
  {
   this.appointment = this.appintmentService.getSymptom();
   this.appointment.paciente_usuario_id = this.authService.getToken().usuario_id; 
   this.appointment.doctor_id = doctor.idDoctor;
   this.appointment.areaSintoma_id = Number(this.appointment.areaSintoma_id);
   this.appintmentService.createAppointment(this.appointment).subscribe(
    () => {
      this.router.navigateByUrl('main/patient');
    },
    (error) => {
      console.log(error);
    }
  )
  }

  public viewDocto(doctor: Doctor)
  {
    this.doctorService.setDoctorSelect(doctor);
    this.router.navigateByUrl('main/patient/view-doctor');
  }

  private findDoctorsAvailable()
  {
    this.doctorService.findDoctorsAvailable().subscribe(
      (data) => {
        this.listDoctors = data;
        this.doctorService.setListDoctorsAvailable(data);
      }
    )
  }

}

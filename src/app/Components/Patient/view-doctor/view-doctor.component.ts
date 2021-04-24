import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/Model/Appointment';
import { Doctor } from 'src/app/Model/Doctor';
import { AppointmentService } from 'src/app/Services/Appointment/appointment.service';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { DoctorService } from 'src/app/Services/Doctor/doctor.service';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.scss']
})
export class ViewDoctorComponent implements OnInit {

  public appointment: Appointment = new Appointment();

  constructor(private appintmentService: AppointmentService,private doctorService: DoctorService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  public volver() 
  {
    this.doctorService.setDoctorSelect(new Doctor());
    this.router.navigateByUrl('main/patient/list-available-doctor')
  }
  
  public saveAppointment()
  {
    this.appointment = this.appintmentService.getSymptom();
    this.appointment.paciente_usuario_id = this.authService.getToken().usuario_id; 
    this.appointment.doctor_id = this.doctorService.getDoctorSelect().idDoctor;
    this.appintmentService.createAppointment(this.appointment).subscribe(
      () => {
        this.router.navigateByUrl('main/patient');
      },
      (error) => {
        console.log('no se pudo registrar la cita');
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/Model/Appointment';
import { AppointmentService } from 'src/app/Services/Appointment/appointment.service';

@Component({
  selector: 'app-list-appointment-accepted',
  templateUrl: './list-appointment-accepted.component.html',
  styleUrls: ['./list-appointment-accepted.component.scss']
})
export class ListAppointmentAcceptedComponent implements OnInit {

  public listAppointmets: Array<Appointment> = new Array();

  constructor(private appointmentService: AppointmentService, private router: Router) { }

  ngOnInit(): void {
    this.findAppointmentApprove();
  }

  public findAppointmentApprove()
  {
    this.appointmentService.findAppointmentApprove().subscribe(
      (data) => {
        this.listAppointmets = data;
      }
    )
  }

  public startAppointment(appointment: Appointment)
  {
    this.appointmentService.setAppointment(appointment);
    this.router.navigateByUrl('main/doctor/medical-history-doctor');  
  }
}

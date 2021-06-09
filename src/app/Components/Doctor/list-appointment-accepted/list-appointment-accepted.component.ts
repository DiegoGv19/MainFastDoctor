import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/Model/Appointment';
import { GoogleMaps } from 'src/app/Model/GoogleMaps';
import { AppointmentService } from 'src/app/Services/Appointment/appointment.service';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { GoogleMapService } from 'src/app/Services/GoogleMap/google-map.service';

@Component({
  selector: 'app-list-appointment-accepted',
  templateUrl: './list-appointment-accepted.component.html',
  styleUrls: ['./list-appointment-accepted.component.scss']
})
export class ListAppointmentAcceptedComponent implements OnInit {

  public listAppointmets: Array<Appointment> = new Array();
  public doctorGoogleMap: GoogleMaps = new GoogleMaps();
  public pacientGoogleMap: GoogleMaps = new GoogleMaps();

  constructor(private googleMapService: GoogleMapService, private authService: AuthService, private appointmentService: AppointmentService, private router: Router) { }

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

  public viewMap(pacientUserId: number, appointment: Appointment)
  {
    this.googleMapService.getCurrentPosition();
    this.doctorGoogleMap = this.googleMapService.getGoogleMaps();
    this.doctorGoogleMap.usuario_id = this.authService.getToken().usuario_id;
    this.googleMapService.getDataGoogleMaps(pacientUserId).subscribe(
      (data) => {
        this.pacientGoogleMap.latitud = data.latitud;
        this.pacientGoogleMap.longitud = data.longitud;
        this.pacientGoogleMap.usuario_id = data.usuario_id;
        this.googleMapService.setGoogleMaps(this.doctorGoogleMap);
        this.googleMapService.setPacienteGoogleMaps(this.pacientGoogleMap);
        this.appointmentService.setAppointment(appointment);
        this.router.navigateByUrl('main/doctor/doctor-google-maps');  
      }
    )
  }
}

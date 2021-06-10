import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/Model/Appointment';
import { GoogleMaps } from 'src/app/Model/GoogleMaps';
import { AppointmentService } from 'src/app/Services/Appointment/appointment.service';
import { GoogleMapService } from 'src/app/Services/GoogleMap/google-map.service';

@Component({
  selector: 'app-doctor-google-maps',
  templateUrl: './doctor-google-maps.component.html',
  styleUrls: ['./doctor-google-maps.component.scss']
})
export class DoctorGoogleMapsComponent implements OnInit {

  public doctorGoogleMap: GoogleMaps = new GoogleMaps();
  public pacienteGoogleMap: GoogleMaps = new GoogleMaps();
  public appointment: Appointment = new Appointment();
  public mapTypeId: string = 'hybrid';
  public latitudDoctor: number = 0;
  public longitudDoctor: number = 0;
  public latitudPacient: number = 0;
  public longitudPacient: number = 0;

  constructor(private appointmentService: AppointmentService, private googleMapsService: GoogleMapService, private router: Router) {
    this.appointment = appointmentService.getAppointment();
    this.googleMapsService.getCurrentPosition();
    this.doctorGoogleMap =  this.googleMapsService.getGoogleMaps();
    this.pacienteGoogleMap = this.googleMapsService.getPacienteGoogleMaps();
    this.latitudDoctor = Number(this.doctorGoogleMap.latitud);
    this.longitudDoctor = Number(this.doctorGoogleMap.longitud);
    this.latitudPacient = Number(this.pacienteGoogleMap.latitud);
    this.longitudPacient = Number(this.pacienteGoogleMap.longitud);
   }

  ngOnInit(): void {
    if (this.doctorGoogleMap.usuario_id == 0 && this.pacienteGoogleMap.usuario_id == 0){
      this.router.navigateByUrl('main/doctor/appointment-accepted');
    }
  }

  ngAfterViewInit() {
    this.iniciarMap();
  }

  public startAppointment()
  {
    this.appointmentService.setAppointment(this.appointment);
    this.router.navigateByUrl('main/doctor/medical-history-doctor');  
  }

  private iniciarMap()
  {
    var coordDoctor = {
        lat: this.latitudDoctor,
        lng: this.longitudDoctor
    };

    var coordPacient = {
      lat: this.latitudPacient,
      lng: this.longitudPacient
    }

    var map = new google.maps.Map(<HTMLDivElement>document.getElementById("map"),{
      zoom: 10,
      center: coordDoctor
    });

    this.generateMarker(coordDoctor, "Doctor", map);
    this.generateMarker(coordPacient, "Pacient", map);
  }

  private generateMarker(coord: any, title: string, map: any): any
  {
    var marker = new google.maps.Marker({
      position: coord,
      map: map,
      title: title
    });
  }

  public volver()
  {
    this.router.navigateByUrl('main/doctor/appointment-accepted');
  }

  public calculateAndDisplayRoute()
  {
    var coordDoctor = {
      lat: this.latitudDoctor,
      lng: this.longitudDoctor
     };

     var coordPacient = {
     lat: this.latitudPacient,
     lng: this.longitudPacient
    }

    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService  = new google.maps.DirectionsService();
    
    var map = new google.maps.Map(<HTMLDivElement>document.getElementById("map"),{
      zoom: 17,
      center: coordDoctor
    });
    directionsRenderer.setMap(map);

    directionsService.route(
      {
        origin: coordDoctor,
        destination: coordPacient,
        travelMode: google.maps.TravelMode["WALKING"],
      },
      (response, status) => {
        if(status == "OK") {
          directionsRenderer.setDirections(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleMaps } from 'src/app/Model/GoogleMaps';
import { GoogleMapService } from 'src/app/Services/GoogleMap/google-map.service';

@Component({
  selector: 'app-doctor-google-maps',
  templateUrl: './doctor-google-maps.component.html',
  styleUrls: ['./doctor-google-maps.component.scss']
})
export class DoctorGoogleMapsComponent implements OnInit {

  public doctorGoogleMap: GoogleMaps;
  public pacienteGoogleMap: GoogleMaps;
  public mapTypeId: string = 'hybrid';
  public latitudDoctor: number;
  public longitudDoctor: number;
  public latitudPacient: number;
  public longitudPacient: number;
  constructor(private googleMapsService: GoogleMapService, private router: Router) {
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
        zoom: 17,
        center: coordDoctor
    });

    var markerDoctor = new google.maps.Marker({
        position: coordDoctor,
        map: map
    });

    var markerPacient = new google.maps.Marker({
      position: coordPacient,
      map: map
  });
  }

}

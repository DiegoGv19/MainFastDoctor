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

  public doctorGoogleMap: GoogleMaps = new GoogleMaps();
  public pacienteGoogleMap: GoogleMaps = new GoogleMaps();
  public mapTypeId: string = 'hybrid';
  public latitudDoctor: number = 0;
  public longitudDoctor: number = 0;
  public latitudPacient: number = 0;
  public longitudPacient: number = 0;
  constructor(private googleMapsService: GoogleMapService, private router: Router) {
    this.doctorGoogleMap =  this.googleMapsService.getGoogleMaps();
    this.pacienteGoogleMap = this.googleMapsService.getPacienteGoogleMaps();
    console.log(googleMapsService.getPacienteGoogleMaps());
    this.latitudDoctor = Number(this.doctorGoogleMap.latitud);
    this.longitudDoctor = Number(this.doctorGoogleMap.longitud);
    this.latitudPacient = Number(this.pacienteGoogleMap.latitud);
    this.longitudPacient = Number(this.pacienteGoogleMap.longitud);

    console.log(this.longitudPacient);
    console.log(this.latitudPacient);
   }

  ngOnInit(): void {
    if (this.doctorGoogleMap.usuario_id == 0 && this.pacienteGoogleMap.usuario_id == 0){
      this.router.navigateByUrl('main/doctor/appointment-accepted');
    }
  }

}

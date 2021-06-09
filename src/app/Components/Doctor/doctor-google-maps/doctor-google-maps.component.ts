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

    this.calculateAndDisplayRoute(coordDoctor, coordPacient);
  }

  private generateMarker(coord: any, title: string, map: any, image: any): any
  {
    var marker = new google.maps.Marker({
      position: coord,
      map: map,
      title: title,
      icon: image
    });
  }

  private calculateAndDisplayRoute(coordDoctor: any, coordPacient: any)
  {
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
          this.generateMarker(coordDoctor, "Doctor", map, 'doctor-icon.png');
          this.generateMarker(coordPacient, "Pacient", map, 'doctor-icon.png');
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  }
}

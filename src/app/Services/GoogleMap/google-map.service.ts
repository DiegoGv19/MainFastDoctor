import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleMaps } from 'src/app/Model/GoogleMaps';
import { ApiService } from '../Api/api.service';
import { AuthService } from '../Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapService {

  private googleMaps: GoogleMaps;
  private pacienteGoogleMaps: GoogleMaps;
  private zoom: number = 0;
  private mapTypeId: string = 'hybrid';
  private urlGetDataGoogleMaps = 'usuario/ubicacion/obtener';
  private urlPutDataGoogleMaps = 'usuario/ubicacion/actualizar'
  constructor(private authService: AuthService, private apiService: ApiService, private httpCliente: HttpClient) {
    this.googleMaps = new GoogleMaps();
    this.pacienteGoogleMaps = new GoogleMaps();
    this.zoom = 17;
    this.mapTypeId = 'hybrid';
   }
  
  public setGoogleMaps(googleMaps: GoogleMaps)
  {
    this.googleMaps = googleMaps;
  }

  public getGoogleMaps(): GoogleMaps
  {
    return this.pacienteGoogleMaps;
  }

  public setPacienteGoogleMaps(pacienteGoogleMaps: GoogleMaps)
  {
    this.pacienteGoogleMaps = pacienteGoogleMaps;
  }

  public getPacienteGoogleMaps(): GoogleMaps
  {
    return this.pacienteGoogleMaps;
  }

  public getZoom(): number
  {
    return this.zoom;
  }

  public getMapTypeId(): string
  {
    return this.mapTypeId;
  }

  public getCurrentPosition()
  {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.googleMaps.latitud = position.coords.latitude.toString();
        this.googleMaps.longitud = position.coords.longitude.toString();
        this.zoom = 17;
      }
    )
  }

  public getDataGoogleMaps(userId: number): Observable<GoogleMaps>
  {
    return this.httpCliente.get<GoogleMaps>(`${this.apiService.getUrl()}/${this.urlGetDataGoogleMaps}/${userId}`);
  }

  public putDataGoogleMaps(dataGoogleMaps: GoogleMaps): Observable<GoogleMaps>
  {
    return this.httpCliente.put<GoogleMaps>(`${this.apiService.getUrl()}/${this.urlPutDataGoogleMaps}`, dataGoogleMaps);
  }
}

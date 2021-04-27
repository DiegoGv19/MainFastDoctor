import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapService {

  private lat: number = 0;
  private lng: number = 0;
  private zoom: number = 0;
  private mapTypeId: string = 'hybrid';

  constructor() {
    this.lat = -12.046374;
    this.lng = -77.042793;
    this.zoom = 17;
    this.mapTypeId = 'hybrid';
   }
  
  public getLat(): number
  {
    return this.lat;
  }

  public getLng(): number 
  {
    return this.lng;
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
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 17;
      }
    )
  }

}

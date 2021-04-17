import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url: string = 'http://doctorfast-backend.herokuapp.com';
  constructor() { }

  public getUrl(): string
  {
    return this.url;
  }

}

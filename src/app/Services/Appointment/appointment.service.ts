import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/Model/Appointment';
import { ApiService } from '../Api/api.service';
import { AuthService } from '../Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private urlCreateAppointment: string = 'paciente/citas/crear';

  private appointment: Appointment= new Appointment();

  constructor(private authService: AuthService, private apiService: ApiService, private router: Router, private httpClient: HttpClient) { }

  public setSymtom(appointment: Appointment)
  { 
    this.appointment = appointment;
  }

  public getSymptom(): Appointment
  {
    return this.appointment;
  }

  public createAppointment(appointment: Appointment): Observable<any>
  {
    return this.httpClient.post<any>(`${this.apiService.getUrl()}/${this.urlCreateAppointment}`, appointment, {headers: this.authService.getHttpHeaders()});
  }
}

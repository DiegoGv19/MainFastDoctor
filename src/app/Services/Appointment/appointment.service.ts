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
  private urlAppointmentAvailability: string = 'doctor/citas/disponibles';
  private urlApproveAppointment: string = 'doctor/citas/aceptar';
  private urlCancelAppointment: string = 'doctor/citas/cancelar';

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

  public findAppointmentAvailability(): Observable<Appointment[]>
  {
    return this.httpClient.get<Appointment[]>(`${this.apiService.getUrl()}/${this.urlAppointmentAvailability}/${this.authService.getToken().usuario_id}`, {headers: this.authService.getHttpHeaders()});
  }

  public approveAppointment(citaId: number): Observable<any>
  {
    return this.httpClient.put<any>(`${this.apiService.getUrl()}/${this.urlApproveAppointment}/${this.authService.getToken().usuario_id}&${citaId}`, '', {headers: this.authService.getHttpHeaders()});
  }

  public cancelAppointment(citaId: number): Observable<any>
  {
    return this.httpClient.put<any>(`${this.apiService.getUrl()}/${this.urlCancelAppointment}/${this.authService.getToken().usuario_id}&${citaId}`, '', {headers: this.authService.getHttpHeaders()});
  }
}

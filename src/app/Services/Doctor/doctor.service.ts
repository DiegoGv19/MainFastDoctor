import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/Model/Doctor';
import { ApiService } from '../Api/api.service';
import { AuthService } from '../Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private urlRegisterDoctor: string = 'usuario/registroDoctor';
  private urlDoctorsAvailable: string = 'paciente/doctor/disponibles';
  private urlDoctorPerfil: string = 'doctor/perfil';
  private urlChangeavailability: string = 'doctor/status';

  private doctor: Doctor = new Doctor();
  private doctorSelect: Doctor = new Doctor();
  private listDoctorsAvailable: Array<Doctor> = new Array();
  
  constructor(private authService: AuthService, private apiService: ApiService, private httpClient: HttpClient) {

  }

  public setDoctor(doctor: Doctor)
  {
    this.doctor = doctor;
  }

  public getDoctor(): Doctor
  {
    return this.doctor;
  }

  public setDoctorSelect(doctor: Doctor)
  {
    this.doctorSelect = doctor;
  }

  public getDoctorSelect(): Doctor
  {
    return this.doctorSelect;
  }

  public setListDoctorsAvailable(listDoctorsAvailable: Array<Doctor>)
  {
    this.listDoctorsAvailable = listDoctorsAvailable;
  }

  public getListDoctorsAvailable(): Array<Doctor>
  {
    return this.listDoctorsAvailable;
  }

  public registerDoctor(doctor: Doctor): Observable<Doctor>
  {
    return this.httpClient.post<Doctor>(`${this.apiService.getUrl()}/${this.urlRegisterDoctor}`, doctor);
  }

  public findDoctorsAvailable(): Observable<Doctor[]>
  {
    return this.httpClient.get<Doctor[]>(`${this.apiService.getUrl()}/${this.urlDoctorsAvailable}`, {headers: this.authService.getHttpHeaders()});
  }

  public findDoctorById(DoctorId: number): Observable<Doctor>
  {
    return this.httpClient.get<Doctor>(`${this.apiService.getUrl()}/${this.urlDoctorPerfil}/${DoctorId}`, {headers: this.authService.getHttpHeaders()})
  }

  public Changeavailability(DoctorId: number): Observable<any>
  {
    return this.httpClient.put<any>(`${this.apiService.getUrl()}/${this.urlChangeavailability}/${DoctorId}`, '', {headers: this.authService.getHttpHeaders()})
  }
}

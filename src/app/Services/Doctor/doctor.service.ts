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
  private urlDoctorsAvailable: string = 'paciente/doctor/disponibles'


  private doctorSelect: Doctor = new Doctor();
  private listDoctorsAvailable: Array<Doctor> = new Array();
  
  constructor(private authService: AuthService, private apiService: ApiService, private httpClient: HttpClient) {

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
    return this.httpClient.post<Doctor>(`${this.apiService.getUrl()}/${this.urlRegisterDoctor}`,doctor);
  }

  public findDoctorsAvailable(): Observable<Doctor[]>
  {
    return this.httpClient.get<Doctor[]>(`${this.apiService.getUrl()}/${this.urlDoctorsAvailable}`,{headers: this.authService.getHttpHeaders()});
  }
}

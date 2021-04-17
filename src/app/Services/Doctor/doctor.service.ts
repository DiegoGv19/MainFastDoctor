import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/Model/Doctor';
import { ApiService } from '../Api/api.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private urlRegisterDoctor: string = 'usuario/registroDoctor';
  
  constructor(private apiService: ApiService, private httpClient: HttpClient) {

  }

  public RegisterPatient(doctor: Doctor): Observable<Doctor>
  {
    return this.httpClient.post<Doctor>(`${this.apiService.getUrl()}/${this.urlRegisterDoctor}`,doctor);
  }
}

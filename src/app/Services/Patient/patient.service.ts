import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/Model/Patient';
import { User } from 'src/app/Model/User';
import { ApiService } from '../Api/api.service';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private urlRegisterPatient: string = 'usuario/registroPaciente';

  constructor(private apiService: ApiService, private httpClient: HttpClient) { }

  public registerPatient(user: User): Observable<Patient>
  {
    let patient: Patient = new Patient();
    patient.usuario = user;
    
    return this.httpClient.post<Patient>(`${this.apiService.getUrl()}/${this.urlRegisterPatient}`,patient);
  }
}

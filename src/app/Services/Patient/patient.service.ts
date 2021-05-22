import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/Model/Patient';
import { Ranking } from 'src/app/Model/Ranking';
import { User } from 'src/app/Model/User';
import { ApiService } from '../Api/api.service';
import { AuthService } from '../Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private urlRegisterPatient: string = 'usuario/registroPaciente';
  private urlRankingDoctor: string = 'paciente/doctor/calificar';

  constructor(private apiService: ApiService, private authService: AuthService, private httpClient: HttpClient) { }

  public registerPatient(user: User): Observable<Patient>
  {
    let patient: Patient = new Patient();
    patient.usuario = user;
    
    return this.httpClient.post<Patient>(`${this.apiService.getUrl()}/${this.urlRegisterPatient}`,patient);
  }

  public ranking(ranking: Ranking): Observable<any>
  {
    ranking.usuarioId = this.authService.getToken().usuario_id;
    return this.httpClient.post<any>(`${this.apiService.getUrl()}/${this.urlRankingDoctor}`, ranking, {headers: this.authService.getHttpHeaders()})
  }
}

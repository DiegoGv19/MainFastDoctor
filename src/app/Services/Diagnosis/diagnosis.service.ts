import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Diagnosis } from 'src/app/Model/Diagnosis';
import { ApiService } from '../Api/api.service';
import { AuthService } from '../Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisService {

  private urlCreateDiagnosis: string = 'doctor/citas/crear_diagnosticos';

  private listDiagnosis: Array<Diagnosis> = new Array();

  constructor(private apiService: ApiService, private authService: AuthService, private httpClient: HttpClient) { }

  public getListDiagnosis(): Array<Diagnosis>
  {
    return this.listDiagnosis;
  }
  
  public setListDiagnosis(listDiagnosis: Array<Diagnosis>)
  {
    this.listDiagnosis = listDiagnosis;
  }

  public addDiagnosisToList(diagnosis: Diagnosis, cita_id: number)
  {
    diagnosis.cita_id = cita_id;
    this.listDiagnosis.push(diagnosis);
  }

  public createDiagnosis(): Observable<any>
  {
    return this.httpClient.post<any>(`${this.apiService.getUrl()}/${this.urlCreateDiagnosis}`, this.listDiagnosis, {headers: this.authService.getHttpHeaders()});
  }
}

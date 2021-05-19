import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicalHistory } from 'src/app/Model/MedicalHistory';
import { ApiService } from '../Api/api.service';
import { AuthService } from '../Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MedicalHistoryService {

  private urlMedicalHistory: string = 'paciente/citas/historial_medico';
  private urlMedicalHistoryDoctor: string = 'doctor/citas/historial_medico';
  
  private medicalHistory: MedicalHistory = new MedicalHistory();
  private ListMedicalHistory: Array<MedicalHistory> = new Array();

  constructor(private apiService: ApiService, private authService: AuthService, private httpClient: HttpClient) { }

  public setMedicalHistory(medicalHistory: MedicalHistory)
  {
    this.medicalHistory = medicalHistory;
  }

  public getMedicalHistory(): MedicalHistory
  {
    return this.medicalHistory;
  }

  public setListMedicalHistory(ListMedicalHistory: Array<MedicalHistory>)
  {
    this.ListMedicalHistory = ListMedicalHistory;
  }

  public getListMedicalHistory(): Array<MedicalHistory>
  {
    return this.ListMedicalHistory;
  }
  public findMedicalHistory(): Observable<MedicalHistory[]>
  {
    return this.httpClient.get<MedicalHistory[]>(`${this.apiService.getUrl()}/${this.urlMedicalHistory}/${this.authService.getToken().usuario_id}`, {headers: this.authService.getHttpHeaders()});
  }

  public findMedicalHistoryDoctor(idPatient: number): Observable<MedicalHistory[]>
  {
    return this.httpClient.get<MedicalHistory[]>(`${this.apiService.getUrl()}/${this.urlMedicalHistoryDoctor}/${idPatient}`, {headers: this.authService.getHttpHeaders()});
  }
}

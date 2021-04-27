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

  private urlMedicalHistory: string = 'paciente/historial_medico';

  constructor(private apiService: ApiService, private authService: AuthService, private httpClient: HttpClient) { }

  public findMedicalHistory(): Observable<MedicalHistory[]>
  {
    return this.httpClient.get<MedicalHistory[]>(`${this.apiService.getUrl()}/${this.urlMedicalHistory}/${this.authService.getToken().usuario_id}`, {headers: this.authService.getHttpHeaders()});
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Symptom } from 'src/app/Model/Symptom';
import { ApiService } from '../Api/api.service';
import { AuthService } from '../Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SymptomService {

  private urlFindAllSymptom: string = 'paciente/area_sintoma/list';

  constructor(private apiService: ApiService, private authService: AuthService, private httpClient: HttpClient) { 

  }

  public findAllSymptom(): Observable<Symptom[]>
  {
    return this.httpClient.get<Symptom[]>(`${this.apiService.getUrl()}/${this.urlFindAllSymptom}`, {headers: this.authService.getHttpHeaders()});
  }
}

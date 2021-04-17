import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Speciality } from 'src/app/Model/Speciality';
import { ApiService } from '../Api/api.service';

@Injectable({
  providedIn: 'root'
})
export class SpecialityService {

  private urlFindEspecialty: string = 'admin/especialidades';

  constructor(private apiService: ApiService, private httpClient: HttpClient) { }

  findSpecialityList(): Observable<Speciality[]>
  {
    return this.httpClient.get<Speciality[]>(`${this.apiService.getUrl()}/${this.urlFindEspecialty}`);
  } 
}

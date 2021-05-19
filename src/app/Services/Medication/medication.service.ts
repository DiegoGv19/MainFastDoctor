import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicalPrescription } from 'src/app/Model/MedicalPrescription';
import { ApiService } from '../Api/api.service';
import { AuthService } from '../Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {

  private urlCreateMedicalPrescription: string = 'doctor/citas/crear_prescripciones_medicas';

  private listMedicalPrescription: Array<MedicalPrescription> = new Array();

  constructor(private apiService: ApiService, private authService: AuthService, private httpClient: HttpClient) { }

  public getListMedicalPrescription(): Array<MedicalPrescription>
  {
    return this.listMedicalPrescription;
  }
  
  public setListMedicalPrescription(listMedicalPrescription: Array<MedicalPrescription>)
  {
    this.listMedicalPrescription = listMedicalPrescription;
  }

  public addMedicalPrescriptionToList(listMedicalPrescription: MedicalPrescription, cita_id: number)
  {
    listMedicalPrescription.cita_id = cita_id;
    this.listMedicalPrescription.push(listMedicalPrescription);
  }

  public createMedicalPrescription(): Observable<any>
  {
    return this.httpClient.post<any>(`${this.apiService.getUrl()}/${this.urlCreateMedicalPrescription}`, this.listMedicalPrescription, {headers: this.authService.getHttpHeaders()});
  }

}

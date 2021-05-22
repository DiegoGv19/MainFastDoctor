import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicalPrescription } from 'src/app/Model/MedicalPrescription';
import { Medicamento } from 'src/app/Model/Medicamento';
import { ApiService } from '../Api/api.service';
import { AuthService } from '../Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {

  private urlCreateMedicalPrescription: string = 'doctor/citas/crear_prescripciones_medicas';
  private urlMedications: string               = 'doctor/medicamento/list';

  private listMedicalPrescription: Array<MedicalPrescription> = new Array();
  private listMedications : Array<Medicamento> = new Array();

  constructor(private apiService: ApiService, private authService: AuthService, private httpClient: HttpClient) { }

  public getListMedicalPrescription(): Array<MedicalPrescription>
  {
    return this.listMedicalPrescription;
  }
  
  public setListMedicalPrescription(listMedicalPrescription: Array<MedicalPrescription>)
  {
    this.listMedicalPrescription = listMedicalPrescription;
  }

  public getListMedications(): Array<Medicamento>
  {
    return this.listMedications;
  }
  
  public setListMedications(listMedications: Array<Medicamento>)
  {
    this.listMedications = listMedications;
  }

  public addMedicalPrescriptionToList(listMedicalPrescription: MedicalPrescription, cita_id: number)
  {
    listMedicalPrescription.cita_id = cita_id;
    
    this.listMedications.forEach(function(e){
      if(e.idMedicamento == listMedicalPrescription.medicamento_id) {
        listMedicalPrescription.medicamento = e;
      }
    });

    this.listMedicalPrescription.push(listMedicalPrescription);
  }

  public createMedicalPrescription(): Observable<any>
  {
    return this.httpClient.post<any>(`${this.apiService.getUrl()}/${this.urlCreateMedicalPrescription}`, this.listMedicalPrescription, {headers: this.authService.getHttpHeaders()});
  }

  public findMedications(): Observable<Medicamento[]>
  {
    return this.httpClient.get<Medicamento[]>(`${this.apiService.getUrl()}/${this.urlMedications}`, {headers: this.authService.getHttpHeaders()});
  }
}

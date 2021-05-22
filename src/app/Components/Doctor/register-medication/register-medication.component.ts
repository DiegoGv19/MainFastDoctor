import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/Model/Appointment';
import { EndAppointment } from 'src/app/Model/EndAppointment';
import { MedicalPrescription } from 'src/app/Model/MedicalPrescription';
import { Medicamento } from 'src/app/Model/Medicamento';
import { AppointmentService } from 'src/app/Services/Appointment/appointment.service';
import { MedicationService } from 'src/app/Services/Medication/medication.service';

@Component({
  selector: 'app-register-medication',
  templateUrl: './register-medication.component.html',
  styleUrls: ['./register-medication.component.scss']
})
export class RegisterMedicationComponent implements OnInit {

  public formMedicalPrescription: FormGroup = this.formBuilder.group({});
  public listMedicalPrescription: Array<MedicalPrescription> = new Array();
  public listMedications: Array<Medicamento> = new Array();
  public appointment: Appointment = this.appointmentService.getAppointment();
  private date: any;
  private endTime: string = '';
  private startTime: any;
  private endAppointment: EndAppointment = new EndAppointment()

  constructor(private medicationService: MedicationService, private appointmentService: AppointmentService, private formBuilder: FormBuilder, private router: Router) { 
    this.createForm();
  }

  ngOnInit(): void {
    this.medicationService.setListMedicalPrescription(new Array<MedicalPrescription>());
    this.findMedications();
  }
  public createForm()
  {
    this.formMedicalPrescription = this.formBuilder.group({
      medicamento_id: ["", Validators.required],
      cantidad: ["", Validators.required],
      descripcion: ["", Validators.required],
      fechaInicio: ["", Validators.required]
    });  
  }

  public addList()
  { 
    if(this.formMedicalPrescription.valid) {
      this.listMedicalPrescription = this.medicationService.getListMedicalPrescription();
      this.medicationService.addMedicalPrescriptionToList(this.formMedicalPrescription.value as MedicalPrescription, this.appointment.idCita);
      this.formMedicalPrescription.reset();
    }
  }

  public findMedications()
  {
    this.medicationService.findMedications().subscribe(
      (data) => {
        this.listMedications = data;
        this.medicationService.setListMedications(data);
      }
    )
  }

  public createListMedicalPrescription()
  {
    this.medicationService.createMedicalPrescription().subscribe(
      () => {
        this.updateAppointment();
      }
    )
  }

  public updateAppointment()
  {
    this.date = new Date();
    this.endTime = this.date.getHours() + ':' + this.date.getMinutes() + ':' + this.date.getSeconds();
    this.startTime = localStorage.getItem('fechaInicio') != '' ? localStorage.getItem('fechaInicio') : this.endTime;
    this.endAppointment.cita_id = this.appointment.idCita;
    this.endAppointment.horaInicio = this.startTime;
    this.endAppointment.horaFin = this.startTime;    


    this.appointmentService.finishAppointment(this.endAppointment).subscribe(
      () => {}
    )
    this.router.navigateByUrl('main/doctor/appointment-accepted');

  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/Model/Appointment';
import { MedicalPrescription } from 'src/app/Model/MedicalPrescription';
import { AppointmentService } from 'src/app/Services/Appointment/appointment.service';
import { MedicationService } from 'src/app/Services/Medication/medication.service';

@Component({
  selector: 'app-register-medication',
  templateUrl: './register-medication.component.html',
  styleUrls: ['./register-medication.component.scss']
})
export class RegisterMedicationComponent implements OnInit {

  public formMedicalPrescription: FormGroup = this.formBuilder.group({});
  public listMedicalPrescription: Array<MedicalPrescription> = this.medicationService.getListMedicalPrescription();
  public appointment: Appointment = this.appointmentService.getAppointment();

  constructor(private medicationService: MedicationService, private appointmentService: AppointmentService, private formBuilder: FormBuilder, private router: Router) { 
    this.createForm();
  }

  ngOnInit(): void {
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
      this.medicationService.addMedicalPrescriptionToList(this.formMedicalPrescription.value as MedicalPrescription, this.appointment.idCita);
      this.formMedicalPrescription.reset();
    }
  }

  public createListMedicalPrescription()
  {
    this.medicationService.createMedicalPrescription().subscribe(
      () => {
        this.router.navigateByUrl('main/doctor/register-medication');
      }
    )
  }
}

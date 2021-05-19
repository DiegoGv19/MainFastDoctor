import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/Model/Appointment';
import { MedicalHistory } from 'src/app/Model/MedicalHistory';
import { AppointmentService } from 'src/app/Services/Appointment/appointment.service';
import { MedicalHistoryService } from 'src/app/Services/MedicalHistory/medical-history.service';

@Component({
  selector: 'app-medical-history-doctor',
  templateUrl: './medical-history-doctor.component.html',
  styleUrls: ['./medical-history-doctor.component.scss']
})
export class MedicalHistoryDoctorComponent implements OnInit {

  public appointment: Appointment = this.appointmentService.getAppointment();
  public listMedicalHistory: Array<MedicalHistory> = new Array();

  constructor(private appointmentService: AppointmentService, private medicalHistoryService: MedicalHistoryService, private router: Router) { }

  ngOnInit(): void {
    this.findMedicalHistory();
  }

  public findMedicalHistory()
  {
    this.medicalHistoryService.findMedicalHistoryDoctor(this.appointment.paciente.idPaciente).subscribe(
      (data) => {
        this.listMedicalHistory = data;
        this.medicalHistoryService.setMedicalHistory(new MedicalHistory());
      }
    );
  }

  public viewMedicalHistory(medicalHistory: MedicalHistory)
  {
    this.medicalHistoryService.setMedicalHistory(medicalHistory);
    this.router.navigateByUrl('main/doctor/view-medical-history');
  }

  public registerMedicalHistory()
  {
    this.router.navigateByUrl('main/doctor/register-medical-history');
  }
}

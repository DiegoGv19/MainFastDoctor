import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './Pages/SecondaryPages/mainPage/doctor/doctor.component';
import { LoginComponent } from './Pages/MainPages/login/login.component';
import { MainPageComponent } from './Pages/MainPages/main-page/main-page.component';
import { PatientComponent } from './Pages/SecondaryPages/mainPage/patient/patient.component';
import { SingUpComponent } from './Pages/MainPages/sing-up/sing-up.component';
import { SingUpDoctorComponent } from './Pages/SecondaryPages/SingUp/sing-up-doctor/sing-up-doctor.component';
import { SingUpPatientComponent } from './Pages/SecondaryPages/SingUp/sing-up-patient/sing-up-patient.component';
import { MainPatientComponent } from './Components/Patient/main-patient/main-patient.component';
import { MedicalAppointmentComponent } from './Components/Patient/medical-appointment/medical-appointment.component';
import { ListAvailableDoctorsComponent } from './Components/Patient/list-available-doctors/list-available-doctors.component';
import { ViewDoctorComponent } from './Components/Patient/view-doctor/view-doctor.component';
import { MedicalHistoryComponent } from './Components/Patient/medical-history/medical-history.component';
import { ViewMedicalHistoryComponent } from './Components/Patient/view-medical-history/view-medical-history.component';
import { MainDoctorComponent } from './Components/Doctor/main-doctor/main-doctor.component';
import { ListAppointmentAvailabilityComponent } from './Components/Doctor/list-appointment-availability/list-appointment-availability.component';

const routes: Routes = [
  {
    path: 'login',
    redirectTo: ''
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'singup',
    component: SingUpComponent,
    children: [
      {
        path: 'doctor',
        component: SingUpDoctorComponent
      },
      {
        path: 'patient',
        component: SingUpPatientComponent
      }
    ]
  },
  {
    path: 'main',
    component: MainPageComponent,
    children: [
      {
        path: 'doctor',
        component: DoctorComponent,
        children: [
          {
            path: '',
            component: MainDoctorComponent
          },
          {
            path: 'main-doctor',
            redirectTo: ''
          },
          {
            path: 'appointment-availability',
            component: ListAppointmentAvailabilityComponent
          }
        ]
      },
      {
        path: 'patient',
        component: PatientComponent,
        children: [
          {
            path: 'main-patient',
            redirectTo: ''
          },
          {
            path: '',
            component: MainPatientComponent
          },
          {
            path: 'medical-appointment',
            component: MedicalAppointmentComponent
          },
          {
            path: 'list-available-doctor',
            component: ListAvailableDoctorsComponent
          },
          {
            path: 'view-doctor',
            component: ViewDoctorComponent
          },
          {
            path: 'medical-history',
            component: MedicalHistoryComponent
          },
          {
            path: 'view-medical-history',
            component: ViewMedicalHistoryComponent
          }
        ]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

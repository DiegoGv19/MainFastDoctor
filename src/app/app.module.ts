import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/MainPages/login/login.component';
import { DoctorComponent } from './Pages/SecondaryPages/mainPage/doctor/doctor.component';
import { PatientComponent } from './Pages/SecondaryPages/mainPage/patient/patient.component';
import { MainPageComponent } from './Pages/MainPages/main-page/main-page.component';
import { SingUpComponent } from './Pages/MainPages/sing-up/sing-up.component';
import { SingUpPatientComponent } from './Pages/SecondaryPages/SingUp/sing-up-patient/sing-up-patient.component';
import { SingUpDoctorComponent } from './Pages/SecondaryPages/SingUp/sing-up-doctor/sing-up-doctor.component';
import { MenuSingUpComponent } from './Components/Menu/menu-sing-up/menu-sing-up.component';
import { AlertSingUpComponent } from './Components/Alert/alert-sing-up/alert-sing-up.component';
import { MainPatientComponent } from './Components/Patient/main-patient/main-patient.component';
import { MedicalAppointmentComponent } from './Components/Patient/medical-appointment/medical-appointment.component';
import { ListAvailableDoctorsComponent } from './Components/Patient/list-available-doctors/list-available-doctors.component';
import { SideBarPatientComponent } from './Components/SideBar/side-bar-patient/side-bar-patient.component';
import { HeaderComponent } from './Components/Header/header/header.component';
import { DoctorPerfilComponent } from './Components/Doctor/doctor-perfil/doctor-perfil.component';
import { ViewDoctorComponent } from './Components/Patient/view-doctor/view-doctor.component';
import { SideBarDoctorComponent } from './Components/SideBar/side-bar-doctor/side-bar-doctor.component';
import { MedicalHistoryComponent } from './Components/Patient/medical-history/medical-history.component';
import { ViewMedicalHistoryComponent } from './Components/Patient/view-medical-history/view-medical-history.component';
import { MainDoctorComponent } from './Components/Doctor/main-doctor/main-doctor.component';
import { ListAppointmentAvailabilityComponent } from './Components/Doctor/list-appointment-availability/list-appointment-availability.component';
import { ListAppointmentAcceptedComponent } from './Components/Doctor/list-appointment-accepted/list-appointment-accepted.component';
import { MedicalHistoryDoctorComponent } from './Components/Doctor/medical-history-doctor/medical-history-doctor.component';
import { RegisterMedicalHistoryComponent } from './Components/Doctor/register-medical-history/register-medical-history.component';
import { RegisterMedicationComponent } from './Components/Doctor/register-medication/register-medication.component';
import { ViewMedicalHistoryDoctorComponent } from './Components/Doctor/view-medical-history-doctor/view-medical-history-doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DoctorComponent,
    PatientComponent,
    MainPageComponent,
    SingUpComponent,
    SingUpDoctorComponent,
    SingUpPatientComponent,
    MenuSingUpComponent,
    AlertSingUpComponent,
    MainPatientComponent,
    MedicalAppointmentComponent,
    ListAvailableDoctorsComponent,
    SideBarPatientComponent,
    HeaderComponent,
    DoctorPerfilComponent,
    ViewDoctorComponent,
    SideBarDoctorComponent,
    MedicalHistoryComponent,
    ViewMedicalHistoryComponent,
    MainDoctorComponent,
    ListAppointmentAvailabilityComponent,
    ListAppointmentAcceptedComponent,
    MedicalHistoryDoctorComponent,
    RegisterMedicalHistoryComponent,
    RegisterMedicationComponent,
    ViewMedicalHistoryDoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    GoogleMapsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCDjxxNYD25pHhGHBYojnfDFUdKJYsDQ2w'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

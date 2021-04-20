import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

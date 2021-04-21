import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/Model/Doctor';
import { DoctorService } from 'src/app/Services/Doctor/doctor.service';

@Component({
  selector: 'app-doctor-perfil',
  templateUrl: './doctor-perfil.component.html',
  styleUrls: ['./doctor-perfil.component.scss']
})
export class DoctorPerfilComponent implements OnInit {

  doctor: Doctor = this.doctorService.getDoctorSelect();

  constructor(private doctorService: DoctorService, private routes: Router) { }

  ngOnInit(): void {

  }
}

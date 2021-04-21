import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/Model/Doctor';
import { DoctorService } from 'src/app/Services/Doctor/doctor.service';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.scss']
})
export class ViewDoctorComponent implements OnInit {

  constructor(private doctorService: DoctorService, private router: Router) { }

  ngOnInit(): void {
  }

  public volver() 
  {
    this.doctorService.setDoctorSelect(new Doctor());
    this.router.navigateByUrl('main/patient/list-available-doctor')
  }
}

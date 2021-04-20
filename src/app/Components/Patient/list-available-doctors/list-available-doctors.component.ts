import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/Model/Doctor';
import { DoctorService } from 'src/app/Services/Doctor/doctor.service';

@Component({
  selector: 'app-list-available-doctors',
  templateUrl: './list-available-doctors.component.html',
  styleUrls: ['./list-available-doctors.component.scss']
})
export class ListAvailableDoctorsComponent implements OnInit {

  public listDoctors: Array<Doctor> = new Array();

  constructor(private doctorService: DoctorService) { 

  }

  ngOnInit(): void {
    this.findDoctorsAvailable();
    this.listDoctors = this.doctorService.getListDoctorsAvailable();
  }

  private findDoctorsAvailable()
  {
    this.doctorService.findDoctorsAvailable().subscribe(
      (data) => {
        this.listDoctors = data;
        this.doctorService.setListDoctorsAvailable(data);
      }
    )
  }
}

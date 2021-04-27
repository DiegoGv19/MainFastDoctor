import { Component, OnInit } from '@angular/core';
import { GoogleMapService } from 'src/app/Services/GoogleMap/google-map.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  constructor(private googleMapService: GoogleMapService) { 
  
  }

  ngOnInit(): void {
    this.googleMapService.getCurrentPosition();
  }
}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert-sing-up',
  templateUrl: './alert-sing-up.component.html',
  styleUrls: ['./alert-sing-up.component.scss']
})
export class AlertSingUpComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public redirect()
  {
    this.router.navigateByUrl('login');
  }
}

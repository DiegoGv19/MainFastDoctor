import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideBarPatientService {

  @Output() activeMenu: EventEmitter<boolean> = new EventEmitter();

  constructor() { }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  private listDistrict: Array<string> = ['ate', 'callao'];

  constructor() { }

  public getListDistrict(): Array<string>
  {
    return this.listDistrict;
  }
}

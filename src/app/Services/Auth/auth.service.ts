import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from 'src/app/Model/Auth';
import { Token } from 'src/app/Model/Token';
import { ApiService } from '../Api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlLogin: string = 'api/auth/login';

  
  private DOCTOR_AUTHORITIES = 'ROLE_DOCTOR';
  private PATIENT_AUTHORITIES = 'ROLE_PACIENTE';


  private token: Token = new Token();


  constructor(private api:ApiService, private httpClient: HttpClient , private router: Router) { }

  public getHttpHeaders(): HttpHeaders
  {
    let httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.token.tokenType} ${this.token.token}`
    })
    return httpHeaders;
  }

  public setToken(token: Token)
  {
    this.token = token;
  }
  public getToken(): Token
  {
    return this.token;
  }
  public saveToken()
  {
    localStorage.setItem('Token', JSON.stringify(this.token));
  } 
  public loandToken()
  {
    let token = JSON.parse(localStorage.getItem('Token') || '{}');
    this.token = token == '{}' ? new Token : token;
  }
  public clearToken()
  {
    this.token = new Token();
    localStorage.setItem('Token', '');
  } 

  public login(auth: Auth): Observable<Token>
  {
    return this.httpClient.post<Token>(`${this.api.getUrl()}/${this.urlLogin}`, auth);
  }

  public whatIs() {
    switch(this.token.authorities[0].authority) {
      case this.DOCTOR_AUTHORITIES: {
        this.router.navigateByUrl('main/doctor');
        break;
      }

      case this.PATIENT_AUTHORITIES: {
        this.router.navigateByUrl('main/patient');
        break;
      }
    }
  }

}

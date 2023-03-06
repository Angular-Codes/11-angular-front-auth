import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';
import { AuthResponse, User } from '../../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = 'http://localhost:4000/api/auth'
  private _user!: User;

  get user() {
    return { ...this._user }
  }

  constructor(
    private http: HttpClient
  ) { }

  login( email: string, password: string ){
    return this.http.post<AuthResponse>(`${this.baseUrl}`, { email, password })
            .pipe(
              tap( rest => {
                if( !rest.ok ) return
                localStorage.setItem('token', rest.token!)
                this._user = {
                    name: rest.name!,
                    uid : rest.uid!,
                }
              }),
              map( data => data.ok),
              catchError( err => of(err.error.msg) )
            );
  }

  validateToken() {
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');

    return this.http.get<AuthResponse>(`${this.baseUrl}/renew`, { headers });
  }

}

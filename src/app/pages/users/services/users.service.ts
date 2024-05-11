import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {}
  getAllUsers(params: any): Observable<any> {
    return this.httpClient.get(`${environment.envUrl}/users/`, {
      params,
    });
  }
  getUserByID(id: string): Observable<any> {
    return this.httpClient.get(
      `${environment.envUrl}/users/${id}`
    );
  }

}

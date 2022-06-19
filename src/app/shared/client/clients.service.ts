import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { ClientModel} from './client.model';
import {BehaviorSubject} from 'rxjs';
import {User} from '../auth/user.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  client = new BehaviorSubject<ClientModel>(undefined);
  selectedClient: ClientModel;

  constructor(private http: HttpClient) {
  }
  fetchClients(firstName, lastName, clientKey) {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('firstName', firstName);

    httpParams = httpParams.append('lastName', lastName);

    httpParams = httpParams.append('clientKey', clientKey);
    return this.http.get<ClientModel[]>(`clients`, { params: httpParams});
    // return this.http.get<ClientModel[]>(`https://bog-angular-course-api.herokuapp.com/clients?firstName=$
    // {firstName}&lastName=${lastName}&clientKey=${clientKey}`);
  }
  createClient(registerForm) {
    return this.http.put('clients', registerForm.value);
  }
}

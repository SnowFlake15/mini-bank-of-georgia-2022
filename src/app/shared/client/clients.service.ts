import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { ClientModel} from './client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
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
  fetchClient(){
  }
  // createClient(firstName: string, lastName: string, plusPoints: number){
  //   const client = {
  //     firstName, lastName, plusPoints
  //   };
  //   this.http.client<{id: number}>('https://bog-angular-course-api.herokuapp.com/clients', user)
  //     .subscribe(response => {
  //       console.log(response);
  //     });
  // }
  // fetchUsers(){
  //   return this.http.get<Client[]>('https://bog-angular-course-api.herokuapp.com/clients')
  //     .pipe(
  //       map((data) => {
  //         data.forEach(item => {
  //           item.validated = true;
  //         });
  //         return data;
  //       })
  //     ).subscribe(users => {})
  // }
}

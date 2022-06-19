import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ClientModel} from '../client/client.model';
import {AccountModel} from './accountModel';
import {LoaderService} from '../loader/loader.service';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpClient, private loaderService: LoaderService) { }
  fetchClientAccounts(clientKey) {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('clientKey', clientKey);
    return this.http.get<AccountModel[]>(`accounts`, { params: httpParams});
  }
  fetchAccounts() {
    return this.http.get<AccountModel[]>('accounts');
  }
  createAccount(clientKey, accountName, amount) {
    return this.http.put('accounts', {clientKey, accountName, amount});
  }
  deleteAccount(key){
    let httpParams = new HttpParams();
    httpParams = httpParams.append('accountKey', key);
    return this.http.delete('accounts', {params: httpParams});
  }
  transfer(senderAccountKey, receiverAccountKey, amount){
    return this.http.post<void>('transfer', { senderAccountKey, receiverAccountKey, amount })
      .pipe(this.loaderService.useLoader, catchError((err) => throwError(err.error)) );
  }
}

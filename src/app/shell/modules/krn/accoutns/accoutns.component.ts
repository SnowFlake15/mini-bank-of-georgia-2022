import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ClientsService} from '../../../../shared/client/clients.service';
import {FormGroup} from '@angular/forms';
import {AccountsService} from '../../../../shared/account/accounts.service';
import {Observable} from 'rxjs';
import {error} from 'protractor';
import {LoaderService} from '../../../../shared/loader/loader.service';

@Component({
  selector: 'bg-accoutns',
  templateUrl: './accoutns.component.html',
  styleUrls: ['./accoutns.component.scss']
})
export class AccoutnsComponent implements OnInit {
  clientKey = this.clientService.selectedClient.clientKey;
  form: FormGroup;
  accounts = [];
  isLoading = false;
  error: string;
  constructor(private http: HttpClient, private accountsService: AccountsService, private clientService: ClientsService, private loader: LoaderService) { }

  ngOnInit(): void {
    this.onFetchAccounts();
  }
  onFetchAccounts() {
    // this.fetchClients();
    // console.log(this.fetchClients())
    this.accountsService.fetchClientAccounts(this.clientKey)
      .pipe((obs) => this.loader.useLoader(obs))
      .subscribe((accounts) => {
        console.log(accounts);
        this.accounts = accounts;
      });
  }
  onDeleteAccount(key){
    this.accountsService.deleteAccount(key)
      .pipe((obs) => this.loader.useLoader(obs))
      .subscribe(() => {
        this.onFetchAccounts();
        // this.posts = this.posts.filter(post => post.id !== id);
    }, error => {
        this.error = error.error;
        console.log(this.error);
      });
  }

}

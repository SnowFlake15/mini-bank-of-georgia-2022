import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ClientsService} from '../../../../../shared/client/clients.service';
import {BgValidators} from '../../../../../shared/validators/bg-validators';
import {AccountsService} from '../../../../../shared/account/accounts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bg-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  createAccount: FormGroup;

  constructor(private http: HttpClient, private accountsService: AccountsService,
              private clientsService: ClientsService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
    this.createAccount.value.clientKey = this.clientsService.selectedClient.clientKey;
  }
  get(controlName: string): AbstractControl{
    return this.createAccount.get(controlName);
  }
  initForm(){
    this.createAccount = new FormGroup({
      accountName: new FormControl(undefined, [BgValidators.required, BgValidators.minLength(2), BgValidators.maxLength(30)]),
      amount: new FormControl(undefined, [BgValidators.required, BgValidators.min(0)]),
    });
    this.createAccount.value.clientKey = this.clientsService.selectedClient.clientKey;
  }
  errors(controlName: string){
    return Object.values(this.get(controlName).errors);
  }
  onCreateAccount(){
    this.createAccount.value.clientKey = this.clientsService.selectedClient.clientKey;

    if (this.createAccount.invalid) {
      return;
    }
    this.createAccount.value.clientKey = this.clientsService.selectedClient.clientKey;
    this.accountsService.createAccount(this.clientsService.selectedClient.clientKey,
      this.createAccount.value.accountName, this.createAccount.value.amount).subscribe();
    this.createAccount.reset();
    this.router.navigate(['/krn/accounts/']);
  }

}

import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {AccountModel} from '../../../../shared/account/accountModel';
import {BgValidators} from '../../../../shared/validators/bg-validators';
import {AccountsService} from '../../../../shared/account/accounts.service';
import {LoaderService} from '../../../../shared/loader/loader.service';
import {ClientsService} from '../../../../shared/client/clients.service';
import {switchMap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ErrorMsg} from '../../../../shared/errorMsg';

@Component({
  selector: 'bg-pmd311',
  templateUrl: './pmd311.component.html',
  styleUrls: ['./pmd311.component.scss']
})
export class Pmd311Component implements OnInit {
  transferForm: FormGroup;
  accounts: AccountModel[] = [];
  clientAccounts: AccountModel[] = [];
  clientKey = this.clientsService.selectedClient.clientKey;
  constructor(private accountsService: AccountsService, private loader: LoaderService, private clientsService: ClientsService,
              private router: Router, private errorMsg: ErrorMsg) { }

  ngOnInit(): void {
    this.onFetchClientAccounts();
    console.log(this.clientAccounts);
    this.initForm();
    this.onFetchAccounts();
  }
  initForm(){
    this.transferForm = new FormGroup({
      senderAccountKey: new FormControl(undefined, BgValidators.required, ),
      receiverAccountKey: new FormControl(undefined,  BgValidators.required, ),
      amount: new FormControl(undefined, BgValidators.required,)
    });
  }
  private onFetchClientAccounts() {
    this.accountsService.fetchClientAccounts(this.clientKey)
      .pipe((obs) => this.loader.useLoader(obs))
      .subscribe((accounts) => {
        console.log(accounts);
        this.clientAccounts = accounts;
      });
  }
  private onFetchAccounts() {
    this.accountsService.fetchAccounts()
      .pipe((obs) => this.loader.useLoader(obs))
      .subscribe((accounts) => (this.accounts = accounts));
  }
  get(controlName: string): AbstractControl{
    return this.transferForm.get(controlName);
  }
  onTransfer(){
    if (this.transferForm.invalid) {
      return;
    }
    const senderAccountKey = this.get('senderAccountKey').value;
    const receiverAccountKey = this.get('receiverAccountKey').value;
    const amount = this.get('amount').value;

    this.accountsService.transfer(senderAccountKey, receiverAccountKey, amount)
      .subscribe(
      (resData) => {
        this.router.navigate(['/krn/accounts/']);
        this.transferForm.reset();
      },
      (error) => {
        this.errorMsg.error.next(error);
      }
    );
  }
}

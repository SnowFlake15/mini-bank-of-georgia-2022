import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {BgValidators} from '../../../../shared/validators/bg-validators';
import {HttpClient} from '@angular/common/http';
import {ClientsService} from '../../../../shared/client/clients.service';

@Component({
  selector: 'bg-bpm001',
  templateUrl: './bpm001.component.html',
  styleUrls: ['./bpm001.component.scss']
})
export class Bpm001Component implements OnInit {
  registerUserForm: FormGroup;
  constructor(private http: HttpClient, private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.initForm();
  }
  get(controlName: string): AbstractControl{
    return this.registerUserForm.get(controlName);
  }
  initForm(){
    this.registerUserForm = new FormGroup({
      firstName: new FormControl(undefined, [BgValidators.required, BgValidators.minLength(2), BgValidators.maxLength(30)]),
      lastName: new FormControl(undefined, [BgValidators.required, BgValidators.minLength(2), BgValidators.maxLength(30)]),
      plusPoints: new FormControl(undefined, [BgValidators.required, BgValidators.min(0)])
    });
  }
  errors(controlName: string){
    return Object.values(this.get(controlName).errors);
  }
  onSubmit(){
    if (this.registerUserForm.invalid) {
      return;
    }
    this.clientsService.createClient(this.registerUserForm).subscribe();
    this.clientsService.selectedClient = this.registerUserForm.value;
  }


}

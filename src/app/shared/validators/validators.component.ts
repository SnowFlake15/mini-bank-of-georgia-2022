import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'bg-validators',
  // template: `<p *ngIf="get(controlName).invalid && get(controlName).touched" class="ui red text" >
  //   <ng-container *ngFor="let errorMessage of errors(controlName)">
  //     <span>{{errorMessage}}</span>
  //     hiuh
  //   </ng-container>
  // </p>
  // `,
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.scss']
})
export class ValidatorsComponent implements OnInit {
  @Input() form: FormGroup;
  error;
  @Input() controlName;
  constructor() { }

  ngOnInit(): void {
  }
  get(controlName: string): AbstractControl{
    return this.form.get(controlName);
  }
  errors(controlName) {
    console.log(Object.values(this.get(controlName).errors));
    return this.get(controlName)?.errors
      ? Object.values(this.get(controlName).errors)
      : [];
    // return Object.values(this.get(controlName).errors);
  }
}

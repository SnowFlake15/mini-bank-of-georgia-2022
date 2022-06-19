import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {BgValidators} from '../../shared/validators/bg-validators';
import {AuthService} from '../../shared/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'bg-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  error;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  get(controlName: string): AbstractControl{
    return this.registerForm.get(controlName);
  }
  onRegister() {
    if (this.registerForm.invalid) {
      return;
    }
    const name = this.get('name').value;
    const username = this.get('userName').value;
    const password = this.get('password').value;
    this.authService.register(name, username, password).subscribe(
      resData => {
        console.log(resData);
      },
      error => {
        this.error = error;
      }
    );
    this.router.navigate(['/bpm/bpm000']);
    this.registerForm.reset();
  }

  initForm(){
    this.registerForm = new FormGroup({
      name: new FormControl(undefined, [BgValidators.required, BgValidators.minLength(2), BgValidators.maxLength(30)]),
      userName: new FormControl(undefined, [BgValidators.required, BgValidators.minLength(2), BgValidators.maxLength(30), BgValidators.pattern(/^\S*$/)]),
      password: new FormControl(undefined, [BgValidators.required, BgValidators.minLength(2), BgValidators.maxLength(30)]),
      repeatPassword: new FormControl('', [BgValidators.required, BgValidators.minLength(2), BgValidators.maxLength(30),
        BgValidators.confirmPassword(() => this.registerForm?.get('password')?.value) ]),
      // BgValidators.confirmPassword(this.registerForm.value.password, this.registerForm.value.repeatPassword)

    },
      // [BgValidators.confirmPassword()]
    );
  }
  errors(controlName: string){
    // console.log(typeof this.registerForm.get('password').value);
    return Object.values(this.get(controlName).errors);
  }
  onSubmit(){}
}

import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {ValueTransformer} from '@angular/compiler/src/util';
import {any} from 'codelyzer/util/function';

export class BgValidators extends Validators{
  static required(control: FormControl){
    return super.required(control) ? {required: 'აუცილებელი ველი'} : undefined;
  }
  static minLength(minLength: number){
    return (control) => super.minLength(minLength)(control) ? {required: 'შეიყვანეთ მინიმუმ 2 სიმბოლო'} : undefined;
  }
  static maxLength(minLength: number){
    return (control) => super.maxLength(minLength)(control) ? {required: 'შეიყვანეთ მაქსიმუმ 30 სიმბოლო'} : undefined;
  }
  static min(min: number){
    return (control) => super.min(min)(control) ? {required: 'გთხოვთ შეიყვანოთ მინიმუმ 0'} : undefined;
  }
  static email(control: AbstractControl){
    return super.email(control) ? {required: 'შეიყვანეთ სწორი მეილი'} : undefined;
  }
  static pattern(pattern: string | RegExp, patternDescription?: string) {
    return (control: AbstractControl) => {
      if (super.pattern(pattern)(control)) {
        return {
          required: `არ გამოიყენოთ დაშორებები`
        };
      }
    };
  }
  static abc(con: FormControl){
    // if(super.)
    // console.log(con.value)
    return {
      required: `არ გამოიყენოთ დაშორებები`
    };
  }
  // static another(group: FormGroup){
  //   console.log(group)
  //   if ((group.get('password').value.length > 0 &&
  //   group.get('password').value.length > 0) && (group.get('password').value !== group.get('repeatPassword').value)){
  //     return {
  //       required: `პაროლები არ ემთხვევა`
  //     };
  //   }
  // }
  static confirmPassword(getPassowrd) {
      return (control) =>
        control.value !== getPassowrd() ? {confirmPasswordMismatch: 'პაროლები არ ემთხვევა '}
          : undefined;
    }
  // static confirmPassword(getPassowrd) {
  //   return (group: FormGroup) => {
  //     if (group.get('password').value !== group.get('repeatPassword').value) {
  //       console.log('პაროლები არ ემთხვევა')
  //       return {
  //         required: `პაროლები არ ემთხვევა`
  //       };
  //     }
  //   };
  // }
  // static checkPassword(getPassowrd: () => string) {
  //   return (control) =>
  //     control.value !== getPassowrd() ? {confirmPasswordMismatch: 'პაროლები არ ემთხვევა '}
  //       : undefined;
  // }
  static  another(val1, val2){
    return (group: FormGroup) => {
    // console.log(val1, val2);
      console.log(val1.value, group.get(val2).value, 'before');
      if (group.get(val1) !== group.get(val2)){
      // console.log(group.get(val1), group.get(val2));
      return {
        required: `პაროლები არ ემთხვევა`
      };
    }
    };
    // if (group.get('password') !== group.get('repeatPassword')){
    //   return 'პაროლები არ ემთხვევა';
    // }
  }
}

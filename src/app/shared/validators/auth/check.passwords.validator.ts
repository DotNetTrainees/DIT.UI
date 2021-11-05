import { AbstractControl, ValidatorFn } from '@angular/forms';

export function checkPasswords(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    let password: string = control.value['password'];
    let confirmPassword: string = control.value['confirmPassword'];

    return password !== confirmPassword ? { password: true } : null;
  };
}

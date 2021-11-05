import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { IRegisterUser } from 'src/app/shared/interfaces/user/register.user.interface';
import { checkPasswords } from 'src/app/shared/validators/auth/check.passwords.validator';
import { Login, Register } from 'src/app/store/authentication/actions/auth.actions';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  public logo: string = environment.LOGO;

  constructor(
    private store: Store,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        username: ['', Validators.required],
        email: ['', Validators.required, Validators.email],
        password: [
          '',
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9]+$/),
          Validators.minLength(8),
        ],
        confirmPassword: [
          '',
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9]+$/),
          Validators.minLength(8),
        ],
      },
      { validators: checkPasswords() }
    );
  }

  public submit(): void {
    const user: IRegisterUser = {
      UserName: this.form.value.username,
      Email: this.form.value.username,
      Password: this.form.value.username,
      Roles: this.form.value.password,
    };

    this.store.dispatch(new Register(user)).subscribe(() => {
      this.router.navigate(['/profile']);
    });
    this.form.reset();
  }
}

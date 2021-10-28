import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from 'ngxs';
import { IUser } from 'src/app/shared/interfaces/user/user.interface';
import { Login } from 'src/app/store/authentication/actions/auth.actions';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public logo: string = environment.LOGO;

  constructor(
    private store: Store,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9]+$/),
        Validators.minLength(8),
      ]),
      remember: new FormControl(false),
    });
  }

  public submit(): void {
    const user: IUser = {
      username: this.form.value.username,
      password: this.form.value.password,
    };

    this.store.dispatch(new Login(user)).subscribe(() => {
      this.router.navigate(['/profile']);
    });
    this.form.reset();
  }
}

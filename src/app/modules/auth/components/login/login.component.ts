import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { IAuthUser } from 'src/app/shared/interfaces/user/auth.user.interface';
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
  public submitted: boolean;

  constructor(
    private store: Store,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      remember: [false],
    });
  }

  public submit(): void {

    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const user: IAuthUser = {
      UserName: this.form.value.username,
      Password: this.form.value.password,
    };

    this.store.dispatch(new Login(user)).subscribe(() => {
      this.router.navigate(['/profile']);
    });
    this.form.reset();
  }
}

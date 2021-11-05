import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { IAuthUser } from 'src/app/shared/interfaces/user/auth.user.interface';
import { Login } from 'src/app/store/authentication/actions/auth.actions';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
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
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
    });
  }

  public submit(): void {
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

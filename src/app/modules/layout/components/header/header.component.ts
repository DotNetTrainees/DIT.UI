import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public logo: string = environment.LOGO;
  constructor(private router: Router, public authService: AuthService) {}

  ngOnInit(): void {}

  public logOut(): void{
    this.authService.logout();
  }
}

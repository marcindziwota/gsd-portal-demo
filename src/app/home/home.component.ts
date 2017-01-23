import { Component }  from '@angular/core';
import { Auth } from '../auth/auth.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  providers: [ Auth ],
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  constructor(private router: Router, private auth: Auth) {
    if (auth.authenticated()) {
      this.router.navigate(['/hces']);
    }
  }
};
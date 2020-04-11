import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.minLength(3)]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login(e: Event) {
    this.authService.login(this.form.value).subscribe();
  }
}

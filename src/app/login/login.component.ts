import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { MdCard } from '@angular2-material/card';
import { MdButton } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
  directives: [ REACTIVE_FORM_DIRECTIVES, MD_INPUT_DIRECTIVES, MdCard, MdButton ]
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  emailValidator: string = '(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+';
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      "email": new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(this.emailValidator),
      ])),
      "password": new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(8),
      ]))
    });
  }

  ngOnInit() {}

  // little chack to setup the error color,
  // this feature will be avilable on beta 8
  getDividerColor(item): string {
    return !this.form.controls[item].valid? 'warn': 'primary';
  }

  doLogin(): void {
    console.log('loggin!!!!', this.form);
  }
}

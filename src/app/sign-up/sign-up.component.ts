import { Component, OnInit } from '@angular/core';
import {Login} from "../common/login";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  model: Login = new Login();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // form submitted
    console.log(this.model);
  }

}

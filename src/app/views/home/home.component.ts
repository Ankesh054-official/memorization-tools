import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public signin: Boolean = true;
  public signup: Boolean = false;

  constructor() {
    
  }

  public switch(){
	  this.signin = !this.signin;
    this.signup = !this.signup;
	}

}

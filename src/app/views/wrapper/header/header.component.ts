import { ConstantPool } from '@angular/compiler';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(){

  }

  ngInit(){
    console.log(environment.UNSPLESH_baseUrl);
  }

}

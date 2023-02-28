import { ConstantPool } from '@angular/compiler';
import { Component } from '@angular/core';

import { ApiService } from 'src/app/services/api/api.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public image: string = "";

  constructor(private api: ApiService){

  }

  ngOnInit(){

    this.api.searchImage('study').subscribe((response: any) => {
      console.table(JSON.parse(response));
      console.log(JSON.parse(response).results[0])
       this.image = (JSON.parse(response).results[0]).urls.regular;
    });

  }

  getimage(){
    return "url(' " + this.image + " ')";
  }

}

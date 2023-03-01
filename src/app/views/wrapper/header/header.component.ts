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
  public hasNotebook: boolean = true;

  constructor(private api: ApiService){

  }

  ngOnInit(){

    this.api.searchImage('open notebook').subscribe((response: any) => {
      console.table((response));
      console.log((response).results[0])
      this.image = ((response).results[0]).urls.regular;
    });
    console.log("api");

  }

  getimage(){
    return "url('" + this.image + "')";
  }

}

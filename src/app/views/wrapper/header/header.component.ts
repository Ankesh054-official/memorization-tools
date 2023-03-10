import { ConstantPool } from "@angular/compiler";
import { Component, Type } from "@angular/core";

import { ApiService } from "src/app/services/api/api.service";

import { DataManagerService } from "src/app/services/dataService/data-manager.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  public hasNotebook: boolean = true;
  public login: boolean = true;
  public image: string = "";
  public headerType: string = "notebook";

  constructor(
    private api: ApiService,
    private dataManager: DataManagerService
  ) {}

  ngOnInit() {
    
    // Initlizing header image.
    this.initlize_Header_Image();
    this.dataManager.storeUser("dev");
    console.log(this.dataManager.getUser());
    
  }


  // To initlize image in header.
  public initlize_Header_Image(): void{

    const Image_Type: string = this.get_Header_Image_Type();

    this.api.searchImage(Image_Type).subscribe((response: any) => {
      this.image = response.results[0].urls.regular;
    });
  }


  // Decide which type of image should be in background of header.
  public get_Header_Image_Type(): string {
    // this.dataManager.getNotebooks() || 
    const list_Notebook: any = [];

    let ImageType: string = list_Notebook.length == 0? "open notebook": "tags";

    if(this.headerType == 'all-subject'){
      ImageType = "books";
    }

    return ImageType;
  }

  // returns image in  url function
  public getimage(): string {

    return "url('" + this.image + "')";
  }
}

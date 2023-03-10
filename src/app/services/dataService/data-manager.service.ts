import { Injectable } from '@angular/core';
import { StorageManagerService } from '../storage/storage-manager.service';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  constructor(private storageManager: StorageManagerService) { }


  public storeUser(data: any){
    // Store user platform data.
    this.storageManager.store("set", true, 'user_platform_data', data);
  }
  
  
  public getUser():any{
    // Fetch user platform data.
    return this.storageManager.store("get", true, 'user_platform_data');
  }

  public getNotebooks():any{
    // Fetch list of Notebook data.
    return this.storageManager.store("get", true, "list-notebook");
  }

}

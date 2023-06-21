import { Injectable } from '@angular/core';
import { CryptographyService } from '../cryptography/cryptography.service';
import { CookieService } from 'ngx-cookie-service';
import { TemplateBindingParseResult } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class StorageManagerService {

  constructor(
    private securityManager: CryptographyService,
    private cookie: CookieService
    ){

  }


  
  private decrypt_data(data:string = ""){
    // To decrypt data

    const decrypted_data  = this.securityManager.decode(data);
    return decrypted_data;
  }


  private encrypt_data(data:any = ""){
    // To encrypt data

    const parsed_data  = data;
    return this.securityManager.encode(parsed_data);
  }

  
  public store(method:string, secret:boolean = false, key:string, data:string = ""){
    // This function is to check whether data is secret or not.
    // If it's a secret than store in Cache Storage else in Local.

    if(secret){
      // Deal in CacheStorage
      

      if(method === "set"){
        // Storing 
        const encrypted_data = this.encrypt_data(data);
        const encrypted_Key = this.encrypt_data(key);
        this.set_Cache(encrypted_Key, encrypted_data);
      }
      
      if(method === "get"){
        // Fetching
        const ecrypted_key = this.encrypt_data(key);
        const data = this.get_Cache(ecrypted_key);
        return this.decrypt_data(data);
      }
      
    }else{
      // Deal in LocalStorage
      
      if(method === "set"){
        // Storing

        const encrypted_data = this.encrypt_data(data);
        const encrypted_key = this.encrypt_data(key);
        this.set(encrypted_key, encrypted_data);
      }

      if(method === "get"){
        // Fetching
        const decrypt_key = this.decrypt_data(key);
        data = this.get(decrypt_key);
        return this.decrypt_data(data);
      }
    }
  }


  private set(key:string, data:string):any{
    // To Store data in LocalStorage.

    localStorage.setItem(key, data);
  }


  private get(key:string ):any{
    // To Fetch data from LocalStorage.

    const data = localStorage.getItem(key);
    return data;
  }


  private set_Cache(key:string, data:string):any{
    // To Store data in Cache Storage.
    
    this.cookie.set(key, data, 30);
  }
  

  private get_Cache(key:string ):any{
    // To Fetch data from Cache Storage.
    
    const data = this.cookie.get(key);
    return data;
  }

}

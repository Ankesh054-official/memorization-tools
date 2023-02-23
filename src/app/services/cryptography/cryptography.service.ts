import { Injectable } from '@angular/core';
import * as CryptoJS from "crypto-js";


@Injectable({
  providedIn: 'root'
})
export class CryptographyService {
  private secret_Key: string = "";

  constructor() { 
    
    let user_platform_data = {
      userAgent: navigator.userAgent,
      platform:navigator.platform,
      oscpu:navigator.platform,
      language:navigator.language,
      languages:JSON.stringify(navigator.languages)
    }
    this.secret_Key = JSON.stringify(user_platform_data);
  }

  public encode(data:string){
    // To encode data using some hashing key.

    const encrypted_data = CryptoJS.AES.encrypt(data, this.secret_Key).toString();
    return encrypted_data;
  }


  public decode(data:string){
    // To decode data using some hashing key.

    const bytes  = CryptoJS.AES.decrypt(data, this.secret_Key);

    const decrypted_data = bytes.toString(CryptoJS.enc.Utf8);
    return decrypted_data;
  }
}

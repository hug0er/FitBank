import CryptoJS from "crypto-js";
import { Injectable } from '@angular/core';

@Injectable()
export class Servicios{
  
  constructor( ) {

  }
    toAES(pass: string){
        let passw=pass.replace("\"","");
        // console.log("password:",passw);
        let hash = CryptoJS.AES.encrypt(passw,"FIT-2008").toString();
        let e64 = CryptoJS.enc.Base64.parse(hash);
        let final = e64.toString(CryptoJS.enc.Hex);
        // console.log(final);
        // console.log('passF', hash);
        return final;
    }

}